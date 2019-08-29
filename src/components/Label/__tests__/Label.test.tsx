import React from "react"
import Label from "../"
import { render, cleanup } from "react-testing-library"
import { ThemeProvider } from "../../../common/styles"
import "jest-styled-components"
import "jest-dom/extend-expect"

afterEach(cleanup)

describe("Label", () => {
  const sizes = ["small", "medium", "large"]

  // All tests are executes for each of the three sizes
  sizes.forEach((size: "small" | "medium" | "large") => {
    describe(`with size ${size}`, () => {
      it("compact", () => {
        const { asFragment } = render(
          <ThemeProvider>
            <Label text="label" size={size} />
          </ThemeProvider>
        )
        expect(asFragment()).toMatchSnapshot()
      })

      it("expanded", () => {
        const { asFragment } = render(
          <ThemeProvider>
            <Label text="label" size={size} expanded />
          </ThemeProvider>
        )
        expect(asFragment()).toMatchSnapshot()
      })

      it("left icon", () => {
        const { asFragment } = render(
          <ThemeProvider>
            <Label
              text="label"
              size={size}
              icons={{ left: "oDragIndicator" }}
            />
          </ThemeProvider>
        )
        expect(asFragment()).toMatchSnapshot()
      })

      it("right icon", () => {
        const { asFragment } = render(
          <ThemeProvider>
            <Label text="label" size={size} icons={{ right: "oClose" }} />
          </ThemeProvider>
        )
        expect(asFragment()).toMatchSnapshot()
      })

      it("left and right icons", () => {
        const { asFragment } = render(
          <ThemeProvider>
            <Label
              text="label"
              size={size}
              icons={{ left: "oDragIndicator", right: "oClose" }}
            />
          </ThemeProvider>
        )
        expect(asFragment()).toMatchSnapshot()
      })
    })
  })

  it("outlined", () => {
    const { asFragment } = render(
      <ThemeProvider>
        <Label text="label" outlined />
      </ThemeProvider>
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it("rounded", () => {
    const { asFragment } = render(
      <ThemeProvider>
        <Label text="label" rounded />
      </ThemeProvider>
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it("focused", () => {
    const { asFragment } = render(
      <ThemeProvider>
        <Label text="label" focus />
      </ThemeProvider>
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it("custom class", () => {
    const { asFragment } = render(
      <ThemeProvider>
        <Label text="label" className="custom-class" />
      </ThemeProvider>
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it("custom style", () => {
    const { asFragment } = render(
      <ThemeProvider>
        <Label text="label" style={{ backgroundColor: "red" }} />
      </ThemeProvider>
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it("custom font color", () => {
    const { asFragment } = render(
      <ThemeProvider>
        <Label text="label" customFontColor="#F7B3B3" />
      </ThemeProvider>
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it("inset", () => {
    const { asFragment } = render(
      <ThemeProvider>
        <Label text="label" insetColor="#4267B2" />
      </ThemeProvider>
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it("inset with custom color", () => {
    const { asFragment } = render(
      <ThemeProvider>
        <Label text="label" insetColor="#4267B2" customColor="#A7A7A7" />
      </ThemeProvider>
    )
    expect(asFragment()).toMatchSnapshot()
  })

  describe("inline", () => {
    it("compact", () => {
      const { asFragment } = render(
        <ThemeProvider>
          <Label.Inline text="label" />
        </ThemeProvider>
      )
      expect(asFragment()).toMatchSnapshot()
    })

    it("expanded", () => {
      const { asFragment } = render(
        <ThemeProvider>
          <Label.Inline text="label" expanded />
        </ThemeProvider>
      )
      expect(asFragment()).toMatchSnapshot()
    })

    it("custom class", () => {
      const { container } = render(
        <ThemeProvider>
          <Label.Inline text="label" className="custom-class" />
        </ThemeProvider>
      )
      const label = container.firstChild
      expect(label).toHaveClass("custom-class")
    })

    it("custom style", () => {
      const { container } = render(
        <ThemeProvider>
          <Label.Inline text="label" style={{ backgroundColor: "red" }} />
        </ThemeProvider>
      )
      const label = container.firstChild
      expect(label).toHaveStyle("background-color: red")
    })
  })
})
