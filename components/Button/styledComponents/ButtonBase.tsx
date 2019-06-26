import styled from "styled-components"
import { IStyled } from "../../common/types"

type ButtonState = "default" | "hover" | "active" | "focus" | "disabled"

interface ParsedColorTheme {
  background: any
  font: any
  insetBackground?: any
  insetFont?: any
}

interface BaseButtonProps {
  label?: string
  type: "primary" | "secondary"
  colorTheme: ParsedColorTheme
  ghost: boolean
  size: "small" | "medium" | "large"
  disabled?: boolean
  bare: boolean
  icon?: string
  insetLabel?: string
  onClick?: (event) => void
  fontSize: number
  lineHeight: number
}

type IStyledBaseButton = IStyled<BaseButtonProps>
// Paddings

const ICON_PADDINGS = {
  small: 0.3,
  medium: 0.5,
  large: 0.7,
}

const VERTICAL_PADINGS = {
  small: 0.1,
  medium: 0.4,
  large: 0.6,
}

const getHorizontalPadding = (props: IStyledBaseButton) => {
  const {
    customProps: { size, type, fontSize },
  } = props
  const paddings = {
    small: {
      primary: fontSize / 2,
      secondary: fontSize / 2,
    },
    medium: {
      primary: fontSize,
      secondary: fontSize / 2,
    },
    large: {
      primary: fontSize,
      secondary: fontSize / 2,
    },
  }
  return paddings[size][type]
}

const getRightPadding = (props: IStyledBaseButton) => {
  const {
    customProps: { icon, label, size },
  } = props
  if (icon && !label) {
    return ICON_PADDINGS[size!]
  }
  return getHorizontalPadding(props)
}

const getLeftPadding = (props: IStyledBaseButton) => {
  const {
    customProps: { icon, size },
  } = props
  if (icon) {
    return ICON_PADDINGS[size!]
  }
  return getHorizontalPadding(props)
}

const getVerticalPadding = (props: IStyledBaseButton) => {
  const {
    customProps: { icon, label, size },
  } = props
  const iconOnly = icon && !label
  return iconOnly ? ICON_PADDINGS[size!] : VERTICAL_PADINGS[size!]
}

// Colors

const getHighlighColor = (props: IStyledBaseButton) =>
  props.theme.shades.lightBlue

const getBaseBackgroundColor = (props: IStyledBaseButton) => {
  const {
    customProps: { ghost, colorTheme },
  } = props
  return ghost ? colorTheme.font : colorTheme.background
}

const getBaseFontColor = (props: IStyledBaseButton) => {
  const {
    customProps: { ghost, colorTheme },
  } = props
  return ghost ? colorTheme.background : colorTheme.font
}

const getLightenedBackgroundColor = (props: IStyledBaseButton) => {
  return getBaseBackgroundColor(props).set("hsl.l", "+0.1")
}

const getLightenedFontColor = (props: IStyledBaseButton) => {
  return getBaseFontColor(props).set("hsl.l", "+0.3") // Used for ghost
}

const getFontColor = (state: ButtonState, props: IStyledBaseButton) => {
  const {
    customProps: { bare, ghost },
  } = props
  const baseFontColor = getBaseFontColor(props)
  switch (state) {
    case "default":
      if (bare) {
        return getBaseBackgroundColor(props)
      }
      return baseFontColor
    case "hover":
      if (bare) {
        return getLightenedBackgroundColor(props)
      }
      if (ghost) {
        return getLightenedFontColor(props)
      }
      return baseFontColor
    default:
      return baseFontColor
  }
}

const getBackgroundColor = (state: ButtonState, props: IStyledBaseButton) => {
  const {
    customProps: { bare, ghost },
    theme,
  } = props
  if (bare) {
    return state === "default" ? theme.shades.transparent : theme.shades.gray95
  }
  if (ghost) {
    return theme.shades.white
  }
  return state === "default"
    ? getBaseBackgroundColor(props)
    : getLightenedBackgroundColor(props)
}

const getIconColor = (state: ButtonState, props: IStyledBaseButton) => {
  const {
    customProps: { bare },
  } = props
  if (!bare) {
    return getBaseFontColor(props)
  }
  switch (state) {
    case "focus":
    case "active":
      return getLightenedBackgroundColor(props)
    case "default":
    default:
      return getBaseBackgroundColor(props)
  }
}

const getBorder = (state: ButtonState, props: IStyledBaseButton) => {
  const {
    customProps: { ghost },
    theme,
  } = props
  let borderColor
  switch (state) {
    case "active":
    case "focus":
      borderColor = ghost ? getBaseFontColor(props) : getHighlighColor(props)
      break
    case "hover":
      borderColor = ghost
        ? getLightenedFontColor(props)
        : theme.shades.transparent
      break
    default:
      borderColor = ghost ? getBaseFontColor(props) : theme.shades.transparent
      break
  }
  return `1px solid ${borderColor}`
}

const getIconMargin = (props: IStyledBaseButton) => {
  const {
    customProps: { icon, label, size },
  } = props
  return icon && label ? (size === "small" ? "0.2rem" : "0.4rem") : "0rem"
}

const StyledButton = styled.button<IStyledBaseButton>`
  display: flex;
  align-items: center;
  font-size: ${({ customProps: { fontSize } }) => `${fontSize}rem`};
  line-height: ${({ customProps: { lineHeight } }) => `${lineHeight}rem`};
  padding-left: ${props => `${getLeftPadding(props)}rem`};
  padding-right: ${props => `${getRightPadding(props)}rem`};
  color: ${props => getFontColor("default", props)};
  background-color: ${props => getBackgroundColor("default", props)};
  padding-top: ${props => `${getVerticalPadding(props)}rem`};
  padding-bottom: ${props => `${getVerticalPadding(props)}rem`};
  border-radius: 0.4rem;
  border-style: none;
  box-sizing: border-box;
  border: ${props => getBorder("default", props)};
  span {
    margin-right: ${props => getIconMargin(props)};
    svg path {
      fill: ${props => getIconColor("default", props)};
    }
  }
  :hover,
  :active,
  :focus {
    background-color: ${props => getBackgroundColor("hover", props)};
  }
  :active,
  :focus {
    border: ${props => getBorder("active", props)};
    svg path {
      fill: ${props => getIconColor("focus", props)};
    }
  }
  :hover {
    border: ${props => getBorder("hover", props)};
    color: ${props => getFontColor("hover", props)};
  }
  :disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

export default StyledButton
