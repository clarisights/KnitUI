import React from "react"
import { ThemeProvider as Theme } from "styled-components"
import { palette as defaultPalette, generateTheme } from "./"

const ThemeProvider = ({ children, theme = generateTheme(defaultPalette) }) => (
  <Theme theme={theme}>{children}</Theme>
)

export default ThemeProvider
