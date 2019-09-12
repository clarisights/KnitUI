import { ThemedStyledFunction } from "styled-components"
import chroma from "chroma-js"
import { ColorPreset, CustomColor } from "../types"
import * as theme from "../styles/variables"
const { secondaryPalette, chromaPalette } = theme

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
export const getFontColor = backGroundColor => {
  return isLightColor(backGroundColor)
    ? chromaPalette.Neutral90
    : chromaPalette.Neutral0
}

const createParsedColorTheme = backgroundColor => ({
  background: backgroundColor,
  font: getFontColor(backgroundColor),
})

/**
 * Creates an object with background and font properties initialized
 * with appropriate chroma colors.
 * @param backGroundColor A plain CSS color string
 */
export const parseCustomColor = (customColor: CustomColor) => {
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
  return createParsedColorTheme(customColor)
}

/**
 * Creates an object with background and font properties initialized
 * with appropriate chroma colors.
 * @param backGroundColor One of the predefined preset values
 */
export const parseColorPreset = (backgroundColor: ColorPreset) => {
  backgroundColor = secondaryPalette[backgroundColor]
  return createParsedColorTheme(backgroundColor)
}
