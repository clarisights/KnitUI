import React from "react"
import Button from "../"
import { cleanup, fireEvent, render } from "../../../common/TestUtil"

afterEach(cleanup)

describe("Button", () => {
  const sizes = ["small", "medium", "large", "fluid"]

  // All tests are executes for each of the three sizes
  sizes.forEach((size: "small" | "medium" | "large") => {
    describe(`with size ${size}`, () => {
      it("renders a primary variant with a label correctly", () => {
        const { asFragment } = render(<Button label="button" size={size} />)
        expect(asFragment()).toMatchSnapshot()
      })

      it("renders a primary variant with a label correctly", () => {
        const { asFragment } = render(<Button label="button" size={size} />)
        expect(asFragment()).toMatchSnapshot()
      })

      it("renders a ghost variant correctly", () => {
        const { asFragment } = render(
          <Button label="button" size={size} ghost />
        )
        expect(asFragment()).toMatchSnapshot()
      })

      it("renders a bare variant correctly", () => {
        const { asFragment } = render(
          <Button label="button" size={size} bare />
        )
        expect(asFragment()).toMatchSnapshot()
      })

      it("renders with an icon correctly", () => {
        const { asFragment } = render(
          <Button label="button" size={size} icon="oInfo" />
        )
        expect(asFragment()).toMatchSnapshot()
      })

      it("renders with a bare icon correctly", () => {
        const { asFragment } = render(
          <Button label="button" size={size} icon="oInfo" bare />
        )
        expect(asFragment()).toMatchSnapshot()
      })
    })

    it("renders with inset correctly", () => {
      const { asFragment } = render(
        <Button label="button" size={size} insetLabel={"10"} />
      )
      expect(asFragment()).toMatchSnapshot()
    })

    it("renders with text and an icon correctly", () => {
      const { asFragment } = render(
        <Button label="button" size={size} icon="oInfo" />
      )
      expect(asFragment()).toMatchSnapshot()
    })

    it("renders with text, icon and inset correctly", () => {
      const { asFragment } = render(
        <Button label="button" size={size} icon="oInfo" insetLabel={"10"} />
      )
      expect(asFragment()).toMatchSnapshot()
    })

    it("renders with a specified color preset correctly", () => {
      const { asFragment } = render(
        <Button label="button" colorPreset="danger" />
      )
      expect(asFragment()).toMatchSnapshot()
    })

    it("renders with a custom color theme correctly", () => {
      const { asFragment } = render(
        <Button
          label="button"
          customColor="#f142f4"
          insetCustomColor="#000000"
        />
      )
      expect(asFragment()).toMatchSnapshot()
    })

    it("renders with a custom color object correctly", () => {
      const { asFragment } = render(
        <Button
          label="button"
          customColor={{ color: "#f142f4", secondaryColor: "#873421" }}
          insetCustomColor="#000000"
        />
      )
      expect(asFragment()).toMatchSnapshot()
    })
  })

  it("Should disable button rendered correctly", () => {
    const { asFragment } = render(<Button label="button" disabled />)
    expect(asFragment()).toMatchSnapshot()
  })

  it("should apply provided classname", () => {
    const { container } = render(
      <Button label="button" className="custom-class" />
    )
    expect(container.firstChild).toHaveClass("custom-class")
  })

  it("should apply provided styled", () => {
    const { container } = render(
      <Button label="button" style={{ backgroundColor: "red" }} />
    )
    expect(container.firstChild).toHaveStyle("background-color: red")
  })

  it("should work with css style string", () => {
    const { container } = render(
      <Button label="button" css="background-color: red" />
    )
    expect(container.firstChild).toHaveStyle("background-color: red")
  })

  it("should call the provided onClick function", () => {
    const onClick = jest.fn()
    const { getByText } = render(<Button label="button" onClick={onClick} />)
    fireEvent.click(getByText("button"))
    expect(onClick).toBeCalled()
    expect(onClick.mock.calls[0].length).toBe(1)
  })

  it("should navigate to the given href location when provided", () => {
    window.location.assign = jest.fn()
    const { getByText } = render(<Button label="button" href="/sample" />)
    fireEvent.click(getByText("button"))
    expect(window.location.assign).toBeCalledWith("/sample")
  })
})

describe("Button Group : ", () => {
  it("Button group : snapshot", () => {
    const { asFragment } = render(
      <Button.Group>
        <Button icon="oInfo" />
        <Button label="Dropdown" />
        <Button icon="oExpandMore" />
      </Button.Group>
    )
    expect(asFragment()).toMatchSnapshot()
  })
  it("Button group with all ghost buttons : snapshot", () => {
    const { asFragment } = render(
      <Button.Group>
        <Button icon="oInfo" ghost />
        <Button label="Dropdown" ghost />
        <Button icon="oExpandMore" ghost />
      </Button.Group>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
