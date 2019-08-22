import chroma from "chroma-js"
import * as palette from "./palette"

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

// Font size and line height associations
export const typography = {
  10: {
    fontSize: 1.0,
    lineHeight: 1.6,
  },
  12: {
    fontSize: 1.2,
    lineHeight: 1.8,
  },
  14: {
    fontSize: 1.4,
    lineHeight: 2.0,
  },
  16: {
    fontSize: 1.6,
    lineHeight: 2.0,
  },
  18: {
    fontSize: 1.8,
    lineHeight: 2.4,
  },
  20: {
    fontSize: 2.0,
    lineHeight: 2.8,
  },
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

/**
 * Used for parsing hsl color values defined in [h, s, l] format
 * into a chroma object
 */
const hslToChroma = (hsl: Array<number>) => {
  const [h, s, l] = hsl
  return chroma.hsl(h, s / 100, l / 100)
}

/**
 * Create a new palette by parsing the corresponding color values
 * into chroma objects.
 */
export const chromaPalette = Object.entries(palette)
  .map(([colorName, values]) => ({
    [colorName]: hslToChroma(values.hsl),
  }))
  .reduce((acc, cur) => ({ ...acc, ...cur }), {})

export const primaryHues = {
  default: "#293979",
}

// TODO: This mapping should be defined by UX
export const secondaryPalette = {
  neutral: chromaPalette.Blue100,
  danger: chromaPalette.Crimson80,
  success: chromaPalette.Green80,
  warning: chromaPalette.Yellow80,
  unsaved: chromaPalette.Magenta80,
}

// TODO: Remove this and its references and use chromaPallete directly
export const shades = {
  // Shades of gray
  white: chromaPalette.Neutral0,
  gray95: chromaPalette.Neutral10,
  gray90: chromaPalette.Neutral20,
  gray85: chromaPalette.Neutral30,
  gray50: chromaPalette.Neutral50,
  gray20: chromaPalette.Neutral80,
  black: chromaPalette.Neutral90,
  transparent: chroma.hsl(0, 0, 0, 0),

  // Shades of blue
  lightBlue: chromaPalette.Azure80,
  blue40: chroma.hsl(205, 0.85, 0.4),
  blue50: chroma.hsl(216, 1, 0.5),
}

// Properties
export const lineHeight = "2rem"
export const borderRadius = `${multiply(0.4, baseUnit)}px`
export const defaultPadding = `${multiply(0.4, baseUnit)}px ${baseUnit}px`
export const defaultTextPadding = "1.4rem"

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
export const switchFocusColor = "hsl(216, 100%, 20%)"

// radio
export const smallRadioSize = "1.2rem"
export const mediumRadioSize = "1.4rem"
export const smallRadioBead = "0.6rem"
export const mediumRadioBead = "0.8rem"
export const radioDisabledColor = shades.gray95

// Modal
export const modalBorder = `1px solid ${shades.gray85}`
export const modalBorderRadius = "0.4rem"
export const modalPadding = {
  vertical: "2.8rem",
  horizontal: "2.1rem",
}
export const modalTitleTypographySize = 20
