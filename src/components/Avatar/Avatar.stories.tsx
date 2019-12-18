import React from "react"
import { storiesOf } from "@storybook/react"
import Avatar from "./"
import {
  withKnobs,
  text,
  boolean,
  optionsKnob as options,
} from "@storybook/addon-knobs"
import { action } from "@storybook/addon-actions"
const Readme = require("./README.md")

const stories = storiesOf("Avatar", module)
stories.addDecorator(withKnobs)

const defaultProps = {
  size: text("Size", "24px"),
  disabled: boolean("Disabled", false),
  onClick: action("button-click"),
}

const additionalProps = {
  picture: text("Picture", "https://i.ibb.co/DwVLSqF/user-profile.jpg"),
  name: text("Name", "Jane Doe"),
}

stories
  .addParameters({
    readme: {
      // Show readme before story
      codeTheme: "shades-of-purple",
      // Show readme at the addons panel
      sidebar: Readme,
    },
  })
  .add("Picture avatar", () => (
    <Avatar
      {...defaultProps}
      picture={additionalProps.picture}
      name={additionalProps.name}
    />
  ))
  .add("Name avatar", () => (
    <Avatar {...defaultProps} name={additionalProps.name} />
  ))
  .add("Unknown user avatar", () => <Avatar {...defaultProps} />)
  .add("Different size picture avatar", () => (
    <Avatar {...defaultProps} size="100px" {...additionalProps} />
  ))
  .add("Different size name avatar", () => (
    <Avatar {...defaultProps} size="100px" name={additionalProps.name} />
  ))
  .add("Different size icon avatar", () => (
    <Avatar {...defaultProps} size="100px" />
  ))
  .add("Disabled picture avatar", () => (
    <Avatar {...defaultProps} disabled {...additionalProps} />
  ))
  .add("Disabled name avatar", () => (
    <Avatar {...defaultProps} disabled name={additionalProps.name} />
  ))
  .add("Disabled icon avatar", () => <Avatar {...defaultProps} disabled />)
