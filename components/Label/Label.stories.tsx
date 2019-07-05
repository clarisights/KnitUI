import React from "react"
import { storiesOf } from "@storybook/react"
import Label from "./"
import {
  withKnobs,
  text,
  boolean,
  select,
  object,
} from "@storybook/addon-knobs"
const Readme = require("./README.md")

const stories = storiesOf("Labels", module)
stories.addDecorator(withKnobs)

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
  .add("Simple label with text", () => (
    <Label
      text={text("text", "Label")}
      expanded={boolean("Expanded", false)}
      size={select("Size", sizeOptions, "medium")}
      colorPreset={select("Color preset", colorThemeOptions, "neutral")}
      rounded={boolean("Rounded", false)}
      outlined={boolean("Outlined", false)}
      focus={boolean("Focus", false)}
    />
  ))
  .add("Rounded", () => (
    <Label
      text={text("text", "Label")}
      expanded={boolean("Expanded", false)}
      size={select("Size", sizeOptions, "medium")}
      colorPreset={select("Color preset", colorThemeOptions, "neutral")}
      rounded={boolean("Rounded", true)}
      outlined={boolean("Outlined", false)}
      focus={boolean("Focus", false)}
    />
  ))
  .add("With an outline", () => (
    <Label
      text={text("text", "Label")}
      expanded={boolean("Expanded", false)}
      size={select("Size", sizeOptions, "medium")}
      colorPreset={select("Color preset", colorThemeOptions, "neutral")}
      rounded={boolean("Rounded", true)}
      outlined={boolean("Outlined", true)}
      focus={boolean("Focus", false)}
    />
  ))
  .add("With left icon", () => (
    <Label
      text={text("text", "Label")}
      expanded={boolean("Expanded", false)}
      size={select("Size", sizeOptions, "medium")}
      colorPreset={select("Color preset", colorThemeOptions, "neutral")}
      rounded={boolean("Rounded", false)}
      outlined={boolean("Outlined", false)}
      focus={boolean("Focus", false)}
      icons={{ left: "oDragIndicator" }}
    />
  ))
  .add("With right icon", () => (
    <Label
      text={text("text", "Label")}
      expanded={boolean("Expanded", false)}
      size={select("Size", sizeOptions, "medium")}
      colorPreset={select("Color preset", colorThemeOptions, "neutral")}
      rounded={boolean("Rounded", false)}
      outlined={boolean("Outlined", false)}
      focus={boolean("Focus", false)}
      icons={{ right: "oClose" }}
    />
  ))
  .add("With a left and a right icons", () => (
    <Label
      text={text("text", "Label")}
      expanded={boolean("Expanded", false)}
      size={select("Size", sizeOptions, "medium")}
      colorPreset={select("Color theme", colorThemeOptions, "neutral")}
      rounded={boolean("Rounded", false)}
      outlined={boolean("Outlined", false)}
      focus={boolean("Focus", false)}
      icons={{ left: "oDragIndicator", right: "oClose" }}
    />
  ))
  .add("With custom style", () => (
    <Label
      text={text("text", "Label")}
      expanded={boolean("Expanded", false)}
      size={select("Size", sizeOptions, "medium")}
      colorPreset={select("Color preset", colorThemeOptions, "neutral")}
      rounded={boolean("Rounded", false)}
      outlined={boolean("Outlined", false)}
      focus={boolean("Focus", false)}
      style={object("Style", { backgroundColor: "red" })}
    />
  ))
  .add("Inline", () => (
    <Label.Inline
      text={text("text", "inline label")}
      expanded={boolean("Expanded", false)}
      colorPreset={select("Color preset", colorThemeOptions, "neutral")}
    />
  ))
  .add("Inline with custom style", () => (
    <Label.Inline
      text={text("text", "inline label")}
      expanded={boolean("Expanded", false)}
      colorPreset={select("Color preset", colorThemeOptions, "neutral")}
      style={object("Style", { backgroundColor: "red" })}
    />
  ))
