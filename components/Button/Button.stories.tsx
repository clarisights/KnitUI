import React from "react"
import { storiesOf } from "@storybook/react"
import { Button } from "./index"
import { withKnobs, text, boolean, select, object } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
const Readme = require("./README.md")

const stories = storiesOf('Buttons', module)
stories.addDecorator(withKnobs)

const typeOptions = {
  'Primary': 'primary',
  'Secondary': 'secondary'
}

const sizeOptions = {
  'Small': 'small',
  'Medium': 'medium',
  'Large': 'large'
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
  .add("Simple primary with text", () =>
    <Button
      label={text('Label', 'Button')}
      type={select('Type', typeOptions, 'primary')}
      size={select('Size', sizeOptions, 'medium')}
      ghost={boolean('Ghost', false)}
      disabled={boolean('Disabled', false)}
      bare={boolean('Bare', false)}
      onClick={action('button-click')}
    />)
  .add("Simple secondary with text", () =>
    <Button
      label={text('Label', 'Button')}
      type={select('Type', typeOptions, 'primary')}
      size={select('Size', sizeOptions, 'medium')}
      ghost={boolean('Ghost', false)}
      disabled={boolean('Disabled', false)}
      bare={boolean('Bare', false)}
      onClick={action('button-click')}
    />)
  .add("Ghost (inverted color scheme)", () =>
    <Button
      label={text('Label', 'Button')}
      type={select('Type', typeOptions, 'primary')}
      size={select('Size', sizeOptions, 'medium')}
      ghost={boolean('Ghost', true)}
      disabled={boolean('Disabled', false)}
      bare={boolean('Bare', false)}
      onClick={action('button-click')}
    />)
  .add("With an inset", () =>
    <Button
      label={text('Label', 'Button')}
      type={select('Type', typeOptions, 'primary')}
      size={select('Size', sizeOptions, 'medium')}
      ghost={boolean('Ghost', false)}
      disabled={boolean('Disabled', false)}
      insetLabel={text('InsetLabel', '10')}
      onClick={action('button-click')}
    />)
  .add("Icon", () =>
    <Button
      icon={text('Icon', 'Info')}
      size={select('Size', sizeOptions, 'medium')}
      disabled={boolean('Disabled', false)}
      bare={boolean('Bare', false)}
      onClick={action('button-click')}
    />)
  .add("Icon with text", () =>
    <Button
      icon={text('Icon', 'Info')}
      label={text('Label', 'Button')}
      size={select('Size', sizeOptions, 'medium')}
      disabled={boolean('Disabled', false)}
      bare={boolean('Bare', false)}
      onClick={action('button-click')}
    />)
  .add("Icon with text and an inset", () =>
    <Button
      icon={text('Icon', 'Info')}
      label={text('Label', 'Button')}
      size={select('Size', sizeOptions, 'medium')}
      disabled={boolean('Disabled', false)}
      bare={boolean('Bare', false)}
      insetLabel={text('InsetLabel', '10')}
      onClick={action('button-click')}
    />)
    .add("With a custom color scheme", () =>
    <Button
      icon={text('Icon', 'Info')}
      label={text('Label', 'Button')}
      size={select('Size', sizeOptions, 'medium')}
      disabled={boolean('Disabled', false)}
      bare={boolean('Bare', false)}
      onClick={action('button-click')}
      colorTheme={object("Color theme", {background: "#9242f4", font: "#f4eb41"})}
    />)
