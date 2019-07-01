import React from "react"
import Button from "../index"
import { render, cleanup, fireEvent } from "react-testing-library"
import { ThemeProvider } from "../../styles"
import "jest-styled-components"
import "jest-dom/extend-expect"

afterEach(cleanup)

describe("Button", () => {
  const sizes = ["small", "medium", "large"]

  // All tests are executes for each of the three sizes
  sizes.forEach(size => {
    describe(`with size ${size}`, () => {
      it("renders a primary variant with a label correctly", () => {
        const { asFragment } = render(
          <ThemeProvider>
            <Button label="button" size={size} />
          </ThemeProvider>
        )
        expect(asFragment()).toMatchSnapshot()
      })

      it("renders a ghost variant correctly", () => {
        const { asFragment } = render(
          <ThemeProvider>
            <Button label="button" size={size} ghost />
          </ThemeProvider>
        )
        expect(asFragment()).toMatchSnapshot()
      })

      it("renders a bare variant correctly", () => {
        const { asFragment } = render(
          <ThemeProvider>
            <Button label="button" size={size} bare />
          </ThemeProvider>
        )
        expect(asFragment()).toMatchSnapshot()
      })

      it("renders with an icon correctly", () => {
        const { asFragment } = render(
          <ThemeProvider>
            <Button label="button" size={size} icon="oInfo" />
          </ThemeProvider>
        )
        expect(asFragment()).toMatchSnapshot()
      })

      it("renders with a bare icon correctly", () => {
        const { asFragment } = render(
          <ThemeProvider>
            <Button label="button" size={size} icon="oInfo" bare />
          </ThemeProvider>
        )
        expect(asFragment()).toMatchSnapshot()
      })
    })

    it("renders with inset correctly", () => {
      const { asFragment } = render(
        <ThemeProvider>
          <Button label="button" size={size} insetLabel={"10"} />
        </ThemeProvider>
      )
      expect(asFragment()).toMatchSnapshot()
    })

    it("renders with text and an icon correctly", () => {
      const { asFragment } = render(
        <ThemeProvider>
          <Button label="button" size={size} icon="oInfo" />
        </ThemeProvider>
      )
      expect(asFragment()).toMatchSnapshot()
    })

    it("renders with text, icon and inset correctly", () => {
      const { asFragment } = render(
        <ThemeProvider>
          <Button label="button" size={size} icon="oInfo" insetLabel={"10"} />
        </ThemeProvider>
      )
      expect(asFragment()).toMatchSnapshot()
    })

    it("renders with a specified color preset correctly", () => {
      const { asFragment } = render(
        <ThemeProvider>
          <Button label="button" colorTheme="danger" />
        </ThemeProvider>
      )
      expect(asFragment()).toMatchSnapshot()
    })

    it("renders with a custom color theme correctly", () => {
      const { asFragment } = render(
        <ThemeProvider>
          <Button
            label="button"
            colorTheme={{
              background: "#f142f4",
              font: "#f4f141",
              insetBackground: "#000000",
              insetFont: "#FFFFFF",
            }}
          />
        </ThemeProvider>
      )
      expect(asFragment()).toMatchSnapshot()
    })
  })

  it("should call the provided onClick function", () => {
    const onClick = jest.fn()
    const { getByText } = render(
      <ThemeProvider>
        <Button label="button" onClick={onClick} />
      </ThemeProvider>
    )
    fireEvent.click(getByText("button"))
    expect(onClick).toBeCalled()
    expect(onClick.mock.calls[0].length).toBe(1)
  })

  it("should navigate to the given href location when provided", () => {
    window.location.assign = jest.fn()
    const { getByText } = render(
      <ThemeProvider>
        <Button label="button" href="/sample" />
      </ThemeProvider>
    )
    fireEvent.click(getByText("button"))
    expect(window.location.assign).toBeCalledWith("/sample")
  })
})
