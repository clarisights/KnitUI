import React from "react"
import { storiesOf } from "@storybook/react"
import Label from "./Label"
import { withKnobs, text, boolean, select, object } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
const Readme = require("./README.md")

const stories = storiesOf('Labels', module)
stories.addDecorator(withKnobs)

const typeOptions = {
  'Compact': 'compact',
  'Expanded': 'expanded'
}

const sizeOptions = {
  'Small': 'small',
  'Medium': 'medium',
  'Large': 'large'
}

const colorThemeOptions = {
  'Neutral': 'neutral',
  "Danger": "danger",
  "Warning": "warning",
  "Unsaved": "unsaved"
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
  .add("Simple label with text", () =>
    <Label
      text={text('text', 'Label')}
      type={select('Type', typeOptions, 'primary')}
      size={select('Size', sizeOptions, 'medium')}
      colorTheme={select('Color theme', colorThemeOptions, "neutral")}
      rounded={boolean('Rounded', false)}
      outlined={boolean('Outlined', false)}
      focus={boolean('Focus', false)}
    />)
  .add("Rounded", () =>
    <Label
      text={text('text', 'Label')}
      type={select('Type', typeOptions, 'primary')}
      size={select('Size', sizeOptions, 'medium')}
      colorTheme={select('Color theme', colorThemeOptions, "neutral")}
      rounded={boolean('Rounded', true)}
      outlined={boolean('Outlined', false)}
      focus={boolean('Focus', false)}
    />)
