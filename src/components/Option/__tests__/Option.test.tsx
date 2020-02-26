import React from "react"
import { cleanup, fireEvent, render } from "../../../common/TestUtil"
import Icon from "../../Icon"
import Option from ".."

afterEach(cleanup)

describe("Option", () => {
  it("renders basic Option correctly", () => {
    const { asFragment, container } = render(<Option value="Tanjiro" />)
    expect(container.children).toHaveLength(1)
    expect(container).toHaveTextContent("Tanjiro")
    expect(asFragment()).toMatchSnapshot()
  })

  it("renders disabled option correctly", () => {
    const onClick = jest.fn()
    const { asFragment, container } = render(
      <Option disabled onClick={onClick} value="Tanjiro">
        <Option.Text description="this is the option description">
          Nezuko
        </Option.Text>
      </Option>
    )

    expect(container).toHaveTextContent("this is the option description")
    // Should not fire the onClick handler
    fireEvent.click(container)
    expect(onClick).not.toHaveBeenCalled()
    expect(asFragment()).toMatchSnapshot()
  })

  it("renders selected option correctly and fires onClick", () => {
    const onClick = jest.fn()
    const { asFragment, container } = render(
      <Option selected value="Tanjiro">
        <Option.Text>Nezuko</Option.Text>
      </Option>
    )
    // should fire the given onClick
    fireEvent.click(container)
    expect(onClick).not.toHaveBeenCalled()
    // should have a check icon if selected props is supplied
    const icon = container.querySelectorAll('[type="oCheck"]')
    expect(icon).toHaveLength(1)
    expect(asFragment()).toMatchSnapshot()
  })

  it("renders OptionGroup Correctly", () => {
    const { asFragment, container } = render(
      <Option.OptionGroup title="SOME ITEMS">
        <Option value="Tanjiro">
          <Option.Text description="Kimetsu no Yaiba">Option 1</Option.Text>
        </Option>
        <Option value="Zenitsu">
          <Option.Text description="Kimetsu no Yaiba">Option 2</Option.Text>
        </Option>
      </Option.OptionGroup>
    )
    // Should print the option group title
    expect(container).toHaveTextContent("SOME ITEMS")
    // should render the group title with children
    expect(container.children[0].children).toHaveLength(3)
    expect(asFragment()).toMatchSnapshot()
  })

  it("renders icons and avatar with correct alignment ", () => {
    const { asFragment, getByTestId, container } = render(
      <Option value="Tanjiro">
        <Option.Avatar name="anshumankun" />
        <Option.Text description="Kimetsu no Yaiba">Option 1</Option.Text>
        <Option.Icon type="oClose" align="right" />
      </Option>
    )
    const avatarComponent = getByTestId("avatar")
    const iconComponent = container.querySelector('[type="oClose"]')

    // Container should render an avatar with correct styles
    expect(container).toContainElement(avatarComponent)
    expect(avatarComponent).toHaveStyle("align-self: flex-start")

    // Icon should also have the correct alignment
    expect(iconComponent).toHaveStyle("align-self: center")
    expect(asFragment()).toMatchSnapshot()
  })
})
