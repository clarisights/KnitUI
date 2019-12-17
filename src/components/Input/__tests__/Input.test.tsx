import "jest-dom/extend-expect"
import "jest-styled-components"
import React from "react"
import Input from ".."
import { cleanup, render } from "../../../common/TestUtil"
import Icon from "../../Icon"

afterEach(cleanup)

describe("Input", () => {
  const sizes = ["small", "large", undefined]

  // All tests are executes for each of the three sizes
  sizes.forEach((size: "small" | "large" | undefined) => {
    describe(`with size ${size}`, () => {
      it("renders correctly", () => {
        const { asFragment } = render(
          <Input
            placeholder="placeholder"
            inputSize={size}
            onChange={() => {}}
          />
        )
        expect(asFragment()).toMatchSnapshot()
      })
    })
  })

  it("with a text label", () => {
    const { asFragment } = render(
      <Input placeholder="placeholder" onChange={() => {}} label="label" />
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it("with a text notification", () => {
    const { asFragment } = render(
      <Input
        placeholder="placeholder"
        onChange={() => {}}
        notification="notification"
      />
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it("with a custom label", () => {
    const { asFragment } = render(
      <Input
        placeholder="placeholder"
        onChange={() => {}}
        label={
          <div
            css={`
              display: flex;
              align-items: center;
            `}>
            <span>Label</span>
            <Icon type="oInfo" />
          </div>
        }
      />
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it("with a custom notification", () => {
    const { asFragment } = render(
      <Input
        placeholder="placeholder"
        onChange={() => {}}
        notification={
          <div
            css={`
              display: flex;
              align-items: center;
            `}>
            <span>Notification</span>
            <Icon type="oInfo" />
          </div>
        }
      />
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it("with a text label and a text notification", () => {
    const { asFragment } = render(
      <Input
        placeholder="placeholder"
        onChange={() => {}}
        label="label"
        notification="notification"
      />
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it("with left addon renders correctly", () => {
    const { asFragment } = render(
      <Input
        placeholder="placeholder"
        onChange={() => {}}
        addonBefore={<Icon type="oInfo" />}
      />
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it("with right addon renders correctly", () => {
    const { asFragment } = render(
      <Input
        placeholder="placeholder"
        onChange={() => {}}
        addonAfter={<Icon type="oInfo" />}
      />
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it("with left and right addons renders correctly", () => {
    const { asFragment } = render(
      <Input
        placeholder="placeholder"
        onChange={() => {}}
        addonBefore={<Icon type="oInfo" />}
        addonAfter={<Icon type="oInfo" />}
      />
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it("should apply provided classname", () => {
    const { container } = render(
      <Input
        placeholder="placeholder"
        onChange={() => {}}
        className="custom-class"
      />
    )
    expect(container.firstChild).toHaveClass("custom-class")
  })

  it("should apply provided styled", () => {
    const { container } = render(
      <Input
        placeholder="placeholder"
        onChange={() => {}}
        style={{ backgroundColor: "red" }}
      />
    )
    expect(container.firstChild).toHaveStyle("background-color: red")
  })
})
