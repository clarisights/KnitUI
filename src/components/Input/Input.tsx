import React, { SFC, ReactNode } from "react"
import styled, { css } from "styled-components"
import _ from "lodash"
import { insertIf } from "../../common/_utils"
import { IStyled } from "../../common/types"
import { BaseComponentProps } from "../../common/types"

export interface IInputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    BaseComponentProps {
  /** This is a placeholder description */
  placeholder?: string
  /** This is a value of the input */
  value?: string
  /** To enable error state */
  error?: boolean
  /** To enable success state */
  success?: boolean
  /** content to be shown above the input as a label */
  label?: string | ReactNode
  /** content to be shown below the input as a notification  */
  notification?: string | ReactNode
  /** onChange handler */
  onChange: (e: React.FormEvent<HTMLInputElement>) => any
  /** to show after input */
  addonAfter?: string | ReactNode
  /** to show before input */
  addonBefore?: string | ReactNode
  /** the size of the input */
  inputSize?: "large" | "default" | "small"
}

type IStyledInput = IStyled<IInputProps>

const getLabelColor = (props: IStyledInput) => {
  const {
    theme: { knitui },
    customProps: { error, success },
  } = props
  if (error) {
    return knitui.inputError
  } else if (success) {
    return knitui.inputSuccess
  }
  return knitui.inputColor
}

const getPadding = (props: IStyledInput) => {
  const {
    customProps: { inputSize },
  } = props
  const HORIZONTAL_PADDING = "1.4rem"
  switch (inputSize) {
    case "small":
      return `0.1rem  ${HORIZONTAL_PADDING}`
    case "large":
      return `0.6rem  ${HORIZONTAL_PADDING}`
    default:
      return `0.4rem  ${HORIZONTAL_PADDING}`
  }
}

const inputSizeToTypographySize = {
  small: 12,
  default: 14,
  large: 14,
}

const getInputBorderColor = (props: IStyledInput, state: string) => {
  const {
    theme: { knitui },
    customProps: { error, success },
  } = props
  if (error) {
    return knitui.inputError
  } else if (success) {
    return knitui.inputSuccess
  }
  if (state === "focus" || state === "active") {
    return knitui.inputFocusBorderColor
  }
  return knitui.inputBorderColor
}

const getInputBorder = (props: IStyledInput, state: string) =>
  `1px solid ${getInputBorderColor(props, state)}`

const getHeight = (props: IStyledInput) => {
  const {
    customProps: { inputSize },
  } = props
  switch (inputSize) {
    case "small":
      return "2rem"
    case "large":
      return "3.2rem"
    default:
      return "2.8rem"
  }
}

const getFontSize = (props: IStyledInput) => {
  const {
    customProps: { inputSize },
    theme: { knitui },
  } = props
  const typographySize = inputSizeToTypographySize[inputSize!]
  return knitui.typography[typographySize].fontSize
}

const getLineHeight = (props: IStyledInput) => {
  const {
    customProps: { inputSize },
    theme: { knitui },
  } = props
  const typographySize = inputSizeToTypographySize[inputSize!]
  return knitui.typography[typographySize].lineHeight
}

const StyledInput: any = styled.input<IStyledInput>`
  height: ${props => getHeight(props)};
  width: 100%;
  margin: 0.4rem 0;
  border-radius: ${({ theme: { knitui } }) => knitui.inputBorderRadius};
  border: ${props => getInputBorder(props, "default")};
  padding: ${props => getPadding(props)};
  box-sizing: border-box;
  background-color: ${({ theme: { knitui } }) => knitui.inputBgDefault};
  color: ${({ theme: { knitui } }) => knitui.inputColor};
  font-size: ${props => `${getFontSize(props)}rem`};
  line-height: ${props => `${getLineHeight(props)}rem`};
  &:hover {
    background-color: ${({ theme: { knitui } }) => knitui.inputBgHover};
    color: ${({ theme: { knitui } }) => knitui.inputColor};
  }
  &:focus,
  &:active {
    outline: ${({ theme: { knitui } }) => knitui.inputFocusOutline};
    background-color: ${({ theme: { knitui } }) => knitui.inputBgFocus};
    border: ${props => getInputBorder(props, "focus")};
    box-shadow: ${({ theme: { knitui } }) => knitui.inputFocusBoxShadow};
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
  display: flex;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`

const labelStyle = css`
  font-size: 1.2rem;
  line-height: 1.8rem;
`

const StyledLabel = styled.label<IStyledInput>`
  ${labelStyle}
  color: ${props => getLabelColor(props)};
`

const NotificationContainer = styled.div`
  ${labelStyle}
`

const RenderInput = React.forwardRef<HTMLElement, IInputProps>((props, ref) => {
  const {
    placeholder,
    value,
    onChange,
    error,
    success,
    label,
    inputSize = "default",
    notification,
    className,
    style,
    addonAfter,
    addonBefore,
    ...rest
  } = props
  const customProps = {
    inputSize,
    error,
    success,
  }
  let labelDOM: null | ReactNode = null
  let notificationDOM: null | ReactNode = null

  if (label) {
    labelDOM = label
    if (_.isString(label)) {
      labelDOM = <StyledLabel customProps={customProps}>{label}</StyledLabel>
    }
  }

  if (notification) {
    notificationDOM = notification
    if (_.isString(label)) {
      notificationDOM = (
        <NotificationContainer>{notification}</NotificationContainer>
      )
    }
  }

  return (
    <>
      {labelDOM}
      <StyledInput
        customProps={customProps}
        placeholder={placeholder}
        className={className}
        style={style}
        onChange={onChange}
        ref={ref}
        {...insertIf({ value }, !!value)}
        {...rest}
      />
      {notificationDOM}
    </>
  )
})

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

const Input = React.forwardRef<HTMLElement, IInputProps>((props, ref) => {
  const InputElem = <RenderInput {...props} ref={ref} />
  return renderInputAddons(InputElem as React.ReactElement<any>, props)
})

export default Input
