import React from "react"
import { storiesOf } from "@storybook/react"
import { Button } from "./index"
const Readme = require("./README.md")

storiesOf("Button", module)
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
      label="Primary"
      type="primary"
    />)
  .add("secondary medium", () =>
    <Button
      label="Secondary"
      type="secondary"
    />)
  .add("primary medium ghost", () =>
    <Button
      label="Primary"
      type="primary"
      ghost
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
