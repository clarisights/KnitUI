import React from "react"
import Avatar from "../"
import { render, cleanup, fireEvent } from "react-testing-library"
import { ThemeProvider } from "../../../common/styles"
import "jest-styled-components"
import "jest-dom/extend-expect"

afterEach(cleanup)

const defaultProps = {
  size: "24px",
  disabled: false,
  onClick: () => {},
}

const additionalProps = {
  picture: "https://i.ibb.co/DwVLSqF/user-profile.jpg",
  name: "Jane Doe",
}

describe("Avatar Snapshots", () => {
  it("Picture avatar", () => {
    const { asFragment } = render(
      <Avatar {...defaultProps} {...additionalProps} />,
      { wrapper: ThemeProvider }
    )
    expect(asFragment()).toMatchSnapshot()
  })
  it("Name avatar", () => {
    const { asFragment } = render(
      <Avatar {...defaultProps} name={additionalProps.name} />,
      { wrapper: ThemeProvider }
    )
    expect(asFragment()).toMatchSnapshot()
  })
  it("Unknown user avatar", () => {
    const { asFragment } = render(<Avatar {...defaultProps} />, {
      wrapper: ThemeProvider,
    })
    expect(asFragment()).toMatchSnapshot()
  })
  it("Different size picture avatar", () => {
    const { asFragment } = render(
      <Avatar {...defaultProps} size="100px" {...additionalProps} />,
      { wrapper: ThemeProvider }
    )
    expect(asFragment()).toMatchSnapshot()
  })
  it("Different size name avatar", () => {
    const { asFragment } = render(
      <Avatar {...defaultProps} size="100px" name={additionalProps.name} />,
      { wrapper: ThemeProvider }
    )
    expect(asFragment()).toMatchSnapshot()
  })
  it("Different size icon avatar", () => {
    const { asFragment } = render(<Avatar {...defaultProps} size="100px" />, {
      wrapper: ThemeProvider,
    })
    expect(asFragment()).toMatchSnapshot()
  })
  it("Disabled picture avatar", () => {
    const { asFragment } = render(
      <Avatar {...defaultProps} size="100px" disabled {...additionalProps} />,
      { wrapper: ThemeProvider }
    )
    expect(asFragment()).toMatchSnapshot()
  })
  it("Disabled name avatar", () => {
    const { asFragment } = render(
      <Avatar
        {...defaultProps}
        size="100px"
        disabled
        name={additionalProps.name}
      />,
      { wrapper: ThemeProvider }
    )
    expect(asFragment()).toMatchSnapshot()
  })
  it("Disabled icon avatar", () => {
    const { asFragment } = render(
      <Avatar {...defaultProps} disabled size="100px" />,
      { wrapper: ThemeProvider }
    )
    expect(asFragment()).toMatchSnapshot()
  })
})

describe("Avatar onClick Functionality", () => {
  const spyOnClick = jest.spyOn(defaultProps, "onClick")

  afterEach(() => {
    spyOnClick.mockReset()
  })
  it("passed onClick function get fired when clicked", () => {
    const { getByTestId } = render(
      <Avatar {...defaultProps} size="100px" name={additionalProps.name} />,
      { wrapper: ThemeProvider }
    )

    fireEvent.click(getByTestId("avatar"))
    expect(spyOnClick).toBeCalledTimes(1)
  })

  it("passed onClick function does not get fired when clicked on Disabled Avatar", () => {
    const { getByTestId } = render(
      <Avatar
        {...{ ...defaultProps, disabled: true }}
        size="100px"
        name={additionalProps.name}
      />,
      { wrapper: ThemeProvider }
    )

    fireEvent.click(getByTestId("avatar"))
    expect(spyOnClick).toBeCalledTimes(0)
  })
})
