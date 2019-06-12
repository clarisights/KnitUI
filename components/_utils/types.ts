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
