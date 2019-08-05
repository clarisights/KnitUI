import React, { useState, useEffect } from "react"
import { AlertProps, alertType, actionType } from "./AlertInterface"
import {
  AlertContainer,
  AlertContent,
  StyledAlertIcon,
  AlertHeading,
  AlertContentWrapper,
  StyledAlertPicture,
  StyledAlertAction,
  AlertActionsWrapper,
  CloseIcon,
} from "./StyledAlert"
import { Neutral0 } from "../../common/styles/palette"

const defaultIcons = {
  standard: "oInfo",
  error: "oError",
  warning: "oWarning",
  success: "oCheckCircle",
}

const renderIcon = (
  type: alertType,
  icon: string | undefined,
  multiLine: boolean,
  image: string | undefined
) => {
  if (image) return <StyledAlertPicture multiLine={multiLine} src={image} />
  if (icon)
    return (
      <StyledAlertIcon multiLine={multiLine} type={icon} fill={Neutral0.hex} />
    )
  return (
    <StyledAlertIcon
      multiLine={multiLine}
      type={defaultIcons[type]}
      fill={Neutral0.hex}
    />
  )
}

const renderActions = (
  actions: Array<actionType>,
  multiLine: boolean | undefined
) => {
  // console.error("Only two actions can be add to Alert, others will be ignored")

  // Only pick top 2 actions in case more are supplied
  actions = actions.slice(0, 2)

  return (
    <AlertActionsWrapper multiLine={multiLine}>
      {actions.map(action => (
        <StyledAlertAction key={action.text} onClick={() => action.callback()}>
          {action.text}
        </StyledAlertAction>
      ))}
    </AlertActionsWrapper>
  )
}

const Alert: React.FC<AlertProps> = (props: any) => {
  const [open, setOpen] = useState(true)
  const {
    type = "standard",
    size = "small",
    content,
    multiLine = false,
    children,
    autoDismiss,
    dismissDuration = 5000, //default autoDismiss period if autoDismiss=true
    heading,
    icon,
    image,
    actions,
    onClose,
    placement = "bottomLeft",
  } = props

  const containerProps = { type, size, content, placement }
  const contentProps = { heading, multiLine }
  const isIcon = props.hasOwnProperty("icon")

  // Execute once, when Component will be mounted
  useEffect(() => {
    if (props.hasOwnProperty("actions") && actions.length > 2) {
      // Show error when more than two actions are passed
      try {
        if (actions.length > 2) {
          throw Error(
            "Only two actions can be add to Alert, others will be ignored"
          )
        }
      } catch (error) {
        console.error(error.message)
      }
    }
    // heading & multiline are
    try {
      if (heading && !multiLine) {
        throw Error("Please pass multiLine prop to use headings")
      }
    } catch (error) {
      console.error(error.message)
    }
  }, [])

  // To Auto dismiss the alert after some duration, can use transition delay check out again
  if (autoDismiss) {
    setTimeout(() => fadeAway(), dismissDuration)
  }

  // called by both AutoDismiss and Close Icon click
  const fadeAway = (event?: Event): void => {
    onClose ? onClose(event) : setOpen(false)
  }

  return (
    <AlertContainer className={open ? "" : "hide"} {...containerProps}>
      {(isIcon || image) && renderIcon(type, icon, multiLine, image)}
      <AlertContentWrapper {...contentProps}>
        {heading && multiLine && <AlertHeading>{heading}</AlertHeading>}
        <AlertContent multiLine={multiLine}>{props.content}</AlertContent>
        {actions && renderActions(actions, multiLine)}
      </AlertContentWrapper>
      {!autoDismiss && <CloseIcon onClick={(e: Event) => fadeAway(e)} />}
    </AlertContainer>
  )
}

Alert.defaultProps = {
  type: "standard",
  size: "small",
  placement: "bottomLeft",
  multiLine: false,
}

export default Alert
