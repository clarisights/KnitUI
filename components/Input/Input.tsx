import React, { SFC } from "react"
import styled from "styled-components"
import { insertIf } from "../_utils"

const getInputBorder = (props: {
  theme: {
    inputError: string
    inputSuccess: string
    inputBorderColor: string
  }
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
  labelText?: string
  /** onChange handler */
  onChange: (e: React.FormEvent<HTMLInputElement>) => any
}

const Input: SFC<IInputProps> = props => {
  const { placeholder, value, onChange, error, success, labelText } = props
  return (
    <>
      <StyledInput
        placeholder={placeholder}
        error={error}
        success={success}
        onChange={onChange}
        {...insertIf({ value }, !!value)}
      />
      {labelText ? (
        <label
          css={`
            color: #05b300;
          `}>
          {labelText}
        </label>
      ) : null}
    </>
  )
}

export default Input
