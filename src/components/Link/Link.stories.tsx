import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs } from "@storybook/addon-knobs"
import Link from "./"

const stories = storiesOf("Link", module)
stories.addDecorator(withKnobs)

stories
  .addParameters({
    readme: {
      // Show readme before story
      codeTheme: "shades-of-purple",
      // Show readme at the addons panel
    },
  })
  .add("Basic", () => (
    <Link href="https://github.com/clarisights/KnitUI">KnitUI</Link>
  ))
  .add("Without underline", () => (
    <Link underline={false} href="https://github.com/clarisights/KnitUI">
      KnitUI
    </Link>
  ))
  .add("With newTab", () => (
    <Link underline newTab href="https://github.com/clarisights/KnitUI">
      KnitUI
    </Link>
  ))
  .add("With disabled and className", () => (
    <Link
      underline
      disabled
      newTab
      className="knit-link"
      href="https://github.com/clarisights/KnitUI">
      KnitUI
    </Link>
  ))
