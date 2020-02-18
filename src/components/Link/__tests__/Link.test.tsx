import React from "react"
import Link from "../Link"
import { render, cleanup, fireEvent } from "../../../common/TestUtil"
import { ThemeProvider } from "../../../common/styles"

afterEach(cleanup)

describe("Link component", () => {
  it("should render correctly", () => {
    const { asFragment } = render(
      <ThemeProvider>
        <Link href="https://github.com/clarisights/KnitUI">KnitUI</Link>
      </ThemeProvider>
    )
    expect(asFragment()).toMatchSnapshot()
  })
  it("should not work when disabled", () => {
    const { asFragment } = render(
      <ThemeProvider>
        <Link
          className="knit-link"
          disabled
          href="https://github.com/clarisights/KnitUI">
          KnitUI
        </Link>
      </ThemeProvider>
    )

    const element = document.querySelector(".knit-link")

    expect(element).toHaveAttribute("disabled")
    expect(element).toHaveStyle("cursor: not-allowed")
    expect(element).toHaveStyle("opacity: 0.6")

    expect(asFragment()).toMatchSnapshot()
  })
  it("should support new tab", () => {
    const { asFragment } = render(
      <ThemeProvider>
        <Link
          className="knit-link"
          newTab
          href="https://github.com/clarisights/KnitUI">
          KnitUI
        </Link>
      </ThemeProvider>
    )

    const element = document.querySelector(".knit-link")

    expect(element).toHaveAttribute("target", "_blank")
    expect(element).toHaveAttribute("rel", "noopener noreferrer")

    expect(asFragment()).toMatchSnapshot()
  })
  it("should support underline prop", () => {
    const { asFragment } = render(
      <ThemeProvider>
        <Link
          className="knit-link"
          underline={false}
          href="https://github.com/clarisights/KnitUI">
          KnitUI
        </Link>
      </ThemeProvider>
    )

    const element = document.querySelector(".knit-link")

    expect(element).toHaveStyle("text-decoration-line: none")

    expect(asFragment()).toMatchSnapshot()
  })
})
