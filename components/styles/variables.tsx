// Helpers
const multiply = (a: number, b: number) => a * b

const baseUnit = 10
export const base = `${baseUnit}px`

// Unit measurements (measurements relative to base unit i.e 10px)
export const unit12 = 1.2
export const unit14 = 1.4
export const unit16 = 1.6
export const unit18 = 1.8

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
export const shades = {
  // Shades of gray
  white: "hsl(0, 0%, 100%)",
  gray95: "hsl(0, 0%, 95%)",
  gray90: "hsl(0, 0%, 90%)",
  gray60: "hsl(0, 0%, 60%)",
  gray40: "hsl(0, 0%, 40%)",
  gray20: "hsl(0, 0%, 20%)",
  black: "hsl(0, 0%, 0%)",
  transparent: "hsla(0, 0%, 0%, 0)",

  // Shades of blue
  lightBlue: "hsl(205, 85%, 65%)",
  blue30: "hsl(216, 100%, 30%)",
  blue20: "hsl(216, 100%, 20%)",
}

// Properties
export const lineHeight = "2rem"
export const borderRadius = `${multiply(0.4, baseUnit)}px`
export const defaultPadding = `${multiply(0.4, baseUnit)}px ${baseUnit}px`

// input
export const inputHeightBase = "2.8rem"
export const inputFocusOutline = "none"
export const inputPaddingHorizontal = "1rem"
export const inputPaddingVertical = "0.4rem"
export const inputBgDefault = "hsl(0, 0%, 95%)"
export const inputColor = "hsl(0, 0%, 5%)"
export const inputPlaceholderColor = "hsl(0, 0%, 60%)"
export const inputPlaceholderColorActive = "hsl(0, 0%, 80%)"
export const inputBgHover = "hsl(0, 0%, 90%)"
export const inputBgActive = "hsl(0, 0%, 100%)"
export const inputBgFocus = "hsl(0,0%,100%)"
export const inputBgDisabled = "hsl(0, 0%, 50%)"
export const inputBorderRadius = "4px"
export const inputBorderColor = "#d9d9d9"
export const inputBorderWidth = "1px"
export const inputError = "#990000"
export const inputSuccess = "#05b300"
export const inputFocusBoxShadow = "0 0 2px hsl(216, 100%, 44%)"
