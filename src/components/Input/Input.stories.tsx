import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"

import Input from "."
import Icon from "../Icon"

// Current storybook version doesn't support hooks to be rendered directly
// Hooks are supported in next versions with the help of `React.createElement`
// https://github.com/storybookjs/storybook/pull/7571
const RenderInput = Component => React.createElement(() => Component)

const Readme = require("./README.md")

storiesOf("Input", module)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })
  .add("basic", () =>
    RenderInput(
      <div
        style={{
          width: 240,
        }}>
        <Input onChange={action("input changed")} placeholder="basic usage" />
      </div>
    )
  )
  .add("with label", () =>
    RenderInput(
      <div
        style={{
          width: 240,
        }}>
        <Input
          onChange={action("input changed")}
          placeholder="input with label"
          label="here we go!"
        />
      </div>
    )
  )
  .add("with a custom label", () =>
    RenderInput(
      <div
        style={{
          width: 240,
        }}>
        <Input
          onChange={action("input changed")}
          placeholder="input with custom label"
          label={
            <div
              css={`
                display: flex;
                align-items: center;
              `}>
              <span>Label</span>
              <Icon type="oInfo" />
            </div>
          }
        />
      </div>
    )
  )
  .add("with notification", () =>
    RenderInput(
      <div
        style={{
          width: 240,
        }}>
        <Input
          onChange={action("input changed")}
          placeholder="input with notification"
          notification="a firendly notification"
        />
      </div>
    )
  )
  .add("with a custom notification", () =>
    RenderInput(
      <div
        style={{
          width: 240,
        }}>
        <Input
          onChange={action("input changed")}
          placeholder="input with custom notification"
          notification={
            <div
              css={`
                display: flex;
                align-items: center;
              `}>
              <span>Notification</span>
              <Icon type="oInfo" />
            </div>
          }
        />
      </div>
    )
  )
  .add("with notification and label", () =>
    RenderInput(
      <div
        style={{
          width: 240,
        }}>
        <Input
          onChange={action("input changed")}
          placeholder="input with label and notification"
          label="label"
          notification="a firendly notification"
        />
      </div>
    )
  )
  .add("with success", () =>
    RenderInput(
      <div
        style={{
          width: 240,
        }}>
        <Input
          onChange={action("input changed")}
          placeholder="Success input"
          state="success"
        />
      </div>
    )
  )
  .add("with warning", () =>
    RenderInput(
      <div
        style={{
          width: 240,
        }}>
        <Input
          onChange={action("input changed")}
          placeholder="Warning input"
          state="warning"
        />
      </div>
    )
  )
  .add("with error", () =>
    RenderInput(
      <div
        style={{
          width: 240,
        }}>
        <Input
          onChange={action("input changed")}
          placeholder="Error input"
          state="error"
        />
      </div>
    )
  )
  .add("with success, label and notification", () =>
    RenderInput(
      <div
        style={{
          width: 240,
        }}>
        <Input
          onChange={action("input changed")}
          placeholder="Success input"
          state="success"
          label="label"
          notification="a firendly notification"
        />
      </div>
    )
  )
  .add("with label and error", () =>
    RenderInput(
      <div
        style={{
          width: 240,
        }}>
        <Input
          onChange={action("input changed")}
          placeholder="Error input with label"
          label="here we go!"
          state="error"
        />
      </div>
    )
  )
  .add("with addonBefore", () =>
    RenderInput(
      <div
        style={{
          width: 240,
        }}>
        <Input
          onChange={action("input changed")}
          placeholder="input with addonBefore"
          addonBefore={<Icon type="oInfo" />}
        />
      </div>
    )
  )
  .add("with addonAfter", () =>
    RenderInput(
      <div
        style={{
          width: 240,
        }}>
        <Input
          onChange={action("input changed")}
          placeholder="input with addonAfter"
          addonAfter={<Icon type="oInfo" />}
        />
      </div>
    )
  )
  .add("basic small", () =>
    RenderInput(
      <div
        style={{
          width: 240,
        }}>
        <Input
          inputSize="small"
          onChange={action("input changed")}
          placeholder="Small input"
        />
      </div>
    )
  )
  .add("basic large", () =>
    RenderInput(
      <div
        style={{
          width: 240,
        }}>
        <Input
          inputSize="large"
          onChange={action("input changed")}
          placeholder="Large input"
        />
      </div>
    )
  )
  .add("disabled input", () =>
    RenderInput(
      <div
        style={{
          width: 240,
        }}>
        <Input
          disabled
          onChange={action("input changed")}
          placeholder="disabled input"
        />
      </div>
    )
  )
  .add("search input", () =>
    RenderInput(
      <div
        style={{
          width: 240,
        }}>
        <Input
          onChange={action("input changed")}
          placeholder="Search field"
          type="search"
        />
      </div>
    )
  )
  .add("password input", () =>
    RenderInput(
      <div
        style={{
          width: 240,
        }}>
        <Input
          onChange={action("input changed")}
          placeholder="Password field"
          type="password"
        />
      </div>
    )
  )
  .add("number input", () =>
    RenderInput(
      <div
        style={{
          width: 240,
        }}>
        <Input
          onChange={action("input changed")}
          placeholder="Number field"
          type="number"
        />
      </div>
    )
  )
  .add("large number input", () =>
    RenderInput(
      <div
        style={{
          width: 240,
        }}>
        <Input
          onChange={action("input changed")}
          placeholder="Number field"
          type="number"
          inputSize="large"
        />
      </div>
    )
  )
  .add("textarea", () =>
    RenderInput(
      <div
        style={{
          width: 240,
        }}>
        <Input
          onChange={action("input changed")}
          placeholder="Textarea"
          type="textarea"
        />
      </div>
    )
  )
  .add("textarea disabled", () =>
    RenderInput(
      <div
        style={{
          width: 240,
        }}>
        <Input
          onChange={action("input changed")}
          placeholder="Textarea"
          type="textarea"
          disabled
        />
      </div>
    )
  )
  .add("textarea only horizontal resize", () =>
    RenderInput(
      <div
        style={{
          width: 240,
        }}>
        <Input
          onChange={action("input changed")}
          placeholder="Textarea"
          type="textarea"
          textareaResize="horizontal"
        />
      </div>
    )
  )
  .add("textarea only horizontal resize (more width)", () =>
    RenderInput(
      <div
        style={{
          width: 500,
        }}>
        <Input
          onChange={action("input changed")}
          placeholder="Textarea"
          type="textarea"
          textareaResize="horizontal"
        />
      </div>
    )
  )
  .add("textarea only vertical resize", () =>
    RenderInput(
      <div
        style={{
          width: 240,
        }}>
        <Input
          onChange={action("input changed")}
          placeholder="Textarea"
          type="textarea"
          textareaResize="vertical"
        />
      </div>
    )
  )
  .add("textarea no resize", () =>
    RenderInput(
      <div
        style={{
          width: 240,
        }}>
        <Input
          onChange={action("input changed")}
          placeholder="Textarea"
          type="textarea"
          textareaResize="none"
        />
      </div>
    )
  )
