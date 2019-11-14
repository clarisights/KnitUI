import React from "react"
import Button from "../"
import { render, cleanup, fireEvent } from "react-testing-library"
import { ThemeProvider } from "../../../common/styles"
import "jest-styled-components"
import "jest-dom/extend-expect"

afterEach(cleanup)

describe("Button", () => {
  const sizes = ["small", "medium", "large"]

  // All tests are executes for each of the three sizes
  sizes.forEach((size: "small" | "medium" | "large") => {
    describe(`with size ${size}`, () => {
      it("renders a primary variant with a label correctly", () => {
        const { asFragment } = render(
          <ThemeProvider>
            <Button label="button" size={size} />
          </ThemeProvider>
        )
        expect(asFragment()).toMatchSnapshot()
      })

      it("renders a primary variant with a label correctly", () => {
        const { asFragment } = render(
          <ThemeProvider>
            <Button label="button" size={size} type="secondary" />
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
          <Button label="button" colorPreset="danger" />
        </ThemeProvider>
      )
      expect(asFragment()).toMatchSnapshot()
    })

    it("renders with a custom color theme correctly", () => {
      const { asFragment } = render(
        <ThemeProvider>
          <Button
            label="button"
            customColor="#f142f4"
            insetCustomColor="#000000"
          />
        </ThemeProvider>
      )
      expect(asFragment()).toMatchSnapshot()
    })

    it("renders with a custom color object correctly", () => {
      const { asFragment } = render(
        <ThemeProvider>
          <Button
            label="button"
            customColor={{ color: "#f142f4", secondaryColor: "#873421" }}
            insetCustomColor="#000000"
          />
        </ThemeProvider>
      )
      expect(asFragment()).toMatchSnapshot()
    })
  })

  it("Should disable button rendered correctly", () => {
    const { asFragment } = render(
      <ThemeProvider>
        <Button label="button" disabled={true} />
      </ThemeProvider>
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it("should apply provided classname", () => {
    const { container } = render(
      <ThemeProvider>
        <Button label="button" className="custom-class" />
      </ThemeProvider>
    )
    expect(container.firstChild).toHaveClass("custom-class")
  })

  it("should apply provided styled", () => {
    const { container } = render(
      <ThemeProvider>
        <Button label="button" style={{ backgroundColor: "red" }} />
      </ThemeProvider>
    )
    expect(container.firstChild).toHaveStyle("background-color: red")
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

describe("Button Group : ", () => {
  it("Button group : snapshot", () => {
    const { asFragment } = render(
      <ThemeProvider>
        <Button.Group>
          <Button icon="oInfo" />
          <Button label="Dropdown" />
          <Button icon="oExpandMore" />
        </Button.Group>
      </ThemeProvider>
    )
    expect(asFragment()).toMatchSnapshot()
  })
  it("Button group with all ghost buttons : snapshot", () => {
    const { asFragment } = render(
      <ThemeProvider>
        <Button.Group>
          <Button icon="oInfo" ghost />
          <Button label="Dropdown" ghost />
          <Button icon="oExpandMore" ghost />
        </Button.Group>
      </ThemeProvider>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
