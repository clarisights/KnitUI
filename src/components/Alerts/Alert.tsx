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
  image: string | undefined,
  prefixClassName?: string | undefined
) => {
  if (image)
    return (
      <StyledAlertPicture
        prefixClassName={prefixClassName}
        multiLine={multiLine}
        src={image}
      />
    )
  if (icon)
    return (
      <StyledAlertIcon
        prefixClassName={prefixClassName}
        multiLine={multiLine}
        type={icon}
        fill={Neutral0.hex}
      />
    )
  return (
    <StyledAlertIcon
      prefixClassName={prefixClassName}
      multiLine={multiLine}
      type={defaultIcons[type]}
      fill={Neutral0.hex}
    />
  )
}

const renderActions = (
  actions: Array<actionType>,
  multiLine: boolean | undefined,
  prefixClassName?: string
) => {
  // Only pick top 2 actions in case more are supplied
  actions = actions.slice(0, 2)

  return (
    <AlertActionsWrapper
      prefixClassName={prefixClassName}
      multiLine={multiLine}>
      {actions.map(action => (
        <StyledAlertAction
          prefixClassName={prefixClassName}
          key={action.text}
          onClick={() => action.callback()}>
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
    autoDismiss,
    dismissDuration = 5000, //default autoDismiss period if autoDismiss=true
    heading,
    icon,
    image,
    actions,
    onClose,
    placement = "bottomLeft",
    className,
    prefixClassName,
  } = props

  const containerProps = {
    type,
    size,
    content,
    placement,
    prefixClassName,
  }
  const contentProps = { heading, multiLine, prefixClassName }
  const isIcon = props.hasOwnProperty("icon")
  // Execute once, when Component will be mounted
  useEffect(() => {
    // Show error when more than two actions are passed
    if (props.hasOwnProperty("actions") && actions.length > 2) {
      console.error(
        "Only two actions can be add to Alert, others will be ignored"
      )
    }
    // heading & multiline are
    if (heading && !multiLine) {
      console.error("Please pass multiLine prop to use headings")
    }
  }, [])

  // To Auto dismiss the alert after some duration, can use transition delay check out again
  if (autoDismiss) {
    setTimeout(() => fadeAway(), dismissDuration)
  }

  // called by both AutoDismiss and Close Icon click
  const fadeAway = (event?: Event): void => {
    onClose && onClose(event)
    setOpen(false)
  }

  return (
    <AlertContainer
      data-testid="alert-container"
      className={`${!!className ? className : ""}` + (open ? "" : " hide")}
      {...containerProps}>
      {(isIcon || image) &&
        renderIcon(type, icon, multiLine, image, prefixClassName)}
      <AlertContentWrapper {...contentProps}>
        {heading && multiLine && (
          <AlertHeading prefixClassName={prefixClassName}>
            {heading}
          </AlertHeading>
        )}
        <AlertContent prefixClassName={prefixClassName} multiLine={multiLine}>
          {props.content}
        </AlertContent>
        {actions && renderActions(actions, multiLine, prefixClassName)}
      </AlertContentWrapper>
      {!autoDismiss && (
        <CloseIcon
          prefixClassName={prefixClassName}
          data-testid="alert-close"
          onClick={(e: Event) => fadeAway(e)}
        />
      )}
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
