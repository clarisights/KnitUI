import React from "react"
import { withKnobs } from "@storybook/addon-knobs"
import { storiesOf } from "@storybook/react"
import Option from "./"
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
  .add("Basic asd", () => (
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
    <Option.OptionGroup title="SOME ITEMS">
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
    </Option.OptionGroup>
  ))
  .add("With Selected Option", () => (
    <Option.OptionGroup title="SOME ITEMS">
      <Option onClick={(e, val) => alert(val)} value="Option 1">
        <Option.Text>Option 1</Option.Text>
      </Option>
      <Option selected onClick={(e, val) => alert(val)} value="Option 2">
        <Option.Text>Option 2</Option.Text>
      </Option>
      <Option onClick={(e, val) => alert(val)} value="Option 3">
        <Option.Text>Option 3</Option.Text>
      </Option>
    </Option.OptionGroup>
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
