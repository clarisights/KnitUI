import {
  ColorPreset,
  CustomColor,
  BaseComponentProps,
} from "../../common/types"
import { SyntheticEvent, ReactNode } from "react"

export interface ParsedColorTheme {
  background: any
  font: any
  insetBackground?: any
  insetFont?: any
}

type TInsetPosition = "left" | "right"

export interface ButtonBaseProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** The text label to be shown on the button */
  label?: string
  /**
   * One of a set of predefined values that are representative of
   * the type of action
   */
  ghost?: boolean
  /** Physical area occupied on the screen */
  size?: "small" | "medium" | "large" | "fluid"
  /** Only text/icon stripping the background */
  bare?: boolean
  /** An icon type to be rendered in the button */
  icon?: string
  /** An event handler to be called on click of the button */
  onClick?: (event: SyntheticEvent) => void
}

export interface ButtonWrapperProps extends ButtonBaseProps {
  colorPreset?: ColorPreset
  /** Override preset colors, should be valid CSS string */
  customColor?: CustomColor
  /** Override defaults, should be valid CSS string */
  insetCustomColor?: CustomColor
  /** An inset value, typically used for showing notifications */
  insetLabel?: string
  /** A location to navigate to on click of the button */
  href?: string
  /** Specify the inset label position */
  insetPosition?: TInsetPosition
  /** CustomProps, just to avoid, when passed from it's parent, yet no use case here */
  customProps?: any
}

export interface ButtonProps extends ButtonBaseProps {
  colorTheme: ParsedColorTheme
  fontSize: number
  lineHeight: number
  customProps?: any
}

export interface ButtonGroupProps extends BaseComponentProps {
  children: ReactNode
  [htmlProp: string]: any
}

export interface ButtonWrapperInterface<T> extends React.FC<T> {
  Group: React.FunctionComponent<ButtonGroupProps>
}
