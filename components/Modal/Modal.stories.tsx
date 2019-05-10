import React from "react"
import { storiesOf } from "@storybook/react"
import { Modal, RightPanelModal } from "./index"
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
  .add("with default layout", () => (
    <Modal
      title="Title"
      body={<div>Body</div>}
      footer={<div>Footer</div>}
    />
  ))
  .add("with right panel", () => (
    <RightPanelModal
      title="Title"
      body={<div>Body</div>}
      footer={<div>Footer</div>}
    />
  ))
