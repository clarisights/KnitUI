import React from "react"
import Label from "../"
import { render, cleanup, fireEvent } from "react-testing-library"
import "jest-styled-components"
import "jest-dom/extend-expect"

afterEach(cleanup)

describe("Button", () => {
  const sizes = ["small", "medium", "large"]

  // All tests are executes for each of the three sizes
  sizes.forEach(size => {
    describe(`with size ${size}`, () => {
      it("compact", () => {
        const { asFragment } = render(<Label text="label" size={size} />)
        expect(asFragment()).toMatchSnapshot()
      })

      it("expanded", () => {
        const { asFragment } = render(
          <Label text="label" size={size} expanded />
        )
        expect(asFragment()).toMatchSnapshot()
      })

      it("left icon", () => {
        const { asFragment } = render(
          <Label text="label" size={size} icons={{ left: "oDragIndicator" }} />
        )
        expect(asFragment()).toMatchSnapshot()
      })

      it("right icon", () => {
        const { asFragment } = render(
          <Label text="label" size={size} icons={{ right: "oClose" }} />
        )
        expect(asFragment()).toMatchSnapshot()
      })

      it("left and right icons", () => {
        const { asFragment } = render(
          <Label
            text="label"
            size={size}
            icons={{ left: "oDragIndicator", right: "oClose" }}
          />
        )
        expect(asFragment()).toMatchSnapshot()
      })
    })
  })

  it("outlined", () => {
    const { asFragment } = render(<Label text="label" outlined />)
    expect(asFragment()).toMatchSnapshot()
  })

  it("rounded", () => {
    const { asFragment } = render(<Label text="label" rounded />)
    expect(asFragment()).toMatchSnapshot()
  })

  it("focused", () => {
    const { asFragment } = render(<Label text="label" focus />)
    expect(asFragment()).toMatchSnapshot()
  })

  it("custom class", () => {
    const { asFragment } = render(
      <Label text="label" className="custom-class" />
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it("custom style", () => {
    const { asFragment } = render(
      <Label text="label" style={{ backgroundColor: "red" }} />
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it("inline compact", () => {
    const { asFragment } = render(<Label.Inline text="label" />)
    expect(asFragment()).toMatchSnapshot()
  })

  it("inline expanded", () => {
    const { asFragment } = render(<Label.Inline text="label" expanded />)
    expect(asFragment()).toMatchSnapshot()
  })

  it("custom class", () => {
    const { asFragment } = render(
      <Label.Inline text="label" className="custom-class" />
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it("custom style", () => {
    const { asFragment } = render(
      <Label.Inline text="label" style={{ backgroundColor: "red" }} />
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
