import React from "react"
import Button from "../index"
import { shallow } from "enzyme"

describe("Button", () => {
  it("should render correctly", () => {
    const btn = shallow(<Button name="tada" />)
    expect(btn).toMatchSnapshot()
  })
})
