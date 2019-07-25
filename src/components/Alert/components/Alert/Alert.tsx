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
    return <StyledAlertIcon multiLine={multiLine} type={icon} fill="#FFF" />
  return (
    <StyledAlertIcon
      multiLine={multiLine}
      type={defaultIcons[type]}
      fill="#FFF"
    />
  )
}

const renderActions = (
  actions: Array<actionType>,
  multiLine: boolean | undefined
) => {
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
    showIcon,
    icon,
    image,
    actions,
    onClose,
    placement = "bottomLeft",
  } = props

  const containerProps = { type, size, content, placement }
  const contentProps = { heading, multiLine }

  if (heading && !multiLine) {
    console.error("Please pass multiLine prop to use headings")
  }

  // To Auto dismiss the alert after some duration, can use transition delay check out again
  if (autoDismiss) {
    setTimeout(() => {
      fadeAway()
    }, dismissDuration)
  }

  // called by both AutoDismiss and Close Icon click
  const fadeAway = (event?: Event): void => {
    if (onClose) {
      onClose(event)
    }
  }

  return (
    <AlertContainer className={open ? "" : "hide"} {...containerProps}>
      {(showIcon || image) && renderIcon(type, icon, multiLine, image)}
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
