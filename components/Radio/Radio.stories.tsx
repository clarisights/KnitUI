import React from "react"
import { storiesOf } from "@storybook/react"
import { Radio, RadioGroup } from "./index"

storiesOf("Radio", module)
  .add("Basic", () => <Radio />)
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
