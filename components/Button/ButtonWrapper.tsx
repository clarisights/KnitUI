import React from "react"
import { Icon } from "../Icon"
import styled from "styled-components"
import ButtonInset from "./ButtonInset"
import * as theme from "../styles/variables"
import chroma from 'chroma-js'

const { shades, typography, secondaryPalette } = theme

type buttonState = "default" | "hover" | "active" | "focus" | "disabled"

type ButtonWrapperType = React.FC<{
  label?: string
  type?: "primary" | "secondary",
  variant?: "neutral" | "danger" | "success" | "warning" | "unsaved",
  ghost?: boolean,
  size?: "small" | "medium" | "large",
  disabled?: boolean,
  icon?: string,
  bare?: boolean,
  insetLabel?: string,
  href?: string,
  onClick?: Function,
  colorTheme?: { background: any, font: any}
}>

const ButtonWrapper: ButtonWrapperType = ({
  label,
  variant,
  type,
  ghost,
  size,
  disabled,
  href,
  onClick,
  icon,
  bare,
  insetLabel,
  colorTheme
}) => {
  const iconOnly = icon && !label
  const typographySize = size === "small" ? typography.size12 : typography.size14

  // Get the color theme based on variant and override if explicitly provided
  if (colorTheme && chroma.isValid(colorTheme.background) && chroma.isValid(colorTheme.font)) {
    colorTheme.background = chroma(colorTheme.background)
    colorTheme.font = chroma(colorTheme.font)
  } else {
    colorTheme = secondaryPalette[variant!]
  }

  // Ghost buttons have their font and background colors interchanged
  const baseFontColor = ghost ? colorTheme.background : colorTheme.font
  const baseBackgroundColor = ghost ? colorTheme.font : colorTheme.background
  const lightenedBackgroundColor = baseBackgroundColor.set('hsl.l', '+0.1')
  const highlightColor = shades.lightBlue

  const getFontColor = (state: buttonState) => {
    switch (state) {
      case "default":
        return ghost ? highlightColor : baseFontColor  // TODO: compute dynamically
      default:
        return baseFontColor
    }
  }

  const getBackgroundColor = (state: buttonState) => {
    if (bare) {
      return shades.transparent
    }
    if (ghost) {
      return shades.white
    }
    return state === "default" ? baseBackgroundColor : lightenedBackgroundColor
  }

  const verticalPaddings = {
    small: {
      default: 0.1,
      iconOnly: 0.3,
    },
    medium: {
      default: 0.4,
      iconOnly: 0.5,
    },
    large: {
      default: 0.6,
      iconOnly: 0.7,
    }
  }

  const getVerticalPadding = () => {
    return iconOnly ?
      verticalPaddings[size!].iconOnly : verticalPaddings[size!].default
  }

  const getRightPadding = () => {
    if (icon && !label) {  // Icon only
      return 0.5
    }
    return type === "primary" ? typographySize.fontSize : typographySize.fontSize / 2
  }

  const getLeftPadding = () => {
    let leftPadding = type === "primary" ? typographySize.fontSize : typographySize.fontSize / 2
    if (icon && !label) {
      leftPadding = 0.5
    } else if (icon && label) {
      leftPadding = leftPadding / 2
    }
    return leftPadding
  }

  const getBorder = (state: buttonState) => {
    let borderColor
    switch (state) {
      case "active":
      case "focus":
        borderColor = ghost ? baseFontColor : highlightColor // TODO: compute dynamically
        break
      case "hover":
        borderColor = ghost ? baseFontColor : shades.transparent
        break
      default:
        borderColor = ghost ? highlightColor : shades.transparent
        break
    }
    return `1px solid ${borderColor.css('hsl')}`
  }

  const StyledButton = styled.button`
    font-size: ${`${typographySize.fontSize}rem`};
    line-height: ${`${typographySize.lineHeight}rem`};
    padding-left: ${`${getLeftPadding()}rem`};
    padding-right: ${`${getRightPadding()}rem`};
    color: ${getFontColor("default").css('hsl')};
    background-color: ${getBackgroundColor("default").css('hsl')};
    padding-top: ${`${getVerticalPadding()}rem`};
    padding-bottom: ${`${getVerticalPadding()}rem`};
    border-radius: 0.4rem;
    border-style: none;
    box-sizing: border-box;
    border: ${getBorder("default")};
    :hover, :active, :focus {
      background-color: ${getBackgroundColor("hover")};
      color: ${getFontColor("hover")};
    }
    :active, :focus{
      border: ${getBorder("active")};
    }
    :hover {
      border: ${getBorder("hover")};
    }
    :disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `

  return (
    <StyledButton
      disabled={disabled}
      onClick={() => (onClick && onClick() || href && (window.location.href = href))}
    >
      {icon ? <Icon type={icon} /> : null}
      {label}
      <ButtonInset label={insetLabel} />
    </StyledButton>
)}

ButtonWrapper.defaultProps = {
  type: "primary",
  variant: "neutral",
  ghost: false,
  disabled: false,
  size: "medium",
  bare: false,
}

export default ButtonWrapper
