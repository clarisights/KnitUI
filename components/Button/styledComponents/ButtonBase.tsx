import React from "react"
import styled from "styled-components"
import * as theme from "../../styles/variables"

const { shades } = theme

type ButtonState = "default" | "hover" | "active" | "focus" | "disabled"

interface ParsedColorTheme {
  background: any,
  font: any,
  insetBackground?: any,
  insetFont?: any
}

interface ButtonBaseProps {
  label?: string
  type: "primary" | "secondary",
  colorTheme: ParsedColorTheme,
  ghost: boolean,
  size: "small" | "medium" | "large",
  disabled?: boolean,
  bare: boolean,
  icon?: string,
  insetLabel?: string,
  onClick?: (event) => void,
  fontSize: number,
  lineHeight: number
}

const ButtonBase: React.FC<ButtonBaseProps> = ({
  label,
  type,
  ghost,
  size,
  disabled,
  onClick,
  icon,
  bare,
  colorTheme,
  fontSize,
  lineHeight,
  children
}) => {
  const iconOnly = icon && !label
  // Ghost buttons have their font and background colors interchanged
  const baseFontColor = ghost ? colorTheme.background : colorTheme.font
  const baseBackgroundColor = ghost ? colorTheme.font : colorTheme.background
  const lightenedBackgroundColor = baseBackgroundColor.set('hsl.l', '+0.1')
  const lightenedFontColor = baseFontColor.set('hsl.l', '+0.3') // Used for ghost
  const highlightColor = shades.lightBlue

  const getFontColor = (state: ButtonState) => {
    switch (state) {
      case "default":
        if (bare) { return baseBackgroundColor }
        return baseFontColor
      case "hover":
        if (bare) { return lightenedBackgroundColor }
        if (ghost) { return lightenedFontColor }
        return baseFontColor
      default:
        return baseFontColor
    }
  }

  const getBackgroundColor = (state: ButtonState) => {
    if (bare) {
      return state === "default" ? shades.transparent : shades.gray95
    }
    if (ghost) {
      return shades.white
    }
    return state === "default" ? baseBackgroundColor : lightenedBackgroundColor
  }

  const iconPaddings = {
    small: 0.3,
    medium: 0.5,
    large: 0.7
  }

  const verticalPaddings = {
    small: 0.1,
    medium: 0.4,
    large: 0.6
  }

  const horizontalPaddings = {
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
    }
  }

  const getVerticalPadding = () => {
    return iconOnly ?
    iconPaddings[size!] : verticalPaddings[size!]
  }

  const getRightPadding = () => {
    if (iconOnly) {
      return iconPaddings[size!]
    }
    return horizontalPaddings[size!][type!]
  }

  const getLeftPadding = () => {
    if (icon) {
      return iconPaddings[size!]
    }
    return horizontalPaddings[size!][type!]
  }

  const getBorder = (state: ButtonState) => {
    let borderColor
    switch (state) {
      case "active":
      case "focus":
        borderColor = ghost ? baseFontColor : highlightColor
        break
      case "hover":
        borderColor = ghost ? lightenedFontColor : shades.transparent
        break
      default:
        borderColor = ghost ? baseFontColor : shades.transparent
        break
    }
    return `1px solid ${borderColor}`
  }

  const getIconColor = (state: ButtonState) => {
    if (!bare) {
      return baseFontColor
    }
    switch (state) {
      case "focus":
      case "active":
        return lightenedBackgroundColor
      case "default":
      default:
        return baseBackgroundColor
    }
  }

  const getIconMargin = () => {
    return (
      icon && label ?
        size === "small" ? "0.2rem" : "0.4rem"
          :
        "0rem"
    )
  }

  const StyledButton = styled.button`
    display: flex;
    align-items: center;
    font-size: ${`${fontSize}rem`};
    line-height: ${`${lineHeight}rem`};
    padding-left: ${`${getLeftPadding()}rem`};
    padding-right: ${`${getRightPadding()}rem`};
    color: ${getFontColor("default")};
    background-color: ${getBackgroundColor("default")};
    padding-top: ${`${getVerticalPadding()}rem`};
    padding-bottom: ${`${getVerticalPadding()}rem`};
    border-radius: 0.4rem;
    border-style: none;
    box-sizing: border-box;
    border: ${getBorder("default")};
    svg {
      margin-right: ${getIconMargin()};
      path {
        fill: ${getIconColor("default")};
      }
    }
    :hover, :active, :focus {
      background-color: ${getBackgroundColor("hover")};
    }
    :active, :focus{
      border: ${getBorder("active")};
      svg path {
        fill: ${getIconColor("focus")};
      }
    }
    :hover {
      border: ${getBorder("hover")};
      color: ${getFontColor("hover")};
    }
    :disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `
  return (
    <StyledButton
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  )
}

export default ButtonBase
