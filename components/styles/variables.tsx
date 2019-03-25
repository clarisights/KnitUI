// Helpers
const multiply = (a: number, b: number) => a * b

const baseUnit = 10
export const base = `${baseUnit}px`

// Type
export const fontFamily =
  "InterRegular, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol"
export const fontSize12 = "1.2rem"
export const fontSize14 = "1.4rem" // for Paragraphs
export const fontSize16 = "1.6rem" // for Leads
export const fontSize18 = "1.8rem" // for Headings
export const fontSize20 = "2rem"

// Colors
export const primaryHues = {
  default: "#293979",
}

// Properties
export const lineHeight = "2rem"
export const borderRadius = `${multiply(0.4, baseUnit)}px`
export const defaultPadding = `${multiply(0.4, baseUnit)}px ${baseUnit}px`

// input
export const inputHeightBase = "2.8rem"
export const inputPaddingHorizontal = "1rem"
export const inputPaddingVertical = "0.4rem"
export const inputBgDefault = "hsl(0, 0%, 95%)"
export const inputColor = "hsl(0, 0%, 0%)"
export const inputPlaceholderColor = "hsl(0, 0%, 60%)"
export const inputPlaceholderColorActive = "hsl(0, 0%, 80%)"
export const inputBgHover = "hsl(255, 100%, 100%)"
export const inputBgActive = "hsl(0, 0%, 90%)"
export const inputBorderRadius = "4px"
export const inputBorderColor = "#d9d9d9"
export const inputBorderWidth = "1px"
export const inputError = "#990000"
export const inputSuccess = "#05b300"
