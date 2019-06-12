import React, { ComponentType } from "react"
import { ThemeProvider } from "../styles"

/**
 * This can be used to decorate properties that are universally applicable
 */
export default (Component: ComponentType) => <P extends any>(props: P) => (
  <ThemeProvider>
    <Component {...props} />
  </ThemeProvider>
)
