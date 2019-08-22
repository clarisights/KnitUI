import React from "react"
import { storiesOf } from "@storybook/react"
import Icon from "./index"
import * as Icons from "./Icons"
import { withKnobs, select } from "@storybook/addon-knobs"

const stories = storiesOf("Icons", module)
stories.addDecorator(withKnobs)

const sizes = ["16px", "18px", "24px"]
const allIcons = Object.values(Icons)

stories
  .add("Basic Icon", () => <Icon type="oAddCircle" />)
  .add("Icon with color", () => <Icon type="oAddCircle" fill="red" />)
  .add("All icons", () => {
    const size = select("Size", sizes, "18px")
    const props = { width: size, height: size }
    const allIconsDOM = allIcons.map((icon, index) => (
      <div key={index} style={{ margin: 20 }} role="icon-wrapper">
        {icon(props)}
      </div>
    ))
    return (
      <div
        style={{
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
        }}>
        {allIconsDOM}
      </div>
    )
  })
