import React from "react"
import { ThemeProvider as Theme } from "styled-components"
import * as Props from "./variables"

const theme = {
  fontFamily: Props.fontFamily,
  fontSize: Props.fontSize14,
  labelSize: Props.fontSize16,
  headingSize: Props.fontSize18,
  borderRadius: Props.borderRadius,
  defaultPadding: Props.defaultPadding,
  primaryHues: Props.primaryHues,
}

const ThemeProvider = ({ children }) => {
  return <Theme theme={theme}>{children}</Theme>
}

export default ThemeProvider
