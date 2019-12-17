import styled, { css } from "styled-components"
import { IStyled } from "../../../common/types"
import { isLightColor } from "../../../common/_utils"
import { ButtonProps } from "../types"

type ButtonState = "default" | "hover" | "active" | "focus" | "disabled"

type IStyledBaseButton = IStyled<ButtonProps>
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
    customProps: { size, kind, fontSize },
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
  return paddings[size!][kind!]
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
  props.theme.knitui.chromaPalette.Azure80

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

const getHoverBackgroundColor = (props: IStyledBaseButton) => {
  return isLightColor(getBaseBackgroundColor(props))
    ? getBaseBackgroundColor(props).set("hsl.l", "-0.1")
    : getBaseBackgroundColor(props).set("hsl.l", "+0.1")
}

const getHoverFontColor = (props: IStyledBaseButton) => {
  return isLightColor(getBaseFontColor(props))
    ? getBaseFontColor(props).set("hsl.l", "-0.3")
    : getBaseFontColor(props).set("hsl.l", "+0.3")
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
    case "active":
    case "focus":
      if (bare) {
        return getHoverBackgroundColor(props)
      }
      if (ghost) {
        return getHoverFontColor(props)
      }
      return baseFontColor
    default:
      return baseFontColor
  }
}

const getBackgroundColor = (state: ButtonState, props: IStyledBaseButton) => {
  const {
    customProps: { bare, ghost },
    theme: { knitui },
  } = props
  if (bare) {
    return state === "default"
      ? knitui.shades.transparent
      : knitui.chromaPalette.Neutral10
  }
  if (ghost) {
    return knitui.chromaPalette.Neutral0 // white
  }
  return state === "default"
    ? getBaseBackgroundColor(props)
    : getHoverBackgroundColor(props)
}

const getBorder = (state: ButtonState, props: IStyledBaseButton) => {
  const {
    customProps: { ghost },
    theme: { knitui },
  } = props
  let borderColor
  switch (state) {
    case "active":
    case "focus":
      borderColor = getHighlighColor(props)
      break
    case "hover":
      borderColor = ghost ? getHoverFontColor(props) : knitui.shades.transparent
      break
    default:
      borderColor = ghost ? getBaseFontColor(props) : knitui.shades.transparent
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

const getBoxShadow = (props: IStyledBaseButton) => {
  const {
    theme: { knitui },
  } = props
  return `0px 0px 2px ${knitui.shades.blue50}`
}

const StyledButton = styled.button<IStyledBaseButton>(
  props => `
  display: flex;
  align-items: center;
  font-size: ${props.customProps.fontSize}rem;
  line-height: ${props.customProps.lineHeight}rem;
  padding-left: ${getLeftPadding(props)}rem;
  padding-right: ${getRightPadding(props)}rem;
  color: ${getFontColor("default", props)};
  background-color: ${getBackgroundColor("default", props)};
  padding-top: ${getVerticalPadding(props)}rem;
  padding-bottom: ${getVerticalPadding(props)}rem;
  border-radius: 0.4rem;
  border-style: none;
  box-sizing: border-box;
  border: ${getBorder("default", props)};
  span {
    margin-right: ${getIconMargin(props)};
    svg path {
      fill: ${getFontColor("default", props)};
    }
  }
  /* Following styles are not applied when disabled
  
    Implementation Details:
      For conditional rendering of style, have to use css tag, for more details 
      this link can be quite useful (https://stackoverflow.com/a/48502797).

      In one of the props, Type is needed to be defined, otherwise throwing typescript error.
  */
  ${({ disabled }) =>
    !disabled &&
    css`
      :hover,
      :active,
      :focus {
        color: ${getFontColor("hover", props)};
        background-color: ${getBackgroundColor("hover", props)};
        svg path {
          fill: ${getFontColor("hover", props)};
        }
        cursor: pointer;
      }
      :active,
      :focus {
        border: ${getBorder("active", props)} !important;
        box-shadow: ${getBoxShadow(props)};
        outline: none;
      }
      :hover {
        border: ${getBorder("hover", props)};
      }
    `}
  :disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`
)

export default StyledButton
