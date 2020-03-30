import React from "react"
import { storiesOf } from "@storybook/react"
import Button from "./"
import {
  withKnobs,
  text,
  boolean,
  select,
  object,
  optionsKnob as options,
} from "@storybook/addon-knobs"
import { action } from "@storybook/addon-actions"
const Readme = require("./README.md")

const stories = storiesOf("Buttons", module)
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
  Success: "success",
  Regular: "regular",
}

const defaultProps = {
  label: text("Label", "Button"),
  size: select("Size", sizeOptions, "medium"),
  ghost: boolean("Ghost", false),
  disabled: boolean("Disabled", false),
  bare: boolean("Bare", false),
  onClick: action("button-click"),
  colorPreset: select("Color preset", colorThemeOptions, "neutral"),
}

const additionalProps = {
  icon: text("Icon", "oInfo"),
  insetLabel: text("InsetLabel", "10"),
  customColor: text("Custom Color", "#9242f4"),
  insetCustomColor: text("Inset Custom Color", "#000000"),
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
  .add("Simple with text", () => <Button {...defaultProps} />)
  .add("Regular with left inset", () => (
    <Button
      {...defaultProps}
      colorPreset="regular"
      insetPosition="left"
      insetLabel={additionalProps.insetLabel}
    />
  ))
  .add("Regular with left inset and fluid width", () => (
    <Button
      {...defaultProps}
      colorPreset="regular"
      insetPosition="left"
      insetLabel={additionalProps.insetLabel}
      size="fluid"
    />
  ))
  .add("With a non-default color preset", () => (
    <Button
      {...defaultProps}
      colorPreset={select("Color preset", colorThemeOptions, "danger")}
    />
  ))
  .add("Ghost (inverted color scheme)", () => (
    <Button {...defaultProps} ghost={boolean("Ghost", true)} />
  ))
  .add("With an inset", () => (
    <Button {...defaultProps} insetLabel={additionalProps.insetLabel} />
  ))
  .add("Icon", () => (
    <Button {...defaultProps} label={undefined} icon={additionalProps.icon} />
  ))
  .add("Icon with text", () => (
    <Button {...defaultProps} icon={additionalProps.icon} />
  ))
  .add("Icon with text and an inset", () => (
    <Button
      {...defaultProps}
      icon={additionalProps.icon}
      insetLabel={additionalProps.insetLabel}
    />
  ))
  .add("With a custom color scheme", () => (
    <Button
      {...defaultProps}
      icon={additionalProps.icon}
      insetLabel={additionalProps.insetLabel}
      customColor={additionalProps.customColor}
      insetCustomColor={additionalProps.insetCustomColor}
    />
  ))
  .add("With a custom color object scheme", () => (
    <Button
      {...defaultProps}
      customColor={object("Custom Color", {
        color: "#939323",
        secondaryColor: "#800204",
      })}
    />
  ))
  .add("With an href", () => <Button {...defaultProps} href="/sample" />)
  .add("With custom style object", () => (
    <Button
      {...defaultProps}
      style={object("Style", { backgroundColor: "red" })}
    />
  ))
  .add("With custom style string", () => (
    <Button {...defaultProps} css="background-color: red;" />
  ))
  .add("With custom style object and style string", () => (
    <Button
      {...defaultProps}
      style={object("Style", { backgroundColor: "red" })}
      css="background-color: grey;"
    />
  ))
  .add("Button Group", () => {
    // props which should be same for all Buttons in ButtonGroup
    const size = options("size", sizeOptions, "medium", {
      display: "inline-radio",
    })
    const colorPreset = options("colorPreset", colorThemeOptions, "neutral", {
      display: "inline-radio",
    })
    const ghost = boolean("ghost", false)
    const disabled = boolean("disabled", false)
    const bare = boolean("bare", false)

    return (
      <Button.Group>
        <Button
          label={text("Label 1", "")}
          size={size}
          colorPreset={colorPreset}
          ghost={ghost}
          disabled={disabled}
          bare={bare}
          onClick={action("button-click 1")}
          icon={text("Icon 1", "oInfo")}
        />
        <Button
          label={text("Label 2", "Dropdown")}
          size={size}
          colorPreset={colorPreset}
          ghost={ghost}
          disabled={disabled}
          bare={bare}
          onClick={action("button-click 2")}
          icon={text("Icon 2", "")}
        />
        <Button
          label={text("Label 3", "")}
          size={size}
          colorPreset={colorPreset}
          ghost={ghost}
          disabled={disabled}
          bare={bare}
          onClick={action("button-click 3")}
          icon={text("Icon 3", "oExpandMore")}
        />
      </Button.Group>
    )
  })
  .add("Button Group Custom Style & Classname", () => {
    const defaultStyle = {
      border: "1px solid red",
      borderRadius: "4px",
    }
    const style = object("style", defaultStyle)
    const className = text("text", "HelloGroup")

    // props which should be same for all Buttons in ButtonGroup
    const size = options("size", sizeOptions, "medium", {
      display: "inline-radio",
    })
    const colorPreset = options("colorPreset", colorThemeOptions, "neutral", {
      display: "inline-radio",
    })
    const ghost = boolean("ghost", false)
    const disabled = boolean("disabled", false)
    const bare = boolean("bare", false)
    return (
      <Button.Group style={style} className={className}>
        <Button
          label={text("Label 2", "Dropdown")}
          size={size}
          colorPreset={colorPreset}
          ghost={ghost}
          disabled={disabled}
          bare={bare}
          onClick={action("button-click 2")}
          icon={text("Icon 2", "")}
        />
        <Button
          label={text("Label 3", "")}
          size={size}
          colorPreset={colorPreset}
          ghost={ghost}
          disabled={disabled}
          bare={bare}
          onClick={action("button-click 3")}
          icon={text("Icon 3", "oExpandMore")}
        />
      </Button.Group>
    )
  })
  .add("Button Group Custom Style & Classname", () => {
    const defaultStyle = {
      border: "1px solid red",
      borderRadius: "4px",
    }
    const style = object("style", defaultStyle)
    const className = text("text", "HelloGroup")

    // props which should be same for all Buttons in ButtonGroup
    const size = options("size", sizeOptions, "medium", {
      display: "inline-radio",
    })
    const colorPreset = options("colorPreset", colorThemeOptions, "neutral", {
      display: "inline-radio",
    })
    const ghost = boolean("ghost", false)
    const disabled = boolean("disabled", false)
    const bare = boolean("bare", false)
    return (
      <Button.Group style={style} className={className}>
        <Button
          label={text("Label 2", "Dropdown")}
          size={size}
          colorPreset={colorPreset}
          ghost={ghost}
          disabled={disabled}
          bare={bare}
          onClick={action("button-click 2")}
          icon={text("Icon 2", "")}
        />
        <Button
          label={text("Label 3", "")}
          size={size}
          colorPreset={colorPreset}
          ghost={ghost}
          disabled={disabled}
          bare={bare}
          onClick={action("button-click 3")}
          icon={text("Icon 3", "oExpandMore")}
        />
      </Button.Group>
    )
  })
