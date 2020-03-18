import { ThemedStyledFunction } from "styled-components"
import chroma from "chroma-js"
import { ColorPreset, CustomColor } from "../types"

export const insertIf = (
  obj: any = {},
  condition: boolean,
  isArray: boolean = false
) => {
  if (condition) {
    return obj
  }
  if (isArray) {
    return []
  }
  return {}
}

// https://github.com/styled-components/styled-components/issues/630
export function withProps<U>() {
  return <
    P extends keyof JSX.IntrinsicElements | React.ComponentType<any>,
    T extends object,
    O extends object = {}
  >(
    fn: ThemedStyledFunction<P, T, O>
  ): ThemedStyledFunction<P & U, T, O & U> =>
    (fn as unknown) as ThemedStyledFunction<P & U, T, O & U>
}

// Color utils

/**
 * Used for parsing hsl color values defined in [h, s, l] format
 * into a chroma object
 */
export const hslToChroma = (hsl: Array<number>) => {
  const [h, s, l] = hsl
  return chroma.hsl(h, s / 100, l / 100)
}

/**
 * Checks if the color is light or darks based on its L value in
 * the HSL color scale.
 * @param color A chroma color instance
 */
export const isLightColor = color => color.get("hsl.l") >= 0.5

/**
 * Returns font color of updated lightness on hover
 * @param color A chroma color instance
 */
export const getHoverFontColor = color => {
  return isLightColor(color)
    ? color.set("hsl.l", "-0.3")
    : color.set("hsl.l", "+0.3")
}

/**
 * Returns background color of updated lightness on hover
 * @param color A chroma color instance
 */
export const getHoverBackgroundColor = color => {
  return isLightColor(color)
    ? color.set("hsl.l", "-0.1")
    : color.set("hsl.l", "+0.1")
}


/**
 * Determines the appropriate font color based on the background color.
 */
export const getFontColor = (theme, backGroundColor) => {
  return isLightColor(backGroundColor)
    ? theme.chromaPalette.Neutral90
    : theme.chromaPalette.Neutral0
}

const createParsedColorTheme = (theme, backgroundColor) => ({
  background: backgroundColor,
  font: getFontColor(theme, backgroundColor),
})

/**
 * Creates an object with background and font properties initialized
 * with appropriate chroma colors.
 * @param backGroundColor A plain CSS color string
 */
export const parseCustomColor = (theme, customColor: CustomColor) => {
  if (
    !(
      chroma.valid(customColor) ||
      (typeof customColor === "object" &&
        chroma.valid(customColor.color) &&
        chroma.valid(customColor.secondaryColor))
    )
  ) {
    throw new Error("Provided color theme contains invalid color values")
  }
  if (typeof customColor === "object") {
    return {
      font: chroma(customColor.secondaryColor),
      background: chroma(customColor.color),
    }
  }
  customColor = chroma(customColor)
  return createParsedColorTheme(theme, customColor)
}

/**
 * Creates an object with background and font properties initialized
 * with appropriate chroma colors.
 * @param backGroundColor One of the predefined preset values
 */
export const parseColorPreset = (theme, backgroundColor: ColorPreset) => {
  backgroundColor = theme.secondaryPalette[backgroundColor]
  return createParsedColorTheme(theme, backgroundColor)
}

/**
 * Get color from Styled Component Props
 */
export const getThemeColor = (props: any, color: string) => {
  const {
    theme: {
      knitui: { chromaPalette },
    },
  } = props

  return chromaPalette[color].hex()
}

/**
 * Get different lightness of passed color, range of lightness is between 0 to 100
 */
export const getColorOfLightness = (
  props: any,
  color: string,
  lightness: number
) => {
  const {
    theme: {
      knitui: { chromaPalette },
    },
  } = props

  let computedColor

  if (chromaPalette.hasOwnProperty(color))
    computedColor = chromaPalette[color].set("hsl.l", lightness / 100).hex()
  else if (chroma.valid(color))
    computedColor = chroma(color)
      .set("hsl.l", lightness / 100)
      .hex()
  else computedColor = color
  return computedColor
}

/**
 * Get font-size from Styled Component Props
 */
export const getThemeFontSize = (props, size: number) => {
  const {
    theme: { knitui },
  } = props

  return knitui.typography[size].fontSize
}

/**
 * Get line-height from Styled Component Props
 */
export const getThemeLineHeight = (props, size: number) => {
  const {
    theme: { knitui },
  } = props

  return knitui.typography[size].lineHeight
}

/**
 * Get OS of current platform
 */
export const getOSName = () => {
  const platform = window.navigator.platform
  const userAgent = window.navigator.userAgent

  const macOSList = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"]
  const windowOSList = ["Windows", "Win16", "Win32", "WinCE"]
  const iOSList = ["iPhone", "iPad", "iPod"]

  let os: string | undefined

  if (macOSList.includes(platform)) {
    os = "MacOS"
  } else if (windowOSList.includes(platform)) {
    os = "Windows"
  } else if (iOSList.includes(platform)) {
    os = "iOS"
  } else if (/Android/.test(userAgent)) {
    os = "Android"
  } else if (/Linux/.test(userAgent)) {
    os = "Linux"
  }

  return os
}
