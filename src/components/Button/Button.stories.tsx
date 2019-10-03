import React from "react"
import { storiesOf } from "@storybook/react"
import { Button, ButtonGroup } from "./"
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
      type={select("Type", typeOptions, "primary")}
      size={select("Size", sizeOptions, "medium")}
      colorPreset={select("Color preset", colorThemeOptions, "neutral")}
      ghost={boolean("Ghost", false)}
      disabled={boolean("Disabled", false)}
      bare={boolean("Bare", false)}
      onClick={action("button-click")}
    />
  ))
  .add("With a non-default color preset", () => (
    <Button
      label={text("Label", "Button")}
      type={select("Type", typeOptions, "primary")}
      size={select("Size", sizeOptions, "medium")}
      colorPreset={select("Color preset", colorThemeOptions, "danger")}
      ghost={boolean("Ghost", false)}
      disabled={boolean("Disabled", false)}
      bare={boolean("Bare", false)}
      onClick={action("button-click")}
    />
  ))
  .add("Simple secondary with text", () => (
    <Button
      label={text("Label", "Button")}
      type={select("Type", typeOptions, "secondary")}
      size={select("Size", sizeOptions, "medium")}
      colorPreset={select("Color preset", colorThemeOptions, "neutral")}
      ghost={boolean("Ghost", false)}
      disabled={boolean("Disabled", false)}
      bare={boolean("Bare", false)}
      onClick={action("button-click")}
    />
  ))
  .add("Ghost (inverted color scheme)", () => (
    <Button
      label={text("Label", "Button")}
      type={select("Type", typeOptions, "primary")}
      size={select("Size", sizeOptions, "medium")}
      colorPreset={select("Color preset", colorThemeOptions, "neutral")}
      ghost={boolean("Ghost", true)}
      disabled={boolean("Disabled", false)}
      bare={boolean("Bare", false)}
      onClick={action("button-click")}
    />
  ))
  .add("With an inset", () => (
    <Button
      label={text("Label", "Button")}
      type={select("Type", typeOptions, "primary")}
      size={select("Size", sizeOptions, "medium")}
      colorPreset={select("Color preset", colorThemeOptions, "neutral")}
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
      colorPreset={select("Color preset", colorThemeOptions, "neutral")}
      ghost={boolean("Ghost", false)}
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
      colorPreset={select("Color preset", colorThemeOptions, "neutral")}
      ghost={boolean("Ghost", false)}
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
      colorPreset={select("Color preset", colorThemeOptions, "neutral")}
      ghost={boolean("Ghost", false)}
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
      customColor={text("Custom Color", "#9242f4")}
      insetCustomColor={text("Custom Color", "#000000")}
      ghost={boolean("Ghost", false)}
    />
  ))
  .add("With a custom color object scheme", () => (
    <Button
      icon={text("Icon", "oInfo")}
      label={text("Label", "Button")}
      size={select("Size", sizeOptions, "medium")}
      disabled={boolean("Disabled", false)}
      bare={boolean("Bare", false)}
      onClick={action("button-click")}
      insetLabel={text("InsetLabel", "10")}
      customColor={object("Custom Color", {
        color: "#939323",
        secondaryColor: "#800204",
      })}
      insetCustomColor={text("Custom Color", "#000000")}
      ghost={boolean("Ghost", false)}
    />
  ))
  .add("With an href", () => (
    <Button
      icon={text("Icon", "oInfo")}
      label={text("Label", "Button")}
      size={select("Size", sizeOptions, "medium")}
      colorPreset={select("Color preset", colorThemeOptions, "neutral")}
      ghost={boolean("Ghost", false)}
      disabled={boolean("Disabled", false)}
      bare={boolean("Bare", false)}
      insetLabel={text("InsetLabel", "10")}
      href="/sample"
    />
  ))
  .add("With custom styles", () => (
    <Button
      label={text("Label", "Button")}
      size={select("Size", sizeOptions, "medium")}
      colorPreset={select("Color preset", colorThemeOptions, "neutral")}
      ghost={boolean("Ghost", false)}
      disabled={boolean("Disabled", false)}
      bare={boolean("Bare", false)}
      style={object("Style", { backgroundColor: "red" })}
    />
  ))
  .add("Button Group", () => {
    return (
      <ButtonGroup>
        <Button icon="oInfo" />
        <Button label="Dropdown" />
        <Button icon="oExpandMore" />
      </ButtonGroup>
    )
  })
