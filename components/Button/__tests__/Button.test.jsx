import React from "react"
import { Button } from "../index"
import renderer from 'react-test-renderer';

describe("Button", () => {
  it("should render correctly", () => {
    const tree = renderer.create(<Button label="button" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
