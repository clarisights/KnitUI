import React from "react"
import { storiesOf } from "@storybook/react"
import { Button } from "../../components"
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
  .add("with text", () => <Button name="test" />)
  .add("with some emoji", () => <Button name="😀 😎 👍 💯" />)
