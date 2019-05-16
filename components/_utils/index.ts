import { ThemedStyledFunction } from "styled-components"
import chroma from "chroma-js"

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

/**
 * Parses the values in custom color theme into chroma objects
 * @param colorTheme
 */
export const parseCustomColorTheme = <T>(colorTheme: T) => {
  if (!colorTheme) throw new Error("Invalid color theme provided")
  const parsedColorTheme: T = { ...colorTheme }
  Object.entries(colorTheme).forEach(([key, value]) => {
    if (!chroma.valid(value)) {
      throw new Error("Provided color theme contatins invalid color values")
    }
    parsedColorTheme[key] = value
  })
  return parsedColorTheme
}
