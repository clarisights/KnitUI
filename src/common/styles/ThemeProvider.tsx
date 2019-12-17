import React, { ReactElement } from "react"
import { ThemeProvider as Theme } from "styled-components"
import { generateTheme, palette as defaultPalette } from "./"

interface ThemeProviderProps {
  children: ReactElement
  theme?: object
}

const ThemeProvider = ({
  children,
  theme = generateTheme(defaultPalette),
}: ThemeProviderProps): ReactElement => <Theme theme={theme}>{children}</Theme>

export default ThemeProvider
