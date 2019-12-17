import React from "react"
import Shimmer from "../Shimmer"
import { render, cleanup } from "../../../common/TestUtil"
import { ThemeProvider } from "../../../common/styles"
import "jest-styled-components"
import "jest-dom/extend-expect"

afterEach(cleanup)

describe("Shimmer", () => {
  it("should render correctly", () => {
    const { asFragment } = render(
      <ThemeProvider>
        <Shimmer />
      </ThemeProvider>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
