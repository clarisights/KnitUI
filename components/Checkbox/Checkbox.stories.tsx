import React from "react"
import { storiesOf } from "@storybook/react"
import { Checkbox } from "./index"

storiesOf("Checkbox", module)
  .add("Basic", () => <Checkbox />)
  .add("Small with default checked", () => (
  <Checkbox size="small" defaultChecked />
  ))
  .add("Checkbox with label", () => (
    <Checkbox>Hey!</Checkbox>
  ))
  .add("Default with disabled", () => <Checkbox disabled />)
  .add("Default with children", () => (
    <Checkbox />
  ))
  .add("Small with children", () => (
    <Checkbox size="small" />
  ))
