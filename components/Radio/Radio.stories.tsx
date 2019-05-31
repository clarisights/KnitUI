import React from "react"
import { storiesOf } from "@storybook/react"
import { Radio, RadioGroup } from "./index"

storiesOf("Radio", module)
  .add("Small with 2 in group", () => (
    <RadioGroup size="small">
      <Radio value={1}>Option 1</Radio>
      <Radio value={2}>Option 2</Radio>
    </RadioGroup>
  ))
  .add("Small with 2 in group with disabled", () => (
    <RadioGroup size="small" disabled defaultValue={1}>
      <Radio value={1}>Option 1</Radio>
      <Radio value={2}>Option 2</Radio>
    </RadioGroup>
  ))
  .add("Medium with 2 in group", () => (
    <RadioGroup size="medium">
      <Radio value={1} />
      <Radio value={2} />
    </RadioGroup>
  ))
  .add("Medium with 2 in group and disabled", () => (
    <RadioGroup size="medium" disabled defaultValue={1}>
      <Radio value={1} />
      <Radio value={2} />
    </RadioGroup>
  ))
  .add("With single child", () => (
    <RadioGroup>
      <Radio value={1} />
    </RadioGroup>
  ))
  .add("With no child", () => <RadioGroup />)
