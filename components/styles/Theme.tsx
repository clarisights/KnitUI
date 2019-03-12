import React from "react"
import { ThemeProvider } from "styled-components"
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

const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default Theme
