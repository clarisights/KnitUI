import React, { useState, useEffect, SyntheticEvent } from "react"
import { AlertProps } from "./types"
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
import { IStyled } from "../../common/types"

type IStyledAlert = IStyled<AlertProps>

const defaultIcons = {
  neutral: "oInfo",
  unsaved: "oInfo",
  danger: "oError",
  warning: "oWarning",
  success: "oCheckCircle",
}

const getClassName = (prfxCls?: string, suffix?: string) =>
  prfxCls ? prfxCls + suffix : ""

const renderIcon = (scProps: IStyledAlert) => {
  const {
    customProps: { prefixClassName, image, icon, type },
  } = scProps

  scProps.className = getClassName(prefixClassName, "-knit-alert-icon")

  if (image) return <StyledAlertPicture {...scProps} src={image} />
  if (icon) return <StyledAlertIcon {...scProps} type={icon} />
  return <StyledAlertIcon {...scProps} type={defaultIcons[type!]} />
}

const renderActions = (scProps: IStyledAlert) => {
  let {
    customProps: { actions, prefixClassName: prfxCls, type, alertKey },
  } = scProps

  if (Array.isArray(actions) && actions.length == 0) {
    return null
  }
  // Only pick top 2 actions in case more are supplied
  actions = actions!.slice(0, 2)

  return (
    <AlertActionsWrapper
      className={getClassName(prfxCls, "-knit-alert-action-wrapper")}
      {...scProps}>
      {actions!.map((action, index) => (
        <StyledAlertAction
          className={getClassName(prfxCls, "-knit-alert-action")}
          key={index}
          type="secondary"
          label={action.text}
          onClick={() => action.callback(alertKey)}
          alertType={type}
          {...scProps}
        />
      ))}
    </AlertActionsWrapper>
  )
}

const Alert: React.FC<AlertProps> = (props: AlertProps) => {
  const { className, ...rest } = props

  // To clear autoDismiss setTimeoutInterval during unmount
  let interval

  const scProps = { className, customProps: rest }
  const {
    image,
    prefixClassName,
    heading,
    multiLine,
    autoDismiss,
    dismissDuration,
    actions,
    onClose,
    onExit,
    alertKey,
  } = rest

  const [open, setOpen] = useState(true)

  // To get className
  const propsWithClass = (suffix: string, className?: string) => {
    scProps.className =
      (prefixClassName ? `${prefixClassName}${suffix} ` : "") +
      (className ? `${className} ` : "")
    return scProps
  }

  const isIcon = props.hasOwnProperty("icon")
  const isAction = actions && actions.length > 0

  // Execute once, when Component will be mounted
  useEffect(() => {
    // Show error when more than two actions are passed
    if (actions && actions.length > 2) {
      console.warn(
        "Only two actions can be add to Alert, others will be ignored"
      )
    }
    // heading only exist if multiline prop is true
    if (heading && !multiLine) {
      console.error("Please pass multiLine prop to use headings")
    }

    // When unmount onExit function will be called
    return () => {
      interval && clearInterval(interval)
      onExit && onExit(alertKey!)
    }
  }, [])

  // To Auto dismiss the alert after some duration, can use transition delay check out again
  if (autoDismiss) interval = setTimeout(() => fadeAway(), dismissDuration)

  // called by both AutoDismiss and Close Icon click
  const fadeAway = (event?: SyntheticEvent): void => {
    if (onClose) {
      onClose(alertKey)
    }
    setOpen(false)
  }

  return (
    <AlertContainer
      data-testid="alert-container"
      {...propsWithClass(
        "-knit-alert",
        `${scProps.className ? scProps.className : ""}${open ? "" : " hide"}`
      )}>
      {(isIcon || image) && renderIcon(scProps)}
      <AlertContentWrapper {...propsWithClass("-knit-alert-content-wrapper")}>
        {heading && multiLine && (
          <AlertHeading {...propsWithClass("-knit-alert-heading")}>
            {heading}
          </AlertHeading>
        )}
        <AlertContent {...propsWithClass("-knit-alert-content")}>
          {props.content}
        </AlertContent>
        {isAction && renderActions(scProps)}
      </AlertContentWrapper>
      {!autoDismiss && (
        <CloseIcon
          data-testid="alert-close"
          icon="oClose"
          onClick={(e: SyntheticEvent) => fadeAway(e)}
          {...propsWithClass("-knit-alert-close")}
        />
      )}
    </AlertContainer>
  )
}

Alert.defaultProps = {
  type: "neutral",
  size: "small",
  placement: "bottomLeft",
  multiLine: false,
  actions: [],
}

export default Alert
