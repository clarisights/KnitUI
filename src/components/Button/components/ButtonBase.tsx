import styled, { css } from "styled-components"
import { IStyled } from "../../../common/types"
import { isLightColor, getHoverFontColor, getHoverBackgroundColor } from "../../../common/_utils"
import { ButtonProps } from "../types"

type ButtonState = "default" | "hover" | "active" | "focus" | "disabled"

type IStyledBaseButton = IStyled<ButtonProps>

// Paddings
const ICON_PADDINGS = {
  small: 0.3,
  medium: 0.5,
  large: 0.7,
}

const VERTICAL_PADDINGS = {
  small: 0.2,
  medium: 0.4,
  large: 0.7,
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
        return getHoverBackgroundColor(getBaseBackgroundColor(props))
      }
      if (ghost) {
        return getHoverFontColor(getBaseFontColor(props))
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
    return knitui.shades.transparent
  }
  if (ghost) {
    return knitui.chromaPalette.Neutral0 // white
  }
  return state === "default"
    ? getBaseBackgroundColor(props)
    : getHoverBackgroundColor(getBaseBackgroundColor(props))
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
      borderColor = ghost ? getHoverFontColor(getBaseFontColor(props)) : knitui.shades.transparent
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

const getHorizontalPadding = (props: IStyledBaseButton) => {
  const {
    customProps: { size },
  } = props
  const paddings = {
    small: 0.7,
    medium: 1,
    large: 1,
  }
  return paddings[size!]
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
  return iconOnly ? ICON_PADDINGS[size!] : VERTICAL_PADDINGS[size!]
}

const StyledButton = styled.button<IStyledBaseButton>`
  display: flex;
  align-items: center;
  width: ${({ customProps }) =>
    customProps.size === "fluid" ? "100%" : "auto"};
  font-size: ${({ customProps: { fontSize } }) => `${fontSize}rem`};
  line-height: ${({ customProps: { lineHeight } }) => `${lineHeight}rem`};
  color: ${props => getFontColor("default", props)};
  background-color: ${props => getBackgroundColor("default", props)};
  border-radius: 0.4rem;
  border-style: none;
  box-sizing: border-box;
  border: ${props => getBorder("default", props)};
  padding-left: ${props => `${getLeftPadding(props)}rem`};
  padding-right: ${props => `${getRightPadding(props)}rem`};
  padding-top: ${props => `${getVerticalPadding(props)}rem`};
  padding-bottom: ${props => `${getVerticalPadding(props)}rem`};
  span {
    margin-right: ${props => getIconMargin(props)};
    svg path {
      fill: ${props => getFontColor("default", props)};
    }
  }
  /* Following styles are not applied when disabled
  
    Implementation Details:
      For conditional renderering of style, have to use css tag, for more details 
      this link can be quite useful (https://stackoverflow.com/a/48502797).

      In one of the props, Type is needed to be defined, otherwise throwing typescript error.
  */
  ${({ disabled }) =>
    !disabled &&
    css`
      :hover,
      :active,
      :focus {
        color: ${(props: IStyled<ButtonProps>) => getFontColor("hover", props)};
        background-color: ${props => getBackgroundColor("hover", props)};
        svg path {
          fill: ${props => getFontColor("hover", props)};
        }
        cursor: pointer;
      }
      :active,
      :focus {
        border: ${props => getBorder("active", props)} !important;
        box-shadow: ${props => getBoxShadow(props)};
        outline: none;
      }
      :hover {
        border: ${props => getBorder("hover", props)};
      }
    `}
  :disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

export default StyledButton
