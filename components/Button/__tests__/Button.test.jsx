import React from "react"
import { Button } from "../index"
import renderer from 'react-test-renderer';

describe("Button", () => {
  it("renders a primary button with a label correctly", () => {
    const tree = renderer.create(<Button label="button" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it("renders a secondary button with a label correctly", () => {
    const tree = renderer.create(<Button label="button" type="secondary" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it("renders a ghost button correctly", () => {
    const tree = renderer.create(<Button label="button" ghost/>).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it("renders a button with inset correctly", () => {
    const tree = renderer.create(<Button label="button" insetLabel={"10"}/>).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it("renders a button with an icon correctly", () => {
    const tree = renderer.create(<Button label="button" icon="Info"/>).toJSON()
    expect(tree).toMatchSnapshot()
  }),
  it("renders a button with text and an icon correctly", () => {
    const tree = renderer.create(<Button label="button" icon="Info"/>).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it("renders a button with text, icon and inset correctly", () => {
    const tree = renderer.create(<Button label="button" icon="Info" insetLabel={"10"}/>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
