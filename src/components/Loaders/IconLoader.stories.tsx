import React from "react"
import { storiesOf } from "@storybook/react"
import IconLoader from "./index"
const Readme = require("./README.md")

storiesOf("Loaders", module)
  .addParameters({
    readme: {
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
  .add("icon loader, with custom color & strokeWidth", () => (
    <div
      style={{
        width: 40,
      }}>
      <IconLoader size="2.8rem" strokeWidth={2} fill="#036600" />
    </div>
  ))
