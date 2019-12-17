import { render } from "@testing-library/react"
import React from "react"
import { Button } from "../../.."
import * as palette from "../palette"
import ThemeProvider from "../ThemeProvider"
import generateTheme from "../variables"

describe("Passing Custom Theme", () => {
  // Changing one of the palette color
  const newPalette = {
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
