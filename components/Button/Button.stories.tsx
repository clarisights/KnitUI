import React from "react"
import { storiesOf } from "@storybook/react"
import { Button } from "./index"
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs'
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
  .add("primary medium", () =>
    <Button
      label={text('Label', 'Button')}
      type={select('Type', typeOptions, 'primary')}
      size={select('Size', sizeOptions, 'medium')}
      ghost={boolean('Ghost', false)}
      disabled={boolean('Disabled', false)}
      bare={boolean('Bare', false)}
    />)
  .add("secondary medium", () =>
    <Button
      label="Secondary"
      type="secondary"
    />)
  .add("primary medium with icon", () =>
    <Button
      label="Primary"
      type="primary"
      icon="Info"
    />)
  .add("primary medium ghost", () =>
    <Button
      label="Primary"
      type="primary"
      ghost
    />)
  .add("primary with inset", () =>
    <Button
      label="Primary"
      type="primary"
      insetLabel="10"
    />)
  .add("primary large", () =>
    <Button
      label="Primary"
      type="primary"
      size="large"
    />)
  .add("primary small", () =>
    <Button
      label="Primary"
      type="primary"
      size="small"
    />)
