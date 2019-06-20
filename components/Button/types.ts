import { ColorPreset, CustomColor, BaseComponentProps } from "../_utils/types"
import { SyntheticEvent } from "react"

export interface ParsedColorTheme {
  background: any
  font: any
  insetBackground?: any
  insetFont?: any
}

export interface ButtonBaseProps extends BaseComponentProps {
  /** The text label to be shown on the button */
  label?: string
  /** Indicates the importance of the button's actions */
  type?: "primary" | "secondary"
  /**
   * One of a set of predefined values that are representative of
   * the type of action
   */
  ghost?: boolean
  /** Physical area occupied on the screen */
  size?: "small" | "medium" | "large"
  /** Whether the button should be disabled */
  disabled?: boolean
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
}

export interface BaseButtonProps extends ButtonBaseProps {
  colorTheme: ParsedColorTheme
  fontSize: number
  lineHeight: number
}
