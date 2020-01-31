import React from "react"
import { storiesOf } from "@storybook/react"
import RadioGroup from "./index"

storiesOf("Radio", module)
  .add("Small with 2 in group", () => (
    <RadioGroup size="small">
      <RadioGroup.Item value={1}>Option 1</RadioGroup.Item>
      <RadioGroup.Item value={2}>Option 2</RadioGroup.Item>
    </RadioGroup>
  ))
  .add("Small with 2 in group and default checked", () => (
    <RadioGroup size="small">
      <RadioGroup.Item checked value={1}>
        Option 1
      </RadioGroup.Item>
      <RadioGroup.Item checked value={2}>
        Option 2
      </RadioGroup.Item>
    </RadioGroup>
  ))
  .add("Small with 2 in group with disabled", () => (
    <RadioGroup size="small" disabled defaultValue={1}>
      <RadioGroup.Item value={1}>Option 1</RadioGroup.Item>
      <RadioGroup.Item value={2}>Option 2</RadioGroup.Item>
    </RadioGroup>
  ))
  .add("Medium with 2 in group", () => (
    <RadioGroup size="medium">
      <RadioGroup.Item value={1}>Option 1</RadioGroup.Item>
      <RadioGroup.Item value={2}>Option 2</RadioGroup.Item>
    </RadioGroup>
  ))
  .add("Medium with 2 in group and with default value", () => (
    <RadioGroup size="medium" defaultValue={1}>
      <RadioGroup.Item value={1}>Option 1</RadioGroup.Item>
      <RadioGroup.Item value={2}>Option 2</RadioGroup.Item>
    </RadioGroup>
  ))
  .add("With single child", () => (
    <RadioGroup>
      <RadioGroup.Item value={1}>Option 1</RadioGroup.Item>
    </RadioGroup>
  ))
  .add("With no child", () => <RadioGroup />)
