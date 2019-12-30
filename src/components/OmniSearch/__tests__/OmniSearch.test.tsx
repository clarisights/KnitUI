import React from "react"
import OmniSearch from "../"
import { render } from "../../../common/TestUtil"
import { cleanup, fireEvent } from "@testing-library/react"

const baseProps = {
  visible: true,
  value: "demo",
  onChange: () => null,
  onClose: () => null,
}

describe("OmniSearch", () => {
  afterEach(cleanup)

  it("renders correctly when visible is false", () => {
    const { asFragment } = render(<OmniSearch {...baseProps} visible={false} />)
    expect(asFragment()).toMatchSnapshot()
  })

  it("renders correctly when visible is true", () => {
    const { asFragment } = render(<OmniSearch {...baseProps} />)
    expect(asFragment()).toMatchSnapshot()
  })

  it("is focused on render", () => {
    const { getByRole } = render(<OmniSearch {...baseProps} />)
    const input = getByRole("search")
    expect(document.activeElement).toBe(input)
  })

  it("maintains focus on the search input box", () => {
    const { container, getByRole } = render(<OmniSearch {...baseProps} />)
    // click on the padding outside the input...
    fireEvent.click(container)
    const input = getByRole("search")
    expect(document.activeElement).toBe(input)
  })

  it("renders correctly when dropdown is null", () => {
    const { asFragment } = render(<OmniSearch {...baseProps} dropdown={null} />)
    expect(asFragment()).toMatchSnapshot()
  })

  it("renders correctly when dropdown is provided", () => {
    const component = <div data-testid="omnisearch-dropdown" />
    const { asFragment, queryByTestId } = render(
      <OmniSearch {...baseProps} dropdown={component} />
    )
    expect(asFragment()).toMatchSnapshot()
    expect(queryByTestId("omnisearch-dropdown")).toBeTruthy() //.toBeDefined()?
  })

  it("triggers props.onChange correctly", () => {
    const onChangeMock = jest.fn()
    const { getByRole } = render(
      <OmniSearch {...baseProps} onChange={onChangeMock} />
    )
    const input = getByRole("search")
    fireEvent.change(input, { target: { value: "hello" } })
    expect(onChangeMock).toHaveBeenCalled()
  })

  it("uses the value and placeholder props correctly", () => {
    const { getByRole, asFragment } = render(
      <OmniSearch {...baseProps} value="hello" placeholder="placeholder" />
    )
    expect(asFragment()).toMatchSnapshot()

    const input = getByRole("search") as HTMLInputElement
    expect(input.value).toEqual("hello")
    expect(input.placeholder).toEqual("placeholder")
  })
})
