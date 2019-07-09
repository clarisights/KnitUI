import React, { useState } from "react"
import { AlertProps, alertType, actionType } from "./AlertInrerface"
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

const Alert: React.FC<AlertProps> = props => {
  const [open, setOpen] = useState(false)
  const {
    type = "standard",
    size = "small",
    content,
    multiLine = false,
    children,
    autoDismiss,
    dismissDuration,
    heading,
    showIcon,
    icon,
    image,
    actions,
    onClose,
  } = props

  const containerProps = { type, size, content }
  const contentProps = { heading, multiLine }

  if (heading && !multiLine) {
    console.error("Please pass multiLine prop to use headings")
  }

  return (
    <>
      <AlertContainer {...containerProps}>
        {(showIcon || image) &&
          renderIcon(type, icon, multiLine, image)}
        <AlertContentWrapper {...contentProps}>
          {heading && multiLine && <AlertHeading>{heading}</AlertHeading>}
          <AlertContent multiLine={multiLine}>{props.content}</AlertContent>
          {actions && renderActions(actions, multiLine)}
        </AlertContentWrapper>
      </AlertContainer>
    </>
  )
}

Alert.defaultProps = {
  type: "standard",
  size: "small",
  multiLine: false,
}

export default Alert
