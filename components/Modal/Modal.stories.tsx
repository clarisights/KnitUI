import React from "react"
import { storiesOf } from "@storybook/react"
import { Modal } from "./index"
const Readme = require("./README.md")

storiesOf("Modal", module)
  .addParameters({
    readme: {
      // Show readme before story
      codeTheme: "shades-of-purple",
      // Show readme at the addons panel
      sidebar: Readme,
    },
  })
  .add("simple modal", () => (
    <Modal
      title="Title"
      body={<div>Body</div>}
      footer={<div>Footer</div>}
    />
  ))
