import React from "react"
import { storiesOf } from "@storybook/react"
import Icon from "./index"
import * as Icons from "./Icons"
import { withKnobs, select } from "@storybook/addon-knobs"

const stories = storiesOf("Icons", module)
stories.addDecorator(withKnobs)

const sizes = ["16px", "18px", "24px"]
const colors = ["#000000", "#990000", "#036600"]
const allIcons = Object.entries(Icons)

stories
  .add("Icon", () => {
    const size = select("Size", sizes, "18px")
    const color = select("Color", colors, "#000000")
    return <Icon type="oAddCircle" size={size} fill={color} />
  })
  .add("All icons", () => {
    const size = select("Size", sizes, "18px")
    const color = select("Color", colors, "#000000")
    const props = { width: size, height: size, fill: color }
    const allIconsDOM = allIcons.map(([iconKey, icon], index) => (
      <div
        key={index}
        title={iconKey}
        style={{ padding: 10, margin: 10 }}
        role="icon-wrapper">
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
