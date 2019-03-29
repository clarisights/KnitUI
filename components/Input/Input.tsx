import React, { SFC, ReactNode } from "react"
import styled from "styled-components"
import _ from "lodash"
import { insertIf } from "../_utils"

interface ITheme {
  inputError: string
  inputSuccess: string
  inputBorderColor: string
  inputColor: string
}

const getInputBorder = (props: {
  theme: ITheme
  error?: boolean
  success?: boolean
}) => {
  const { theme, error, success } = props
  if (error) {
    return theme.inputError
  } else if (success) {
    return theme.inputSuccess
  }
  return theme.inputBorderColor
}

const getLabelColor = (props: {
  theme: ITheme
  error: boolean
  success: boolean
}) => {
  const { theme, error, success } = props
  if (error) {
    return theme.inputError
  } else if (success) {
    return theme.inputSuccess
  }
  return theme.inputColor
}

const StyledInput: any = styled.input`
  height: ${props => props.theme.inputHeightBase};
  width: 100%;
  border: ${props =>
    `${props.theme.inputBorderWidth} solid ${getInputBorder(props)}`};
  border-radius: ${({ theme }) => theme.inputBorderRadius};
  padding: ${({ theme }) =>
    `${theme.inputPaddingVertical} ${theme.inputPaddingHorizontal}`};
  box-sizing: border-box;
  margin-bottom: 2px;
  background-color: ${({ theme }) => theme.inputBgDefault};
  color: ${({ theme }) => theme.inputColor};
  &:hover {
    background-color: ${({ theme }) => theme.inputBgHover};
    color: ${({ theme }) => theme.inputColor};
  }
  &:focus {
    outline: ${({ theme }) => theme.inputFocusOutline};
    background-color: ${({ theme }) => theme.inputBgFocus};
    box-shadow: ${({ theme }) => theme.inputFocusBoxShadow};
  }
  &:active {
    background-color: ${({ theme }) => theme.inputBgActive};
    ::placeholder {
      color: ${({ theme }) => theme.inputPlaceholderColorActive};
    }
  }
  ::placeholder {
    color: ${({ theme }) => theme.inputPlaceholderColor};
  }
`

const AddonSpan = styled.span`
  display: flex;
  position: relative;
`

const AddonBeforeSpan = styled(AddonSpan)`
  & input {
    padding-left: 34px;
  }
`

const AddonAfterSpan = styled(AddonSpan)`
  & input {
    padding-right: 34px;
  }
`

const AddonContainer = styled.span`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`

const StyledLabel: any = styled.label`
  color: ${props =>
    getLabelColor(props as {
      theme: ITheme
      error: boolean
      success: boolean
    })};
`

export interface IInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  /** This is a placeholder description */
  placeholder?: string
  /** This is a value of the input */
  value?: string
  /** To enable error state */
  error?: boolean
  /** To enable success state */
  success?: boolean
  /** text for the label */
  labelText?: string | ReactNode
  /** onChange handler */
  onChange: (e: React.FormEvent<HTMLInputElement>) => any
  /** to show after input */
  addonAfter?: string | ReactNode
  /** to show before input */
  addonBefore?: string | ReactNode
}

const RenderInput: SFC<IInputProps> = props => {
  const { placeholder, value, onChange, error, success, labelText } = props
  let labelDOM: null | ReactNode = null
  if (labelText) {
    if (_.isString(labelText)) {
      labelDOM = (
        <StyledLabel success={success} error={error}>
          {labelText}
        </StyledLabel>
      )
    }
    labelDOM = labelText
  }
  return (
    <>
      <StyledInput
        placeholder={placeholder}
        error={error}
        success={success}
        onChange={onChange}
        {...insertIf({ value }, !!value)}
      />
      {labelDOM}
    </>
  )
}

function renderInputAddons(
  children: React.ReactElement<any>,
  props: IInputProps
) {
  const { addonAfter, addonBefore } = props
  if (addonBefore) {
    return (
      <AddonBeforeSpan>
        {addonBefore ? (
          <AddonContainer
            css={`
              left: 5px;
            `}>
            {addonBefore}
          </AddonContainer>
        ) : null}
        {children}
      </AddonBeforeSpan>
    )
  }
  if (addonAfter) {
    return (
      <AddonAfterSpan>
        {children}
        {addonAfter ? (
          <AddonContainer
            css={`
              right: 5px;
            `}>
            {addonAfter}
          </AddonContainer>
        ) : null}
      </AddonAfterSpan>
    )
  }
  return children
}

const Input: SFC<IInputProps> = props => {
  const InputElem = RenderInput(props)
  return renderInputAddons(InputElem as React.ReactElement<any>, props)
}

export default Input
