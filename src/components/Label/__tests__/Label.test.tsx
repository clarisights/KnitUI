import React from "react"
import Label from "../"
import { Icon } from "../../"
import { cleanup, render } from "../../../common/TestUtil"

afterEach(cleanup)

describe("Label", () => {
  const sizes = ["small", "medium", "large"]

  // All tests are executes for each of the three sizes
  sizes.forEach((size: "small" | "medium" | "large") => {
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

  it("right custom addon", () => {
    const { asFragment } = render(
      <Label
        text="label"
        icons={{
          right: (
            <Icon type="oClose" style={{ cursor: "pointer" }} fill="#FFFFFF" />
          ),
        }}
      />
    )
    expect(asFragment()).toMatchSnapshot()
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

  it("custom font color", () => {
    const { asFragment } = render(
      <Label text="label" customFontColor="#F7B3B3" />
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it("inset", () => {
    const { asFragment } = render(<Label text="label" insetColor="#4267B2" />)
    expect(asFragment()).toMatchSnapshot()
  })

  it("inset with custom color", () => {
    const { asFragment } = render(
      <Label text="label" insetColor="#4267B2" customColor="#A7A7A7" />
    )
    expect(asFragment()).toMatchSnapshot()
  })

  describe("inline", () => {
    it("compact", () => {
      const { asFragment } = render(<Label.Inline text="label" />)
      expect(asFragment()).toMatchSnapshot()
    })

    it("expanded", () => {
      const { asFragment } = render(<Label.Inline text="label" expanded />)
      expect(asFragment()).toMatchSnapshot()
    })

    it("custom class", () => {
      const { container } = render(
        <Label.Inline text="label" className="custom-class" />
      )
      const label = container.firstChild
      expect(label).toHaveClass("custom-class")
    })

    it("custom style", () => {
      const { container } = render(
        <Label.Inline text="label" style={{ backgroundColor: "red" }} />
      )
      const label = container.firstChild
      expect(label).toHaveStyle("background-color: red")
    })
  })
})
