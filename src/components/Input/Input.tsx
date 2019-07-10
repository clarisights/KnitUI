import React, { SFC, ReactNode } from "react"
import styled from "styled-components"
import _ from "lodash"
import { insertIf } from "../../common/_utils"

interface ITheme {
  knitui: {
    inputError: string
    inputSuccess: string
    inputBorderColor: string
    inputColor: string
  }
}

const getInputBorder = (props: {
  theme: ITheme
  error?: boolean
  success?: boolean
}) => {
  const {
    theme: { knitui },
    error,
    success,
  } = props
  if (error) {
    return knitui.inputError
  } else if (success) {
    return knitui.inputSuccess
  }
  return knitui.inputBorderColor
}

const getLabelColor = (props: {
  theme: ITheme
  error: boolean
  success: boolean
}) => {
  const {
    theme: { knitui },
    error,
    success,
  } = props
  if (error) {
    return knitui.inputError
  } else if (success) {
    return knitui.inputSuccess
  }
  return knitui.inputColor
}

const getPadding = size => {
  switch (size) {
    case "small":
      return "0 1rem"
    case "large":
      return "0.8rem 1rem"
    default:
      return "0.4rem 1rem"
  }
}

const getHeight = size => {
  switch (size) {
    case "small":
      return "2rem"
    case "large":
      return "3.6rem"
    default:
      return "2.8rem"
  }
}

const StyledInput: any = styled.input`
  height: ${({ size }) => getHeight(size)};
  width: 100%;
  border: ${props =>
    `${props.theme.knitui.inputBorderWidth} solid ${getInputBorder(props)}`};
  border-radius: ${({ theme: { knitui } }) => knitui.inputBorderRadius};
  padding: ${({ size }) => getPadding(size)};
  box-sizing: border-box;
  margin-bottom: 2px;
  background-color: ${({ theme: { knitui } }) => knitui.inputBgDefault};
  color: ${({ theme: { knitui } }) => knitui.inputColor};
  &:hover {
    background-color: ${({ theme: { knitui } }) => knitui.inputBgHover};
    color: ${({ theme: { knitui } }) => knitui.inputColor};
  }
  &:focus {
    outline: ${({ theme: { knitui } }) => knitui.inputFocusOutline};
    background-color: ${({ theme: { knitui } }) => knitui.inputBgFocus};
    box-shadow: ${({ theme: { knitui } }) => knitui.inputFocusBoxShadow};
  }
  &:active {
    background-color: ${({ theme: { knitui } }) => knitui.inputBgActive};
    ::placeholder {
      color: ${({ theme: { knitui } }) => knitui.inputPlaceholderColorActive};
    }
  }
  ::placeholder {
    color: ${({ theme: { knitui } }) => knitui.inputPlaceholderColor};
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
  /** the size of the input */
  inputSize?: "large" | "small" | "default"
}

const RenderInput: SFC<IInputProps> = props => {
  const {
    placeholder,
    value,
    onChange,
    error,
    success,
    labelText,
    inputSize = "default",
  } = props
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
        size={inputSize}
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
