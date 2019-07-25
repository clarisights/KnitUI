import React from "react"
import { storiesOf } from "@storybook/react"
import {
  withKnobs,
  text,
  select,
  boolean,
  number,
  object,
} from "@storybook/addon-knobs"
import Alert from "./Alert"
const Readme = require("./Alert.README.md")

const stories = storiesOf("Alert", module)
stories.addDecorator(withKnobs)
stories.addDecorator(story => (
  <div style={{ width: "100vw", height: "90vh" }}>{story()}</div>
))

const alertOptions = ["standard", "success", "warning", "error"]

const alertActions = [
  {
    text: "Action 1",
    callback: () => alert("action 1"),
  },
  {
    text: "Action 2",
    callback: () => alert("action 2"),
  },
]

stories
  .addParameters({
    readme: {
      // Show readme before story
      codeTheme: "shades-of-purple",
      // Show readme at the addons panel
      sidebar: Readme,
    },
  })
  .add("Basic", () => (
    <Alert
      type={select("Type", alertOptions, "standard")}
      content={text("content", "Hey there!")}
      autoDismiss={boolean("Auto Dismiss", "true")}
      dismissDuration={number("Dismiss Duration", 2000)}
    />
  ))
  .add("Basic with manual dismiss", () => (
    <Alert
      type={select("Type", alertOptions, "error")}
      content={text("content", "Hey there!")}
      placement={text("Placement", "bottomRight")}
    />
  ))
  .add("Basic with default icon", () => (
    <Alert
      showIcon={boolean("Show Icon", "true")}
      type={select("Type", alertOptions, "warning")}
      content="Hey there!"
      placement={text("Placement", "topLeft")}
    />
  ))
  .add("Basic with custom icon", () => (
    <Alert
      showIcon={boolean("Show Icon", "true")}
      type={select("Type", alertOptions, "standard")}
      icon={text("Custom Image", "oZoomOut")}
      content="Hey there!"
      placement={text("Placement", "topRight")}
    />
  ))
  .add("Basic with heading and multiLine", () => (
    <Alert
      type={select("Type", alertOptions, "standard")}
      multiLine={boolean("Multiline Alert", "true")}
      showIcon
      heading={text("Heading", "Heading 1")}
      content={text("content", "Hey there!")}
    />
  ))
  .add("Basic with picture", () => (
    <Alert
      image="https://clarisights-users.s3.eu-central-1.amazonaws.com/production/users/profile_picture_561/1540893983_clarisights.png"
      content="Hey there!"
    />
  ))
  .add("Multiline with picture", () => (
    <Alert
      image="https://clarisights-users.s3.eu-central-1.amazonaws.com/production/users/profile_picture_561/1540893983_clarisights.png"
      type={select("Type", alertOptions, "standard")}
      multiLine={boolean("Multiline Alert", "true")}
      showIcon
      heading={text("Heading", "Heading 1")}
      content={text("content", "Hey there!")}
    />
  ))
  .add("Basic with actions", () => (
    <Alert actions={alertActions} content={text("content", "Hey there!")} />
  ))
  .add("Multiline with picture and actions", () => (
    <Alert
      image="https://clarisights-users.s3.eu-central-1.amazonaws.com/production/users/profile_picture_561/1540893983_clarisights.png"
      actions={alertActions}
      type={select("Type", alertOptions, "standard")}
      multiLine={boolean("Multiline Alert", true)}
      showIcon
      heading={text("Heading", "Heading 1")}
      content={text("content", "Hey there!")}
    />
  ))
  .add("Basic with large size", () => (
    <Alert
      actions={alertActions}
      content={text("content", "Hey there!")}
      size={text("size", "large")}
    />
  ))
