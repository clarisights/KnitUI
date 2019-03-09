import React from "react"
import { storiesOf } from "@storybook/react"
import { withActions } from "@storybook/addon-actions"
import { Button } from "../../components"

storiesOf("Button", module)
  .addDecorator(withActions("mouseover", "click .btn"))
  .add("with text", () => <Button name="test" />)
  .add("with some emoji", () => <Button name="😀 😎 👍 💯" />)
