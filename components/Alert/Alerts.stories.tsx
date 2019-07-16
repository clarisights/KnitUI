import React from "react"
import { storiesOf } from "@storybook/react"
import styled from "styled-components"
import Alerts from "./Alerts"

import {
  withKnobs,
  text,
  select,
  boolean,
  number,
  object,
} from "@storybook/addon-knobs"
import Button from "../Button"
const Readme = require("./Alerts.README.md")

const Center = styled.div`
  display: flex;
  width: 90vw;
  height: 90vh;

  justify-content: center;
  align-items: center;
`

const NotificationButton = props => {
  return (
    <Center>
      <Button
        label={text("Label", "topLeft")}
        onClick={event =>
          Alerts.open({
            content: "Hello there",
            placement: "topLeft",
          })
        }
      />

      <Button
        label={text("Label", "topRight")}
        onClick={event =>
          Alerts.open({
            content: "Hello there",
            placement: "topRight",
          })
        }
      />

      <Button
        label={text("Label", "bottomLeft")}
        onClick={event =>
          Alerts.open({
            content: "Hello there",
            placement: "bottomLeft",
          })
        }
      />

      <Button
        label={text("Label", "bottomRight")}
        onClick={event =>
          Alerts.open({
            content: "Hello there",
            placement: "bottomRight",
          })
        }
      />
    </Center>
  )
}

const stories = storiesOf("Alerts", module)
stories.addDecorator(withKnobs)
stories.addDecorator(story => (
  <div style={{ width: "90vw", height: "90vh", border: "1px solid black" }}>
    {story()}
  </div>
))

stories
  .addParameters({
    readme: {
      // Show readme before story
      codeTheme: "shades-of-purple",
      // Show readme at the addons panel
      sidebar: Readme,
    },
  })
  .add("Basic", () => (
    <div>
      <NotificationButton />
    </div>
  ))
