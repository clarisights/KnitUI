import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"

import Input from "."
import Icon from "../Icon"

const Readme = require("./README.md")

storiesOf("Input", module)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })
  .add("basic", () => (
    <div
      style={{
        width: 240,
      }}>
      <Input onChange={action("input changed")} placeholder="basic usage" />
    </div>
  ))
  .add("with label", () => (
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
  ))
  .add("with a custom label", () => (
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
  ))
  .add("with notification", () => (
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
  ))
  .add("with a custom notification", () => (
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
  ))
  .add("with notification and label", () => (
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
  ))
  .add("with success", () => (
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
  ))
  .add("with warning", () => (
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
  ))
  .add("with error", () => (
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
  ))
  .add("with success, label and notification", () => (
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
  ))
  .add("with label and error", () => (
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
  ))
  .add("with addonBefore", () => (
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
  ))
  .add("with addonAfter", () => (
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
  ))
  .add("basic small", () => (
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
  ))
  .add("basic large", () => (
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
  ))
  .add("disabled input", () => (
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
  ))
  .add("search input", () => (
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
  ))
  .add("password input", () => (
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
  ))
  .add("number input", () => (
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
  ))
  .add("large number input", () => (
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
  ))
  .add("textarea", () => (
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
  ))
  .add("textarea disabled", () => (
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
  ))
  .add("textarea only horizontal resize", () => (
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
  ))
  .add("textarea only horizontal resize (more width)", () => (
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
  ))
  .add("textarea only vertical resize", () => (
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
  ))
  .add("textarea no resize", () => (
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
  ))
