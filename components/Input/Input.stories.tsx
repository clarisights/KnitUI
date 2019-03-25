import React from "react"
import { storiesOf } from "@storybook/react"
import { Input } from "./index"
import { action } from "@storybook/addon-actions"
const Readme = require("./Input.README.md")

storiesOf("Input", module)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })
  .add("Basic input", () => (
    <div
      style={{
        width: 240,
      }}>
      <Input onChange={action("input changed")} placeholder="basic usage" />
    </div>
  ))
  .add("Input with label", () => (
    <div
      style={{
        width: 240,
      }}>
      <Input
        onChange={action("input changed")}
        placeholder="input with label"
        labelText="here we go!"
      />
    </div>
  ))
  .add("Input with success", () => (
    <div
      style={{
        width: 240,
      }}>
      <Input
        onChange={action("input changed")}
        placeholder="input with label"
        success
      />
    </div>
  ))
  .add("Input with label and error", () => (
    <div
      style={{
        width: 240,
      }}>
      <Input
        onChange={action("input changed")}
        placeholder="input with label"
        labelText="here we go!"
        error
      />
    </div>
  ))
