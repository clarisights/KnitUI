import React from "react"
import Input from ".."
import { cleanup, render, fireEvent } from "../../../common/TestUtil"
import Icon from "../../Icon"

afterEach(cleanup)

describe("Input", () => {
  const sizes = ["small", "large", undefined]
  const types = ["search", "number", "password", "textarea", undefined]
  const states = ["success", "warning", "error", undefined]
  const resizes = ["horizontal", "vertical", "none", undefined]

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

  types.forEach(
    (type: "search" | "number" | "password" | "textarea" | undefined) => {
      describe(`with type ${type}`, () => {
        it("renders correctly", () => {
          const { asFragment } = render(
            <Input placeholder="placeholder" type={type} />
          )
          expect(asFragment()).toMatchSnapshot()
        })
      })
    }
  )

  states.forEach((state: "success" | "warning" | "error" | undefined) => {
    describe(`with state ${state}`, () => {
      it("renders correctly", () => {
        const { asFragment } = render(<Input state={state} />)
        expect(asFragment()).toMatchSnapshot()
      })
    })
  })

  resizes.forEach((resize: "horizontal" | "vertical" | "none" | undefined) => {
    describe(`with textarea resize: ${resize}`, () => {
      it("renders correctly", () => {
        const { asFragment } = render(
          <Input type="textarea" textareaResize={resize} />
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

    if (container.firstChild) {
      expect(container.firstChild.firstChild).toHaveClass("custom-class")
    }
  })

  it("should apply provided styled", () => {
    const { container } = render(
      <Input
        placeholder="placeholder"
        onChange={() => {}}
        style={{ backgroundColor: "red" }}
      />
    )

    if (container.firstChild) {
      expect(container.firstChild.firstChild).toHaveStyle(
        "background-color: red"
      )
    }
  })

  it("should display disabled icon on hover for disabled input", () => {
    const { container } = render(<Input onChange={() => {}} disabled />)

    if (container.firstChild) {
      expect(container.firstChild.firstChild).toHaveStyle("cursor: not-allowed")
    }
  })

  it("should not fire events on disabled input", () => {
    const onClick = jest.fn()

    const { container } = render(<Input onClick={onClick} disabled />)

    const input = container.querySelector("input")

    if (input) {
      fireEvent.click(input)
      expect(onClick).not.toHaveBeenCalled()
    }
  })

  it("should display search icon on type search", () => {
    const { container } = render(<Input type="search" />)

    const iconContainer = container.querySelector('span[type="oSearch"]')

    expect(iconContainer).toBeDefined()
  })

  it("should display clear icon on type search with value", () => {
    const { container } = render(<Input type="search" value="test" />)

    const iconContainer = container.querySelector('span[type="oClose"]')

    expect(iconContainer).toBeDefined()
  })

  it("should call onChange on clicking clear icon in input search", () => {
    const onChange = jest.fn()

    const { container } = render(
      <Input type="search" value="test" onChange={onChange} />
    )

    const iconContainer = container.querySelector('span[type="oClose"]')

    expect(iconContainer).toBeDefined()

    if (iconContainer) {
      fireEvent.mouseDown(iconContainer)
      expect(onChange).toHaveBeenCalledTimes(1)
    }
  })

  it("should display show password icon on type password", () => {
    const { container } = render(<Input type="password" />)

    const input = container.querySelector('input[type="password"]')
    const iconContainer = container.querySelector('span[type="oVisibility"]')

    expect(iconContainer).toBeDefined()
    expect(input).toBeDefined()
  })

  it("should toggle password mode with clicked on icons", () => {
    const { container } = render(<Input type="password" />)

    const input = container.querySelector('input[type="password"]')
    const showPasswordContainer = container.querySelector(
      'span[type="oVisibility"]'
    )

    expect(input).toBeDefined()
    expect(showPasswordContainer).toBeDefined()

    if (input) {
      expect(input.getAttribute("type")).toEqual("password")
    }

    if (showPasswordContainer) {
      // Click on show password button
      fireEvent.click(showPasswordContainer)

      const hidePasswordContainer = container.querySelector(
        'span[type="oVisibilityOff"]'
      )
      // Expect hide password icon to exist
      expect(hidePasswordContainer).toBeDefined()

      if (input) {
        // Input type changed from password to text
        expect(input.getAttribute("type")).toEqual("text")
      }

      if (hidePasswordContainer) {
        // Click on hide password button
        fireEvent.click(hidePasswordContainer)
        // Expect show password button to exist
        expect(showPasswordContainer).toBeDefined()

        if (input) {
          // Input type changed from text to password
          expect(input.getAttribute("type")).toEqual("password")
        }
      }
    }
  })

  it("should display textarea", () => {
    const { container } = render(<Input type="textarea" />)

    if (container.firstChild && container.firstChild.firstChild) {
      expect(container.firstChild.firstChild.nodeName).toEqual("TEXTAREA")
    }
  })
})
