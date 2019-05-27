import React from "react"
import { Button } from "../index"
import { render, cleanup, fireEvent } from "react-testing-library"
import "jest-styled-components"
import "jest-dom/extend-expect"

afterEach(cleanup)

describe("Button", () => {
  const sizes = ["small", "medium", "large"]

  // All tests are executes for each of the three sizes
  sizes.forEach(size => {
    describe(`with size ${size}`, () => {
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
        <Button label="button" colorTheme="danger" />
      )
      expect(asFragment()).toMatchSnapshot()
    })

    it("renders with a custom color theme correctly", () => {
      const { asFragment } = render(
        <Button
          label="button"
          colorTheme={{
            background: "#f142f4",
            font: "#f4f141",
            insetBackground: "#000000",
            insetFont: "#FFFFFF",
          }}
        />
      )
      expect(asFragment()).toMatchSnapshot()
    })
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
