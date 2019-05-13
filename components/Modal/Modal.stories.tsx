import React from "react"
import { storiesOf } from "@storybook/react"
import { Modal, RightPanelModal, LeftPanelModal, BottomPanelModal } from "./index"
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
      header={{title: "Title"}}
      body={<div>Body</div>}
      footer={<div>Footer</div>}
    />
  ))
  .add("with a right section in header", () => (
    <Modal
      header={{
        title: "Title",
        rightSection:
          <div>
            <div>The right section</div>
          </div>
        }}
      body={<div>Body</div>}
      footer={<div>Footer</div>}
    />
  ))
  .add("with right panel", () => (
    <RightPanelModal
      header={{title: "Right panel modal"}}
      body={<div>Body</div>}
      footer={<div>Footer</div>}
    />
  ))
  .add("with left panel", () => (
    <LeftPanelModal
      header={{title: "Left panel modal"}}
      body={<div>Body</div>}
      footer={<div>Footer</div>}
    />
  ))
  .add("with bottom panel", () => (
    <BottomPanelModal
      header={{title: "Bottom panel modal"}}
      body={<div>Body</div>}
      footer={<div>Footer</div>}
    />
  ))
