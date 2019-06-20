import { CSSObject } from "styled-components"

export type ColorPreset =
  | "neutral"
  | "danger"
  | "success"
  | "warning"
  | "unsaved"

export type CustomColor = string

export interface ParsedColorTheme {
  background: any
  font: any
}

export type fontSizeType = 10 | 12 | 14 | 16 | 18 | 20

export interface BaseComponentProps {
  /** CSS classname to be added */
  className?: string
  /** CSS styles to be adeed */
  style?: CSSObject
}
