import React from "react"
import { storiesOf } from "@storybook/react"
import Input from "./index"
import Icon from "../Icon"
import { action } from "@storybook/addon-actions"
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
        label={(
          <div css={`
            display: flex;
            align-items: center;
          `}>
            <span>Label</span>
            <Icon type="oInfo" />
          </div>
        )}
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
        placeholder="input with label"
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
        notification={(
          <div css={`
            display: flex;
            align-items: center;
          `}>
            <span>Notification</span>
            <Icon type="oInfo" />
          </div>
        )}
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
        placeholder="input with label"
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
        placeholder="input with label"
        success
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
        placeholder="input with label"
        label="here we go!"
        error
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
        placeholder="basic usage"
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
        placeholder="basic usage"
      />
    </div>
  ))
