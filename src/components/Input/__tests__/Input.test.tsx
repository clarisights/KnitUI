import React from "react"
import Input from ".."
import { render, cleanup, fireEvent } from "react-testing-library"
import { ThemeProvider } from "../../../common/styles"
import Icon from "../../Icon"
import "jest-styled-components"
import "jest-dom/extend-expect"

afterEach(cleanup)

describe("Input", () => {
  const sizes = ["small", "large", undefined]

  // All tests are executes for each of the three sizes
  sizes.forEach((size: "small" | "large" | undefined) => {
    describe(`with size ${size}`, () => {
      it("renders correctly", () => {
        const { asFragment } = render(
          <ThemeProvider>
            <Input
              placeholder="placeholder"
              inputSize={size}
              onChange={() => {}}
            />
          </ThemeProvider>
        )
        expect(asFragment()).toMatchSnapshot()
      })
    })
  })

  it("with a text label", () => {
    const { asFragment } = render(
      <ThemeProvider>
        <Input
          placeholder="placeholder"
          onChange={() => {}}
          label="label"
        />
      </ThemeProvider>
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it("with a text notification", () => {
    const { asFragment } = render(
      <ThemeProvider>
        <Input
          placeholder="placeholder"
          onChange={() => {}}
          notification="notification"
        />
      </ThemeProvider>
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it("with a custom label", () => {
    const { asFragment } = render(
      <ThemeProvider>
        <Input
          placeholder="placeholder"
          onChange={() => {}}
          label={(
            <div css={`
              display: flex;
              align-items: center;
            `}>
              <span>Label</span>
              <Icon type="oInfo" />
            </div>
          )}
        />
      </ThemeProvider>
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it("with a custom notification", () => {
    const { asFragment } = render(
      <ThemeProvider>
        <Input
          placeholder="placeholder"
          onChange={() => {}}
          notification={(
            <div css={`
              display: flex;
              align-items: center;
            `}>
              <span>Notification</span>
              <Icon type="oInfo" />
            </div>
          )}
        />
      </ThemeProvider>
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it("with a text label and a text notification", () => {
    const { asFragment } = render(
      <ThemeProvider>
        <Input
          placeholder="placeholder"
          onChange={() => {}}
          label="label"
          notification="notification"
        />
      </ThemeProvider>
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it("with left addon renders correctly", () => {
    const { asFragment } = render(
      <ThemeProvider>
        <Input
          placeholder="placeholder"
          onChange={() => {}}
          addonBefore={<Icon type="oInfo" />}
        />
      </ThemeProvider>
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it("with right addon renders correctly", () => {
    const { asFragment } = render(
      <ThemeProvider>
        <Input
          placeholder="placeholder"
          onChange={() => {}}
          addonAfter={<Icon type="oInfo" />}
        />
      </ThemeProvider>
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it("with left and right addons renders correctly", () => {
    const { asFragment } = render(
      <ThemeProvider>
        <Input
          placeholder="placeholder"
          onChange={() => {}}
          addonBefore={<Icon type="oInfo" />}
          addonAfter={<Icon type="oInfo" />}
        />
      </ThemeProvider>
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it("should apply provided classname", () => {
    const { container } = render(
      <ThemeProvider>
        <Input
          placeholder="placeholder"
          onChange={() => {}}
          className="custom-class"
        />
      </ThemeProvider>
    )
    expect(container.firstChild).toHaveClass("custom-class")
  })

  it("should apply provided styled", () => {
    const { container } = render(
      <ThemeProvider>
        <Input
          placeholder="placeholder"
          onChange={() => {}}
          style={{ backgroundColor: "red" }}
        />
      </ThemeProvider>
    )
    expect(container.firstChild).toHaveStyle("background-color: red")
  })
})
