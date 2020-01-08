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
 * Checks if the color is light or darks based on its L value in
 * the HSL color scale.
 * @param color A chroma color instance
 */
export const isLightColor = color => color.get("hsl.l") >= 0.5

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
 * Get Color from Styled Component Props
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
