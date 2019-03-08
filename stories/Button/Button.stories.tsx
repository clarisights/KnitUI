import React from "react"
import { storiesOf } from "@storybook/react"
import { Button } from "../../components"

storiesOf("Button", module)
  .add("with text", () => <Button name="test" />)
  .add("with some emoji", () => <Button name="😀 😎 👍 💯" />)
