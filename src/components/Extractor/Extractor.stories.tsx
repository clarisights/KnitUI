import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, text, number, object } from "@storybook/addon-knobs"
import Expression from "./index"

const stories = storiesOf("Extractor", module)
stories.addDecorator(withKnobs)

const onChangeFn = editorState => console.log(editorState.buildExpression())

stories
  .addParameters({
    readme: {
      // Show readme before story
      codeTheme: "shades-of-purple",
      // Show readme at the addons panel
    },
  })
  .add("Basic", () => <Expression onChangeFn={onChangeFn} />)
