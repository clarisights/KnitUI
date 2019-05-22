import chroma from 'chroma-js'

// Helpers
const multiply = (a: number, b: number) => a * b

const baseUnit = 10
export const base = `${baseUnit}px`
export const baseIncrementUnit = 0.2

// Unit measurements (measurements relative to base unit i.e 10px)
export const unit12 = 1.2
export const unit14 = 1.4
export const unit16 = 1.6
export const unit18 = 1.8

export const typography = {
  size10: {
    fontSize: 1.0,
    lineHeight: 1.6
  },
  size12: {
    fontSize: 1.2,
    lineHeight: 1.8
  },
  size14: {
    fontSize: 1.4,
    lineHeight: 2.0
  },
  size16: {
    fontSize: 1.6,
    lineHeight: 2.0
  },
  size18: {
    fontSize: 1.8,
    lineHeight: 2.4
  },
  size20: {
    fontSize: 2.0,
    lineHeight: 2.8
  }
}

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

export const secondaryPalette = {
  neutral: {
    background: chroma.hsl(216, 1, 0.2),
    font: chroma.hsl(0, 0, 1),
  },
  danger: {
    background: chroma.hsl(0, 1, 0.3),
    font: chroma.hsl(0, 0, 1),
  },
  success: {
    background: chroma.hsl(118, 1, 0.2),
    font: chroma.hsl(0, 0, 1),
  },
  warning: {
    background: chroma.hsl(47, 1, 0.5),
    font: chroma.hsl(0, 0, 0),
  },
  unsaved: {
    background: chroma.hsl(288, 0.2, 0.35),
    font: chroma.hsl(0, 0, 1),
  }
}

export const shades = {
  // Shades of gray
  white: chroma.hsl(0, 0, 1),
  gray95: chroma.hsl(0, 0, 0.95),
  gray20: chroma.hsl(0, 0, 0.2),
  black: chroma.hsl(0, 0, 0),
  transparent: chroma.hsl(0, 0, 0, 0),

  // Shades of blue
  lightBlue: chroma.hsl(205, 0.85, 0.65),
}

// Properties
export const lineHeight = "2rem"
export const borderRadius = `${multiply(0.4, baseUnit)}px`
export const defaultPadding = `${multiply(0.4, baseUnit)}px ${baseUnit}px`

// input
export const inputFocusOutline = "none"
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

// switch
export const switchWrapperHeight = "1.6rem"
export const switchWrapperHeightSm = "1.1rem"
export const switchWrapperWidth = "2.8rem"
export const switchWrapperWidthSm = "2.1rem"
export const wrapperBorderColor = "hsl(0, 0%, 90%)"
export const wrapperBgColor = "hsl(0, 0%, 90%)"
export const switchTrackerHeight = "1rem"
export const switchTrackerHeightSm = "0.7rem"
export const switchTrackerWidth = "1rem"
export const switchTrackerWidthSm = "0.7rem"
export const switchCheckedBorderColor = "hsl(118, 100%, 21%)"
export const switchCheckedBgColor = "hsl(118, 100%, 21%)"
export const switchCheckedDisabledBorderColor = "hsl(0, 0%, 90%)"
export const switchCheckedDisabledBgColor = "hsl(0, 0%, 90%)"

// Breadcrumb
export const breadcrumbHover = "#F2F2F2"
export const breadcrumbColor = "#4C4C4C"
export const breadcrumbLinkColor = "#0F74BD"
