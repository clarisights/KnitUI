import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, select } from "@storybook/addon-knobs"
import { Trigger } from "."

const heightOptions = ["small", "medium", "large"]

storiesOf("Trigger", module)
  .addDecorator(withKnobs)
  .add("basic", () => (
    <div
      style={{
        width: 420,
      }}>
      <Trigger
        overlay={
          <div
            style={{
              width: 200,
              height: 200,
              background: "yellow",
            }}>
            hello
          </div>
        }>
        <div>hello</div>
      </Trigger>
    </div>
  ))
