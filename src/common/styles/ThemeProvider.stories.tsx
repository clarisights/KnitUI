import React from "react"
import { storiesOf } from "@storybook/react"
import ThemeProvider from "./ThemeProvider"
import * as palette from "./palette"
import { Button } from "../../"
import generateTheme from "./variables"

const stories = storiesOf("ThemeProvider", module)

stories.add("Blue100 overright to #1182D4", () => {
  let newPalette = {
    ...palette,
    Blue100: {
      hsl: [205, 85, 45],
      hex: "#1182D4",
    },
  }
  let theme = generateTheme(newPalette)
  return (
    <ThemeProvider theme={theme}>
      <Button type="secondary" size="small" label="Changed Color of Neutral" />
    </ThemeProvider>
  )
})
