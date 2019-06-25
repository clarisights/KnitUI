import React from "react"
import { storiesOf } from "@storybook/react"
import Button from "./"
import {
  withKnobs,
  text,
  boolean,
  select,
  object,
} from "@storybook/addon-knobs"
import { action } from "@storybook/addon-actions"
const Readme = require("./README.md")

const stories = storiesOf("Buttons", module)
stories.addDecorator(withKnobs)

const typeOptions = {
  Primary: "primary",
  Secondary: "secondary",
}

const sizeOptions = {
  Small: "small",
  Medium: "medium",
  Large: "large",
}

const colorThemeOptions = {
  Neutral: "neutral",
  Danger: "danger",
  Warning: "warning",
  Unsaved: "unsaved",
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
  .add("Simple primary with text", () => (
    <Button
      label={text("Label", "Button")}
      kind={select("Kind", typeOptions, "primary")}
      size={select("Size", sizeOptions, "medium")}
      colorTheme={select("Color theme", colorThemeOptions, "neutral")}
      ghost={boolean("Ghost", false)}
      disabled={boolean("Disabled", false)}
      bare={boolean("Bare", false)}
      onClick={action("button-click")}
    />
  ))
  .add("Simple secondary with text", () => (
    <Button
      label={text("Label", "Button")}
      kind={select("Kind", typeOptions, "secondary")}
      size={select("Size", sizeOptions, "medium")}
      colorTheme={select("Color theme", colorThemeOptions, "neutral")}
      ghost={boolean("Ghost", false)}
      disabled={boolean("Disabled", false)}
      bare={boolean("Bare", false)}
      onClick={action("button-click")}
    />
  ))
  .add("Ghost (inverted color scheme)", () => (
    <Button
      label={text("Label", "Button")}
      kind={select("Kind", typeOptions, "primary")}
      size={select("Size", sizeOptions, "medium")}
      colorTheme={select("Color theme", colorThemeOptions, "neutral")}
      ghost={boolean("Ghost", true)}
      disabled={boolean("Disabled", false)}
      bare={boolean("Bare", false)}
      onClick={action("button-click")}
    />
  ))
  .add("With an inset", () => (
    <Button
      label={text("Label", "Button")}
      kind={select("Kind", typeOptions, "primary")}
      size={select("Size", sizeOptions, "medium")}
      colorTheme={select("Color theme", colorThemeOptions, "neutral")}
      ghost={boolean("Ghost", false)}
      disabled={boolean("Disabled", false)}
      insetLabel={text("InsetLabel", "10")}
      onClick={action("button-click")}
    />
  ))
  .add("Icon", () => (
    <Button
      icon={text("Icon", "oInfo")}
      size={select("Size", sizeOptions, "medium")}
      colorTheme={select("Color theme", colorThemeOptions, "neutral")}
      disabled={boolean("Disabled", false)}
      bare={boolean("Bare", false)}
      onClick={action("button-click")}
    />
  ))
  .add("Icon with text", () => (
    <Button
      icon={text("Icon", "oInfo")}
      label={text("Label", "Button")}
      size={select("Size", sizeOptions, "medium")}
      colorTheme={select("Color theme", colorThemeOptions, "neutral")}
      disabled={boolean("Disabled", false)}
      bare={boolean("Bare", false)}
      onClick={action("button-click")}
    />
  ))
  .add("Icon with text and an inset", () => (
    <Button
      icon={text("Icon", "oInfo")}
      label={text("Label", "Button")}
      size={select("Size", sizeOptions, "medium")}
      colorTheme={select("Color theme", colorThemeOptions, "neutral")}
      disabled={boolean("Disabled", false)}
      bare={boolean("Bare", false)}
      insetLabel={text("InsetLabel", "10")}
      onClick={action("button-click")}
    />
  ))
  .add("With a custom color scheme", () => (
    <Button
      icon={text("Icon", "oInfo")}
      label={text("Label", "Button")}
      size={select("Size", sizeOptions, "medium")}
      disabled={boolean("Disabled", false)}
      bare={boolean("Bare", false)}
      onClick={action("button-click")}
      insetLabel={text("InsetLabel", "10")}
      colorTheme={object("Color theme", {
        background: "#9242f4",
        font: "#f4eb41",
        insetBackground: "#000000",
        insetFont: "#ffffff",
      })}
    />
  ))
  .add("With an href", () => (
    <Button
      icon={text("Icon", "oInfo")}
      label={text("Label", "Button")}
      size={select("Size", sizeOptions, "medium")}
      colorTheme={select("Color theme", colorThemeOptions, "neutral")}
      disabled={boolean("Disabled", false)}
      bare={boolean("Bare", false)}
      insetLabel={text("InsetLabel", "10")}
      href="/sample"
    />
  ))
