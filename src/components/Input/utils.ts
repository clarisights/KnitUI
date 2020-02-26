import { IStyledInput } from "./types"
import { getThemeFontSize, getThemeLineHeight } from "../../common/_utils"

export const getPadding = (props: IStyledInput) => {
  const {
    customProps: { inputSize },
  } = props
  const HORIZONTAL_PADDING = "1rem"
  switch (inputSize) {
    case "small":
      return `0.1rem  ${HORIZONTAL_PADDING}`
    case "large":
      return `0.6rem  ${HORIZONTAL_PADDING}`
    default:
      return `0.4rem  ${HORIZONTAL_PADDING}`
  }
}

const inputSizeToTypographySize = {
  small: 12,
  default: 14,
  large: 14,
}

const getInputBorderColor = (props: IStyledInput, state: string) => {
  const {
    theme: { knitui },
    customProps: { state: inputState },
  } = props

  if (inputState === "success") {
    return knitui.inputSuccessBorder
  }

  if (inputState === "warning") {
    return knitui.inputWarningBorder
  }

  if (inputState === "error") {
    return knitui.inputErrorBorder
  }

  if (state === "focus" || state === "active") {
    return knitui.inputFocusBorderColor
  }

  if (state === "hover") {
    return knitui.inputHoverBorderColor
  }

  return knitui.inputBorderColor
}

export const getInputBorder = (props: IStyledInput, state: string) =>
  `1px solid ${getInputBorderColor(props, state)}`

export const getHeight = (props: IStyledInput) => {
  const {
    customProps: { inputSize },
  } = props
  switch (inputSize) {
    case "small":
      return "2rem"
    case "large":
      return "3.4rem"
    default:
      return "2.8rem"
  }
}

export const getFontSize = (props: IStyledInput) => {
  const {
    customProps: { inputSize },
  } = props

  const typographySize = inputSizeToTypographySize[inputSize!]

  return getThemeFontSize(props, typographySize)
}

export const getLineHeight = (props: IStyledInput) => {
  const {
    customProps: { inputSize },
  } = props

  const typographySize = inputSizeToTypographySize[inputSize!]

  return getThemeLineHeight(props, typographySize)
}

export const getBackgroundColor = (props: IStyledInput, state?: string) => {
  const {
    theme: { knitui },
  } = props

  if (state && state === "focus") {
    return knitui.inputBgFocus
  }

  return knitui.inputBgDefault
}

export const getBorderRadius = (props: IStyledInput) => {
  const {
    theme: { knitui },
  } = props

  return knitui.inputBorderRadius
}

export const getColor = (props: IStyledInput, state: string = "default") => {
  const {
    theme: { knitui },
  } = props

  if (state === "placeholder") {
    return knitui.inputPlaceholderColor
  }

  if (state === "label") {
    return knitui.inputLabelColor
  }

  if (state === "notification") {
    return knitui.inputNotificationColor
  }

  return knitui.inputColor
}

export const getBoxShadow = (props: IStyledInput, state?: string) => {
  const {
    theme: { knitui },
  } = props

  if (state && (state === "active" || state === "focus")) {
    return knitui.inputFocusBoxShadow
  }

  return ""
}

export const getSelectionBackground = (props: IStyledInput) => {
  const {
    theme: { knitui },
  } = props

  return knitui.inputSelectionBg
}

export const getInputType = (type: string) => {
  if (type === "password") {
    return "password"
  } else if (type === "number") {
    return "number"
  }

  return "text"
}

export const getIconSize = (inputSize: string | undefined) => {
  // Get addonIcon size as per input size
  if (inputSize === "small") {
    return "14px"
  } else if (inputSize === "large") {
    return "18px"
  }

  return "16px"
}

export const getAddonPadding = (iconSize: string) => {
  // Returns the padding for addon as per icon size (in `rem`)
  return 1 + parseInt(iconSize) / 10 + 1
}

export const getGradientOffset = (props: IStyledInput) => {
  // Values returned in `rem`s
  const iconSize = getIconSize(props.inputSize)

  if (["search", "password"].includes(props.type) || props.state) {
    return getAddonPadding(iconSize)
  }

  if (props.addonAfter) {
    return 2.8
  }

  return 0.2
}

export const getBlurHeight = (props: IStyledInput) => {
  // Value returned in `rem`s
  const inputHeight = parseInt(getHeight(props), 10)

  return inputHeight - 0.2
}
