import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs } from "@storybook/addon-knobs"
import Extractor from "../"
import { functions, staticValues } from "../helpers"

// functions for the extractor
const options = [...functions, ...staticValues]

const stories = storiesOf("Extractor", module)
stories.addDecorator(withKnobs)

const onChangeFn = editorState =>
  console.log(editorState.buildExpression(), editorState)

stories
  .addParameters({
    readme: {
      // Show readme before story
      codeTheme: "shades-of-purple",
      // Show readme at the addons panel
    },
  })
  .add("Basic", () => <Extractor options={options} onChangeFn={onChangeFn} />)
