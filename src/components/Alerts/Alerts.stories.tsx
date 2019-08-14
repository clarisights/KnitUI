import React from "react"
import { storiesOf } from "@storybook/react"
import styled, { createGlobalStyle } from "styled-components"
import {
  withKnobs,
  text,
  select,
  boolean,
  number,
} from "@storybook/addon-knobs"
import Alert from "./Alert"
import { AlertProps, placementType } from "./AlertInterface"
import Button from "../Button"
import Alerts from "./index"

const Readme = require("./Alerts.README.md")

const alertOptions = ["standard", "success", "warning", "error"]

const alertActions = [
  {
    text: "Action 1",
    callback: () => alert("action 1"),
  },
  {
    text: "Action 2",
    callback: () => alert("action 2"),
  },
  {
    text: "Action 3",
    callback: () => alert("action 3"),
  },
]

const Center = styled.div`
  display: flex;
  width: 90vw;
  height: 90vh;

  justify-content: center;
  align-items: center;
`

// To modify style of alert using classname, you have to define it's rule in GlobalStyle
const GlobalStyle = createGlobalStyle`
  .new_class {
    border: 2px dashed white;
    background: skyblue;
    color: yellow;
    width: 500px;
  }

  // To change icon and closeIcon
  .new_class *[fill]{
    fill: greenyellow    
  }

  // To change closeIcon
  .new_class *[type="oClose"] *[fill]{ //container -> span with type oClose -> svg with fill
    fill: red;
  }

  // To change ActionAlertButton
  .new_class *[class^="StyledAlert__StyledAlertAction"]{
    border-radius: 4px;
    padding: 3px;
    color: black;
  }
  .new_class *[class^="StyledAlert__StyledAlertAction"]:hover{
    background: rgba(255,255,255,0.5);
    color: black;
  }

  // To change AlertContent
  .new_class *[class^="StyledAlert__AlertContent-"]{
    color: red;
  }
`

const AlertButton = (props: any) => {
  return (
    <Button
      label={props.placement}
      onClick={event =>
        Alerts.add({
          type: props.type,
          size: props.size,
          content: props.content,
          placement: props.placement,
          autoDismiss: props.autoDismiss,
          dismissDuration: props.dismissDuration,
          heading: props.heading,
          multiLine: props.multiline,
          icon: props.icon,
        })
      }
    />
  )
}

const alertArr: AlertProps[] = [
  {
    type: "standard",
    size: "small",
    placement: "topRight",
    content: "Hello There",
    autoDismiss: false,
    dismissDuration: 1500,
    // heading: "Hi there", // only uncomment when multiLine props is true else throw an error, as suppose to
    multiLine: false,
    actions: alertActions,
    onClose: () => {},
  },
  {
    type: "warning",
    size: "medium",
    placement: "topRight",
    content: "Hello There",
    autoDismiss: false,
    dismissDuration: 1500,
    multiLine: false,
  },
  {
    type: "error",
    size: "x-small",
    placement: "topRight",
    content: "Hello There",
    autoDismiss: true,
    dismissDuration: 1500,
    multiLine: false,
    icon: "",
    onClose: () => {},
  },
  {
    type: "success",
    size: "large",
    placement: "topRight",
    content: "Hello There",
    autoDismiss: false,
    dismissDuration: 250,
    heading: "Hi there",
    multiLine: true,
    icon: "",
    image:
      "https://clarisights-users.s3.eu-central-1.amazonaws.com/production/users/profile_picture_561/1540893983_clarisights.png",
  },
]

const stories = storiesOf("Alerts", module)
stories.addDecorator(withKnobs)
stories.addDecorator(story => (
  <div
    style={{
      width: "90vw",
      height: "90vh",
      border: "1px solid black",
      fontSize: "10px",
    }}>
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
    <Alert
      type={select("Type", alertOptions, "standard")}
      content={text("content", "Hey there!")}
      autoDismiss={boolean("Auto Dismiss", true)}
      dismissDuration={number("Dismiss Duration", 4000)}
    />
  ))
  .add("Basic with manual dismiss", () => (
    <Alert
      type={select("Type", alertOptions, "error")}
      content={text("content", "Hey there!")}
      placement={text("Placement", "bottomRight")}
      onClose={() => {}}
    />
  ))
  .add("Basic with default icon", () => (
    <Alert
      icon={text("Icon", undefined)}
      type={select("Type", alertOptions, "warning")}
      content="Hey there!"
      placement={text("Placement", "topLeft")}
    />
  ))
  .add("Basic with custom icon", () => (
    <Alert
      type={select("Type", alertOptions, "standard")}
      icon={text("Custom Image", "oZoomOut")}
      content="Hey there!"
      placement={text("Placement", "topRight")}
    />
  ))
  .add("Basic with heading and multiLine", () => (
    <Alert
      type={select("Type", alertOptions, "standard")}
      multiLine={boolean("Multiline Alert", true)}
      icon={text("Icon", undefined)}
      heading={text("Heading", "Heading 1")}
      content={text("content", "Hey there!")}
    />
  ))
  .add("Basic with picture", () => (
    <Alert
      image="https://clarisights-users.s3.eu-central-1.amazonaws.com/production/users/profile_picture_561/1540893983_clarisights.png"
      content="Hey there!"
    />
  ))
  .add("Multiline with picture", () => (
    <Alert
      image="https://clarisights-users.s3.eu-central-1.amazonaws.com/production/users/profile_picture_561/1540893983_clarisights.png"
      type={select("Type", alertOptions, "standard")}
      multiLine={boolean("Multiline Alert", true)}
      heading={text("Heading", "Heading 1")}
      content={text("content", "Hey there!")}
    />
  ))
  .add("Basic with actions", () => (
    <Alert actions={alertActions} content={text("content", "Hey there!")} />
  ))
  .add("Multiline with picture and actions", () => (
    <Alert
      image="https://clarisights-users.s3.eu-central-1.amazonaws.com/production/users/profile_picture_561/1540893983_clarisights.png"
      actions={alertActions}
      type={select("Type", alertOptions, "standard")}
      multiLine={boolean("Multiline Alert", true)}
      heading={text("Heading", "Heading 1")}
      content={text("content", "Hey there!")}
    />
  ))
  .add("Basic with large size", () => (
    <Alert
      actions={alertActions}
      content={text("content", "Hey there!")}
      size={text("size", "large")}
    />
  ))
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
          icon={text("icon", undefined, "groupID1")}
        />
      </Center>
    </div>
  ))
  .add("top left side cases", () => (
    <div>
      <Center>
        <Button
          label={"topLeft (Press One Time Only)"}
          onClick={event =>
            alertArr.map((alert: AlertProps, index: number) => {
              setTimeout(() => {
                Alerts.add({ ...alert, placement: "topLeft" })
              }, index * 500)
            })
          }
        />
      </Center>
    </div>
  ))
  .add("top right side cases", () => (
    <div>
      <Center>
        <Button
          label={"topRight (Press One Time Only)"}
          onClick={event =>
            alertArr.map((alert: AlertProps, index: number) => {
              setTimeout(() => {
                Alerts.add({ ...alert, placement: "topRight" })
              }, index * 500)
            })
          }
        />
      </Center>
    </div>
  ))
  .add("bottom left side cases", () => (
    <div>
      <Center>
        <Button
          label={"bottomLeft (Press One Time Only)"}
          onClick={event =>
            alertArr.map((alert: AlertProps, index: number) => {
              setTimeout(() => {
                Alerts.add({ ...alert, placement: "bottomLeft" })
              }, index * 500)
            })
          }
        />
      </Center>
    </div>
  ))
  .add("bottom right side cases", () => (
    <div>
      <Center>
        <Button
          label={"bottomRight (Press One Time Only)"}
          onClick={event =>
            alertArr.map((alert: AlertProps, index: number) => {
              setTimeout(() => {
                Alerts.add({ ...alert, placement: "bottomRight" })
              }, index * 500)
            })
          }
        />
      </Center>
    </div>
  ))
  .add("Any placement position cases", () => {
    const placements: placementType[] = [
      "bottomLeft",
      "topLeft",
      "topRight",
      "bottomRight",
    ]
    let i = alertArr.length
    alertArr.map((alert: AlertProps, index: number) => {
      setTimeout(() => {
        i = i === alertArr.length ? 0 : i + 1
        const tempAlert = alert
        tempAlert.size = tempAlert.size === "large" ? "medium" : tempAlert.size
        tempAlert.placement = placements[i % 4]
        Alerts.add(tempAlert)
      }, index * 200)
    })
    alertArr.map((alert: AlertProps, index: number) => {
      setTimeout(() => {
        i = i === alertArr.length ? 0 : i + 1
        const tempAlert = alert
        tempAlert.size = tempAlert.size === "large" ? "medium" : tempAlert.size
        tempAlert.placement = placements[i % 4]
        Alerts.add(tempAlert)
      }, (index + alertArr.length) * 200)
    })
    return <></>
  })
  .add("remove alert using api call", () => {
    const keysOfAlerts: string[] = []
    alertArr.map((alert: AlertProps, index: number) => {
      setTimeout(() => {
        keysOfAlerts.push(Alerts.add(alert))
      }, index * 500)
    })
    setTimeout(() => {
      Alerts.remove(keysOfAlerts[1])
    }, 5000)
    return (
      <div>
        <Center>
          <h2>Remove the second called alert using api</h2>
        </Center>
      </div>
    )
  })
  .add("custom style using class", () => {
    return (
      <React.Fragment>
        <GlobalStyle />
        <Center>
          <Button
            label={"Custom Style Alert"}
            onClick={event =>
              Alerts.add({
                type: "standard",
                size: "small",
                placement: "topRight",
                autoDismiss: false,
                dismissDuration: 1500,
                heading: "Hi there", // only uncomment when multiLine props is true else throw an error, as suppose to
                multiLine: true,
                actions: alertActions,
                className: "new_class",
                prefixClassName: "myclass",
                content: "This is the content",
                icon: "",
                onClose: () => {},
              })
            }
          />
        </Center>
      </React.Fragment>
    )
  })
  .add("React Component passed as content", () => {
    return (
      <React.Fragment>
        <Center>
          <Button
            label={"Content as Component Alert"}
            onClick={event =>
              Alerts.add({
                type: "standard",
                size: "small",
                placement: "topRight",
                autoDismiss: false,
                dismissDuration: 1500,
                heading: "Hi there", // only uncomment when multiLine props is true else throw an error, as suppose to
                multiLine: true,
                actions: alertActions,
                content: <MyComponent />,
                icon: "",
                onClose: () => {},
              })
            }
          />
        </Center>
      </React.Fragment>
    )
  })

const MyStyledComponent = styled.div`
  border: 1px solid red;
  color: black;
`

const MyComponent = () => {
  return <MyStyledComponent>Component Passed in Content</MyStyledComponent>
}
