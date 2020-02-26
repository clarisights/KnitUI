import { ReactNode } from "react"

import { BaseComponentProps, IStyled } from "../../common/types"

export interface IInputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    BaseComponentProps {
  /** Type of input field to be displayed */
  type?: "default" | "search" | "number" | "password" | "textarea"
  /** This is a placeholder description */
  placeholder?: string
  /** This is a value of the input */
  value?: string | number
  /** To enable state of input (success, warning or error) */
  state?: "success" | "warning" | "error"
  /** Content to be shown above the input as a label */
  label?: string | ReactNode
  /** Content to be shown below the input as a notification  */
  notification?: string | ReactNode
  /** onChange handler */
  onChange?: (e: React.FormEvent<HTMLInputElement>) => any
  /** To show after input */
  addonAfter?: string | ReactNode
  /** To show before input */
  addonBefore?: string | ReactNode
  /** The size of the input */
  inputSize?: "large" | "default" | "small"
  /** To disable the input */
  disabled?: boolean
  /** To limit the resize for textarea */
  textareaResize?: "both" | "horizontal" | "vertical" | "none"
}

export type IStyledInput = IStyled<IInputProps>
