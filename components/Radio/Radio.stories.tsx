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
  .add("Small with 2 in group and disabled", () => (
    <RadioGroup size="small" disabled>
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
    <RadioGroup size="medium" disabled>
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
  .add("Default with checked", () => <Radio defaultChecked />)
  .add("Small with default checked", () => <Radio size="small" />)
  .add("Radio with label", () => <Radio>Radio</Radio>)
  .add("Default with disabled", () => <Radio disabled />)
  .add("Default with disabled but checked", () => <Radio disabled checked />)
  .add("Default with label and disabled with checked", () => (
    <Radio disabled checked>
      Radio Disabled
    </Radio>
  ))
  .add("With children", () => (
    <RadioGroup>
      <Radio value={1} size="small" />
      <Radio value={2} size="small" />
      <Radio value={3} size="small" />
    </RadioGroup>
  ))
