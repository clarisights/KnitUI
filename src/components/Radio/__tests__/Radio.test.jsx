import React from "react"
import "jest-dom/extend-expect"

import { cleanup, fireEvent, render } from "../../../common/TestUtil"
import RadioGroup from "../index"

afterEach(cleanup)

describe("Radio", () => {
  describe("renders radio correctly", () => {
    it("Small with 2 in group", () => {
      const { asFragment, container, getByText } = render(
        <RadioGroup size="small">
          <RadioGroup.Item value={1}>Option 1</RadioGroup.Item>
          <RadioGroup.Item value={2}>Option 2</RadioGroup.Item>
        </RadioGroup>
      )
      expect(container.querySelector(".knit-radio-inner")).toHaveStyle(
        `height: 1.2rem`
      )
      const allRadioInputs = container.querySelectorAll(".knit-radio-input")
      fireEvent.click(allRadioInputs[1])
      expect(allRadioInputs[0]).not.toBeChecked()
      expect(allRadioInputs[1]).toBeChecked()
      expect(asFragment()).toMatchSnapshot()
    })

    it("Small with 2 in group with disabled", () => {
      const { asFragment, container } = render(
        <RadioGroup size="small" disabled defaultValue={1}>
          <RadioGroup.Item value={1}>Option 1</RadioGroup.Item>
          <RadioGroup.Item value={2}>Option 2</RadioGroup.Item>
        </RadioGroup>
      )
      const allRadioInputs = container.querySelectorAll(".knit-radio-input")
      // make sure that the inputs are disabled
      expect(allRadioInputs[0]).toHaveAttribute("disabled")
      fireEvent.click(allRadioInputs[1])
      expect(allRadioInputs[0]).toBeChecked()
      expect(allRadioInputs[1]).not.toBeChecked()
      expect(asFragment()).toMatchSnapshot()
    })

    it("Medium with 2 in a group", () => {
      const { asFragment, container } = render(
        <RadioGroup size="medium" disabled defaultValue={1}>
          <RadioGroup.Item value={1}>Option 1</RadioGroup.Item>
          <RadioGroup.Item value={2}>Option 2</RadioGroup.Item>
        </RadioGroup>
      )

      expect(container.querySelector(".knit-radio-inner")).toHaveStyle(
        `height: 1.4rem`
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
      const firstRadio = container.querySelector(".knit-radio-input")
      expect(firstRadio).toBeInTheDocument()
      fireEvent.click(firstRadio)
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
  })
})
