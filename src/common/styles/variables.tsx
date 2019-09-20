import chroma from "chroma-js"

// Helpers
const multiply = (a: number, b: number) => a * b

// Colors

/**
 * Used for parsing hsl color values defined in [h, s, l] format
 * into a chroma object
 */
const hslToChroma = (hsl: Array<number>) => {
  const [h, s, l] = hsl
  return chroma.hsl(h, s / 100, l / 100)
}
const baseUnit = 10

/**
 * The generateTheme function is exposed to user so that palette can have
 * additional color, also palette is exposed to user so he can get
 * existing colors
 */
const generateTheme = palette => {
  /**
   * Create a new palette by parsing the corresponding color values
   * into chroma objects.
   */
  let chromaPalette = Object.entries(palette)
    .map(([colorName, values]: [string, any]) => ({
      [colorName]: hslToChroma(values.hsl),
    }))
    .reduce((acc, cur) => ({ ...acc, ...cur }), {})

  /** Default Theme --> */
  /**
   * The defualt theme object is created every time so that theme is not
   * get overlaped, as Modules do immutable export
   */
  let defaultTheme: any = {
    baseUnit: 10,
    base: `${baseUnit}px`,
    baseIncrementUnit: 0.2,

    // Unit measurements (measurements relative to base unit i.e 10px)
    unit12: 1.2,
    unit14: 1.4,
    unit16: 1.6,
    unit18: 1.8,

    // Font size and line height associations
    typography: {
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
    },

    // Type
    fontFamily:
      "InterRegular, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol",
    fontSize12: "1.2rem",
    fontSize14: "1.4rem", // for Paragraphs
    fontSize16: "1.6rem", // for Leads
    fontSize18: "1.8rem", // for Headings
    fontSize20: "2rem",

    primaryHues: {
      default: "#293979",
    },

    // TODO: This mapping should be defined by UX
    secondaryPalette: {
      neutral: chromaPalette.Blue100,
      danger: chromaPalette.Crimson80,
      success: chromaPalette.Green80,
      warning: chromaPalette.Yellow80,
      unsaved: chromaPalette.Magenta80,
    },

    // TODO: Remove this and its references and use chromaPallete directly
    shades: {
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
    },

    // Properties
    lineHeight: "2rem",
    borderRadius: `${multiply(0.4, baseUnit)}px`,
    defaultPadding: `${multiply(0.4, baseUnit)}px ${baseUnit}px`,
    defaultTextPadding: "1.4rem",

    // input
    inputFocusOutline: "none",
    inputBgDefault: "hsl(0, 0%, 95%)",
    inputColor: "hsl(0, 0%, 5%)",
    inputPlaceholderColor: "hsl(0, 0%, 60%)",
    inputPlaceholderColorActive: "hsl(0, 0%, 80%)",
    inputBgHover: "hsl(0, 0%, 90%)",
    inputBgActive: "hsl(0, 0%, 100%)",
    inputBgFocus: "hsl(0,0%,100%)",
    inputBgDisabled: "hsl(0, 0%, 50%)",
    inputBorderRadius: "4px",
    inputBorderColor: "transparent",
    inputFocusBorderColor: chromaPalette.Azure80,
    inputError: "#990000",
    inputSuccess: "#05b300",
    inputFocusBoxShadow: "0 0 2px hsl(216, 100%, 50%)",

    // switch
    switchWrapperHeight: "1.6rem",
    switchWrapperHeightSm: "1.1rem",
    switchWrapperWidth: "2.8rem",
    switchWrapperWidthSm: "2.1rem",
    wrapperBorderColor: "hsl(0, 0%, 90%)",
    wrapperBgColor: "hsl(0, 0%, 90%)",
    switchTrackerHeight: "1rem",
    switchTrackerHeightSm: "0.7rem",
    switchTrackerWidth: "1rem",
    switchTrackerWidthSm: "0.7rem",
    switchCheckedBorderColor: "hsl(118, 100%, 21%)",
    switchCheckedBgColor: "hsl(118, 100%, 21%)",
    switchCheckedDisabledBorderColor: "hsl(0, 0%, 90%)",
    switchCheckedDisabledBgColor: "hsl(0, 0%, 90%)",
    switchFocusColor: "hsl(216, 100%, 20%)",

    // radio
    smallRadioSize: "1.2rem",
    mediumRadioSize: "1.4rem",
    smallRadioBead: "0.6rem",
    mediumRadioBead: "0.8rem",
    radioDisabledColor: chromaPalette.Neutral10,

    // Modal
    modalBorder: `1px solid ${chromaPalette.Neutral30}`,
    modalBorderRadius: "0.4rem",
    modalMaxContentHeightOffset: 14,
    modalPadding: {
      vertical: 2.8,
      horizontal: 2.1,
    },
    modalHeaderPadding: {
      vertical: 1.4,
      horizontal: 2.1,
    },
    modalTitleTypographySize: 20,
    modalMinHeight: 35,
  }

  /**
   * Passing general theme object with knitui property so it can
   * merge with other nested ThemeProvider,
   * https://github.com/styled-components/styled-components/issues/244#issuecomment-262577541
   * it will emphasise ignorance of knitui-theme as property of
   * whole theme object of styled-component
   */
  return {
    knitui: { ...defaultTheme, chromaPalette },
  }
}
export default generateTheme
