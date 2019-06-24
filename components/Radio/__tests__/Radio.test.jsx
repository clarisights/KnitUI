import React from "react"
import RadioGroup from "../index"
import { render, cleanup, fireEvent } from "react-testing-library"
import "jest-styled-components"
import "jest-dom/extend-expect"

afterEach(cleanup)

describe("Radio", () => {
  describe("renders radio correctly", () => {
    it("Small with 2 in group", () => {
      const { asFragment } = render(
        <RadioGroup size="small">
          <RadioGroup.Item value={1}>Option 1</RadioGroup.Item>
          <RadioGroup.Item value={2}>Option 2</RadioGroup.Item>
        </RadioGroup>
      )
      expect(asFragment()).toMatchSnapshot()
    })

    it("Small with 2 in group with disabled", () => {
      const { asFragment } = render(
        <RadioGroup size="small" disabled defaultValue={1}>
          <RadioGroup.Item value={1}>Option 1</RadioGroup.Item>
          <RadioGroup.Item value={2}>Option 2</RadioGroup.Item>
        </RadioGroup>
      )
      expect(asFragment()).toMatchSnapshot()
    })

    it("Medium with 2 in a group", () => {
      const { asFragment } = render(
        <RadioGroup size="small" disabled defaultValue={1}>
          <RadioGroup.Item value={1}>Option 1</RadioGroup.Item>
          <RadioGroup.Item value={2}>Option 2</RadioGroup.Item>
        </RadioGroup>
      )
      expect(asFragment()).toMatchSnapshot()
    })

    it("renders with single child correctly", () => {
      const { asFragment } = render(
        <RadioGroup>
          <RadioGroup.Item value={1} />
        </RadioGroup>
      )
      expect(asFragment()).toMatchSnapshot()
    })

    it("renders with no child correctly", () => {
      const { asFragment } = render(<RadioGroup />)
      expect(asFragment()).toMatchSnapshot()
    })

    it("should call the provided onClick function", () => {
      const onClick = jest.fn()
      const { container } = render(
        <RadioGroup>
          <RadioGroup.Item onClick={onClick} value={1}>
            Option 1
          </RadioGroup.Item>
          <RadioGroup.Item value={2} />
        </RadioGroup>
      )
      // Select first input
      expect(container.querySelector("input")).toBeInTheDocument()
      fireEvent.click(container.querySelector("input"))
      expect(onClick).toBeCalled()
      expect(onClick.mock.calls[0].length).toBe(1)
    })

    it("should call the provided onChange function", () => {
      const onChange = jest.fn()
      const { container } = render(
        <RadioGroup className="abc" onChange={onChange}>
          <RadioGroup.Item value={1}>Option 1</RadioGroup.Item>
          <RadioGroup.Item value={2} />
        </RadioGroup>
      )
      // select container element
      expect(container.querySelector(".abc")).toBeInTheDocument()
      fireEvent.click(container.querySelector(".abc"))
      expect(onChange).toBeCalled()
      expect(onChange.mock.calls[0].length).toBe(1)
    })

    it("should change the radio on click", () => {
      const { container, asFragment } = render(
        <RadioGroup>
          <RadioGroup.Item value={1}>Option 1</RadioGroup.Item>
          <RadioGroup.Item value={2} />
        </RadioGroup>
      )
      // Select first input
      expect(container.querySelector("input")).toBeInTheDocument()
      fireEvent.click(container.querySelector("input"))
      expect(asFragment()).toMatchSnapshot()
    })
  })
})
