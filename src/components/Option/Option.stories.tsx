import React from "react"
import { withKnobs } from "@storybook/addon-knobs"
import { storiesOf } from "@storybook/react"
import Option from "./"
import Switch from "../Switch"
import Button from "../Button"
const Readme = require("./README.md")

storiesOf("Option", module)
  .addDecorator(withKnobs)
  .addParameters({
    readme: {
      // Show readme before story
      codeTheme: "shades-of-purple",
      // Show readme at the addons panel
      sidebar: Readme,
    },
  })
  .add("Basic option", () => (
    <Option onClick={(e, val) => alert(val)} value="Option 1">
      <Option.Text>Option 1</Option.Text>
    </Option>
  ))
  .add("Option without child", () => (
    <Option onClick={(e, val) => alert(val)} value="Option 1" />
  ))
  .add("Disabled option", () => (
    <Option onClick={() => console.log("asd")} disabled value="Option 1">
      <Option.Text>Disabled Option</Option.Text>
    </Option>
  ))
  .add("With some icons", () => (
    <Option onClick={(e, val) => alert(val)} value="Option 1">
      <Option.Icon type="oClose" align="right" />
      <Option.Icon type="oStorage" />
      <Option.Icon type="oCheckBox" align="right" />
      <Option.Text description="Option Description">Option 1</Option.Text>
    </Option>
  ))
  .add("With Option Group", () => (
    <Option.Group title="SOME ITEMS">
      <Option onClick={(e, val) => alert(val)} value="Option 1">
        <Option.Icon type="oClose" fill="yellow" align="right" />
        <Option.Icon type="oSettings" align="left" />
        <Option.Icon type="oClose" align="right" />
        <Option.Text description="Option Description">Option 1</Option.Text>
      </Option>
      <Option onClick={(e, val) => alert(val)} value="Option 2">
        <Option.Icon type="oClose" fill="yellow" align="right" />
        <Option.Icon type="oOpenWith" align="left" />
        <Option.Icon type="oClose" align="right" />
        <Option.Text description="Option Description">Option 2</Option.Text>
      </Option>
      <Option onClick={(e, val) => alert(val)} value="Option 3">
        <Option.Icon type="oClose" fill="yellow" align="right" />
        <Option.Icon type="oOpenWith" align="left" />
        <Option.Icon type="oClose" align="right" />
        <Option.Text description="Option Description">Option 3</Option.Text>
      </Option>
    </Option.Group>
  ))
  .add("With Selected Option", () => (
    <Option.Group title="SOME ITEMS">
      <Option onClick={(e, val) => alert(val)} value="Option 1">
        <Option.Text>Option 1</Option.Text>
      </Option>
      <Option selected onClick={(e, val) => alert(val)} value="Option 2">
        <Option.Text>Option 2</Option.Text>
      </Option>
      <Option onClick={(e, val) => alert(val)} value="Option 3">
        <Option.Text>Option 3</Option.Text>
      </Option>
    </Option.Group>
  ))
  .add("With Avatar", () => (
    <Option onClick={(e, val) => alert(val)} value="Option 1">
      <Option.Avatar name="anshumankun" />
      <Option.Text description="Option Description">Option 1</Option.Text>
      <Option.Icon type="oClose" align="right" />
    </Option>
  ))
  .add("With disabled and Avatar", () => (
    <Option disabled onClick={(e, val) => alert(val)} value="Option 1">
      <Option.Avatar name="anshumankun" />
      <Option.Text description="Option Description">Option 1</Option.Text>
      <Option.Icon type="oClose" align="right" />
    </Option>
  ))
  .add("With Tag and selected", () => (
    <Option selected onClick={(e, val) => alert(val)} value="Option 1">
      <Option.Text>Option 1</Option.Text>
      <Option.Tag text="Aa" align="right" />
    </Option>
  ))
  .add("With selectors", () => (
    <Option.Group title="Selector">
      <Option value="Option 1">
        <Option.Text>Option 1</Option.Text>
        <Switch align="right" />
      </Option>
      <Option value="Option 2">
        <Option.Text>Option 2</Option.Text>
        <Switch align="right" />
      </Option>
    </Option.Group>
  ))
  .add("With overflow handling", () => (
    <div style={{ width: '20rem', border: '1px solid red'}}>
      <Option.Group title="Selector">
        <Option selected value="Option 1">
          <Option.Text>This is some really long option</Option.Text>
        </Option>
        <Option value="Option 2">
          <Option.Text>Option 2</Option.Text>
        </Option>
      </Option.Group>

    </div>
  ))
  .add("With custom fill", () => (
      <Option.Group title="Selector">
        <Option customStyles={{ background: '#FDEDCE' }} selected value="Option 1">
          <Option.Text>Campaign</Option.Text>
        </Option>
        <Option customStyles={{ background: '#DDEEE5' }} value="FB Spend">
          <Option.Text>FB Spend</Option.Text>
        </Option>
      </Option.Group>
  ))
  .add("With divider", () => (
    <Option.Group title="SOME ITEMS">
      <Option value="Edit">
        <Option.Icon type="oEdit" />
        <Option.Text>Edit</Option.Text>
      </Option><Option value="Duplicate">
        <Option.Icon type="oFileCopy" />
        <Option.Text>Duplicate</Option.Text>
      </Option><Option value="Move to">
        <Option.Icon type="oArrowForward" />
        <Option.Text>Move to</Option.Text>
      </Option>
      <Option.Divider />
      <Option value="Delete">
        <Option.Icon type="oDelete" />
        <Option.Text>Delete</Option.Text>
      </Option>
    </Option.Group>
  ))
  .add("With Button", () => (
    <Option onClick={(e, val) => alert(val)} value="Option 1">
      <Option.Text description="Option Description">Option 1</Option.Text>
      <Button onClick={(e) => e.stopPropagation()} align="right" label="asd">Click!</Button>
    </Option>
  ))
