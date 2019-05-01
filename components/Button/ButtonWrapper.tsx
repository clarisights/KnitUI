import React from "react"
import { Icon } from "../Icon"
import styled from "styled-components"
import ButtonInset from "./ButtonInset"
import * as theme from "../styles/variables"

type ButtonWrapperType = React.FC<{
  label?: string
  type?: "primary" | "secondary",
  ghost?: boolean,
  size?: "small" | "medium" | "large",
  disabled?: boolean,
  icon?: string,
  bare?: boolean,
  insetLabel?: string,
  href?: string,
  onClick?: Function,
}>

const ButtonWrapper: ButtonWrapperType = ({
  label,
  type,
  ghost,
  size,
  disabled,
  href,
  onClick,
  icon,
  bare,
  insetLabel,
}) => {
  const getFontSize = () => size === "small" ? theme.unit12 : theme.unit14
  const getFontColor = () => {
    if (ghost) {
      return theme.shades.gray60
    }
    switch (type) {
      case "primary":
        return theme.shades.white
      case "secondary":
      default:
        return theme.shades.gray40
    }
  }

  const backgroundColor = {
    "primary": {
      "default": theme.shades.blue20,
      "hover": theme.shades.blue30,
      "ghost": theme.shades.white,
    },
    "secondary": {
      "default": theme.shades.gray90,
      "hover": theme.shades.gray95,
      "ghost": theme.shades.white,
    }
  }
  const getRightPadding = () => {
    if (icon && !label) {
      return 0.5
    }
    return type === "primary" ? getFontSize() : getFontSize() / 2
  }

  const getLeftPadding = () => {
    let leftPadding = type === "primary" ? getFontSize() : getFontSize() / 2
    if (icon && !label) {
      leftPadding = 0.5
    } else if (icon && label) {
      leftPadding = leftPadding / 2
    }
    return leftPadding
  }

  const getVerticalPadding = () => {
    if (icon && !label) {
      return 0.5
    }
    switch (size) {
      case "small":
        return 0.1
      case "medium":
      default:
        return 0.4
      case "large":
        return 0.6
    }
  }

  const getBorder = () => {
    return ghost ? `1px solid ${theme.shades.gray40}` : `1px solid ${theme.shades.transparent}`
  }

  const StyledButton = styled.button`
      font-size: ${`${getFontSize()}rem`};
      padding-left: ${`${getLeftPadding()}rem`};
      padding-right: ${`${getRightPadding()}rem`};
      color: ${getFontColor()};
      background-color: ${backgroundColor[type!].default};
      padding-top: ${`${getVerticalPadding()}rem`};
      padding-bottom: ${`${getVerticalPadding()}rem`};
      border-radius: 0.4rem;
      border-style: none;
      box-sizing: border-box;
      border: ${getBorder()};
      :hover {
        background-color: ${backgroundColor[type!].hover};
      }
      :active{
        background-color: ${backgroundColor[type!].hover};
        border: 1px solid ${theme.shades.lightBlue};
      }
      :focused {
        background-color: ${backgroundColor[type!].hover};
        border: 1px solid ${theme.shades.lightBlue}
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
  ghost: false,
  disabled: false,
  size: "medium",
  bare: false,
}

export default ButtonWrapper
