import React from "react"
import { storiesOf } from "@storybook/react"
import styled from "styled-components"
import Alerts from "./AlertsAPI"

import {
  withKnobs,
  text,
  select,
  boolean,
  number,
  object,
} from "@storybook/addon-knobs"
import Button from "../Button/index"
const Readme = require("./components/Alerts.README.md")

const Center = styled.div`
  display: flex;
  width: 90vw;
  height: 90vh;

  justify-content: center;
  align-items: center;
`

const AlertButton = (props: any) => {
  return (
    <Button
      label={props.placement}
      onClick={event =>
        Alerts.open({
          type: props.type,
          size: props.size,
          content: props.content,
          placement: props.placement,
          autoDismiss: props.autoDismiss,
          dismissDuration: props.dismissDuration,
          heading: props.heading,
          showIcon: props.showIcon,
          multiLine: props.multiline,
          icon: props.icon,
        })
      }
    />
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
  .add("All Test cases just tweak the knobs", () => (
    <div>
      <Center>
        <AlertButton
          type={select(
            "type",
            {
              standard: "standard",
              message: "message",
              warning: "warning",
              error: "error",
            },
            "standard",
            "groupID1"
          )}
          size={select(
            "size",
            {
              "x-small": "x-small",
              small: "small",
              medium: "medium",
              large: "large",
            },
            "small",
            "groupID1"
          )}
          placement={select(
            "placement",
            {
              topLeft: "topLeft",
              topRight: "topRight",
              bottomLeft: "bottomLeft",
              bottomRight: "bottomRight",
            },
            "bottomLeft",
            "groupID1"
          )}
          content={text("content", "Hey there", "groupID1")}
          autoDismiss={boolean("autoDismiss", false, "groupID1")}
          dismissDuration={number("dismissDuration", undefined, "groupID1")}
          heading={text("heading", "", "groupID1")}
          multiline={boolean("multiline", false, "groupID1")}
          showIcon={boolean("showIcon", false, "groupID1")}
          icon={text("icon", undefined, "groupID1")}
        />
      </Center>
    </div>
  ))
