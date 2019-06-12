export type ColorPreset =
  | "neutral"
  | "danger"
  | "success"
  | "warning"
  | "unsaved"

export interface IColorTheme {
  background: string
  font: string
}

export type InputColorTheme = ColorPreset | IColorTheme

export interface ParsedColorTheme {
  background: any
  font: any
}
