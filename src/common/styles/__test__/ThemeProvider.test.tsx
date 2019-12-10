import React from "react"
import * as palette from "../palette"
import generateTheme from "../variables"
import { render } from "react-testing-library"
import ThemeProvider from "../ThemeProvider"
import { Button } from "../../.."

describe("Passing Custom Theme", () => {
  // Changing one of the palette color
  let newPalette = {
    ...palette,
    Blue100: {
      hsl: [205, 85, 45],
      hex: "#1182D4",
    },
  }

  const knituiTheme = generateTheme(newPalette)

  it("Changing palette color Blue100 to #1182D4", () => {
    const { asFragment } = render(
      <ThemeProvider theme={knituiTheme}>
        <Button kind="primary" size="small" label="Changed Color of Neutral" />
      </ThemeProvider>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
