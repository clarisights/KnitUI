import React from "react"
import OmniSearch from "../"
import { render } from "../../../common/TestUtil"
import { cleanup, fireEvent, screen } from "@testing-library/react"

afterEach(cleanup)

const baseProps = {
  visible: true,
  value: "demo",
  onChange: () => null,
  onClose: () => null,
}

describe("OmniSearch", () => {
  it("renders correctly when visible is false", () => {
    const { asFragment } = render(<OmniSearch {...baseProps} visible={false} />)
    expect(asFragment()).toMatchSnapshot()
  })

  it("renders correctly when visible is true", () => {
    const { asFragment } = render(<OmniSearch {...baseProps} />)
    expect(asFragment()).toMatchSnapshot()
  })

  it("is focused on render", () => {
    const { container } = render(<OmniSearch {...baseProps} />)
    const input = container.querySelector('input[type="search"]')
    expect(document.activeElement).toBe(input)
  })

  it("maintains focus on the search input box", () => {
    const { container } = render(<OmniSearch {...baseProps} />)
    // click on the padding outside the input...
    fireEvent.click(container.firstChild)
    const input = container.querySelector('input[type="search"]')
    expect(document.activeElement).toBe(input)
  })

  it("renders correctly when dropdown is null", () => {
    const { asFragment } = render(<OmniSearch {...baseProps} dropdown={null} />)
    expect(asFragment()).toMatchSnapshot()
  })

  it("renders correctly when dropdown is provided", () => {
    const component = <div id="omnisearch-dropdown" />
    const { asFragment } = render(
      <OmniSearch {...baseProps} dropdown={component} />
    )
    expect(asFragment()).toMatchSnapshot()
    expect(screen.querySelector("#omnisearch-dropdown")).toBeInTheDocument() //.toBeDefined()?
  })

  it("triggers props.onChange correctly", () => {
    const onChangeMock = jest.fn()
    const { container } = render(
      <OmniSearch {...baseProps} onChange={onChangeMock} />
    )
    const input = container.querySelector('input[type="search"]')
    const inputEvent = { target: { value: "hello" } }
    fireEvent.change(input, inputEvent)
    expect(onChangeMock).toBeCalledTimes(1)
    expect(onChangeMock).lastCalledWith(inputEvent)
  })

  it("triggers props.onClose correctly", () => {
    const onCloseMock = jest.fn()
    render(<OmniSearch {...baseProps} onClose={onCloseMock} />)
    // click on the document, outside the OmniSearch UI
    fireEvent.click(document)
    expect(onCloseMock).toBeCalledTimes(1)
  })

  it("uses the value and placeholder props correctly", () => {
    const { container, asFragment } = render(
      <OmniSearch {...baseProps} value="hello" placeholder="placeholder" />
    )
    expect(asFragment()).toMatchSnapshot()

    const input = container.querySelector('input[type="search"]')
    expect(input.value).toEqual("hello")
    expect(input.placeholder).toEqual("placeholder")
  })
})
