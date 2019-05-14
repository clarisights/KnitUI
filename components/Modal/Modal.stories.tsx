import React from "react"
import { storiesOf } from "@storybook/react"
import { Modal, RightPanelModal, LeftPanelModal, BottomPanelModal } from "./index"
import { withKnobs, text, boolean, select, object } from '@storybook/addon-knobs'

const Readme = require("./README.md")

const stories = storiesOf('Modal', module)
stories.addDecorator(withKnobs)

const sizeOptions = ["small", "medium", "large", "x-large"]

stories
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
      size={select('Size', sizeOptions, "medium")}
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
      size={select('Size', sizeOptions, "medium")}
    />
  ))
  .add("with right panel", () => (
    <RightPanelModal
      header={{title: "Right panel modal"}}
      body={<div>Body</div>}
      footer={<div>Footer</div>}
      panelContent={<div>Pannel content</div>}
      size={select('Size', sizeOptions, "medium")}
    />
  ))
  .add("with left panel", () => (
    <LeftPanelModal
      header={{title: "Left panel content"}}
      body={<div>Body</div>}
      footer={<div>Footer</div>}
      panelContent={<div>Panel content</div>}
      size={select('Size', sizeOptions, "medium")}
    />
  ))
  .add("with bottom panel", () => (
    <BottomPanelModal
      header={{title: "Bottom panel modal"}}
      body={<div>Body</div>}
      footer={<div>Footer</div>}
      panelContent={<div>Panel content</div>}
      size={select('Size', sizeOptions, "medium")}
    />
  ))
  .add("with overflowing content", () => (
    <Modal
      header={{title: "Right panel modal"}}
      body={<div style={{height: "1000px"}}>Body</div>}
      footer={<div>Footer</div>}
      size={select('Size', sizeOptions, "medium")}
    />
  ))
