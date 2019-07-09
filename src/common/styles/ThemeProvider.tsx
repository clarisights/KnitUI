import React from "react"
import { ThemeProvider as Theme } from "styled-components"
import * as theme from "./variables"

const ThemeProvider = ({ children }) => {
  return <Theme theme={{knitui: theme}}>{children}</Theme>
}

export default ThemeProvider
