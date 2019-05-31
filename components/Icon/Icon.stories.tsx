import React from "react"
import { storiesOf } from "@storybook/react"
import Icon from "./index"

storiesOf("Icon", module)
  .add("Basic Icon", () => <Icon type="oAddCircle" />)
  .add("Icon with color", () => <Icon type="oAddCircle" fill="red" />)
