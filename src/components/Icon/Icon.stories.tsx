import React from "react"
import { storiesOf } from "@storybook/react"
import Icon from "./index"
import * as Icons from "./Icons"

const allIcons = Object.values(Icons)

storiesOf("Icon", module)
  .add("Basic Icon", () => <Icon type="oAddCircle" />)
  .add("Icon with color", () => <Icon type="oAddCircle" fill="red" />)
  .add("All icons", () => {
    const allIconsDOM = allIcons.map((i, index) => (
      <div key={index} style={{ margin: 20 }}>
        {i({})}
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
