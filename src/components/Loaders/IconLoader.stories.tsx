import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, select } from "@storybook/addon-knobs"
import IconLoader from "./index"
const Readme = require("./README.md")

storiesOf("Loaders", module)
  .addDecorator(withKnobs)
  .addParameters({
    readme: {
      // Show readme at the addons panel
      sidebar: Readme,
    },
  })
  .add("icon loader", () => (
    <div
      style={{
        width: 40,
      }}>
      <IconLoader size="1.8rem" />
    </div>
  ))
