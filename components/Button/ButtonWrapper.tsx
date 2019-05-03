import React from "react"
import { Icon } from "../Icon"
import styled from "styled-components"
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
  const textAndIcon = icon && label
  const typographySize = size === "small" ? typography.size12 : typography.size14
  const baseFontSize = typographySize.fontSize
  const baseLineHeight = typographySize.lineHeight

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
      primary: baseFontSize / 2,
      secondary: baseFontSize / 2,
    },
    medium: {
      primary: baseFontSize,
      secondary: baseFontSize / 2,
    },
    large: {
      primary: baseFontSize,
      secondary: baseFontSize / 2,
    }
  }

  const getVerticalPadding = () => {
    return iconOnly ?
    iconPaddings[size!] : verticalPaddings[size!]
  }

  const getRightPadding = () => {
    return horizontalPaddings[size!][type!]
  }

  const getLeftPadding = () => {
    if (icon) {
      return iconPaddings[size!]
    }
    return horizontalPaddings[size!][type!]
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
    return `1px solid ${borderColor}`
  }

  const StyledButton = styled.button`
    display: flex;
    align-items: center;
    font-size: ${`${baseFontSize}rem`};
    line-height: ${`${baseLineHeight}rem`};
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

  const StyledIcon = styled(Icon)`
    path {
      fill: ${baseFontColor}
    }
  `

  const ButtonInset = styled.div`
    display: inline-flex;
    background-color: ${shades.white};
    color: ${shades.gray20};
    font-size: ${`${baseFontSize - theme.baseIncrementUnit}rem`};
    border-radius: 0.4rem;
    margin-left: 0.4rem;
    padding: 0rem 0.3rem 0rem 0.3rem;
  `

  return (
    <StyledButton
      disabled={disabled}
      onClick={() => (onClick && onClick() || href && (window.location.href = href))}
    >
      {icon ? <StyledIcon type={icon} /> : null }
      {label}
      {insetLabel ? <ButtonInset>{insetLabel}</ButtonInset> : null}
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
