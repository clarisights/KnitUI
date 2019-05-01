import React from "react"
import { Icon } from "../Icon"
import styled from "styled-components"
import ButtonInset from "./ButtonInset"
import ButtonBase from "./ButtonBase"
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
      return theme.shades.lightGray
    }
    switch (type) {
      case "primary":
        return theme.shades.white
      case "secondary":
      default:
        return theme.shades.gray
    }
  }

  const backgroundColor = {
    "primary": {
      "default": theme.shades.darkBlue,
      "hover": theme.shades.blue,
      "ghost": theme.shades.white,
    },
    "secondary": {
      "default": theme.shades.lighterGray,
      "hover": "",
      "active": "",
      "focused": "",
      "ghost": theme.shades.white,
    }
  }
  const getHorizontalPadding = () => {
    switch (type) {
      case "primary":
      default:
        return getFontSize()
      case "secondary":
        return getFontSize() / 2
    }
  }

  const getVerticalPadding = () => {
    switch (size) {
      case "small":
        return 1
      case "medium":
      default:
        return 4
      case "large":
        return 6
    }
  }

  const getBorder = () => {
    return ghost ? `1px solid ${theme.shades.gray}` : `1px solid ${theme.shades.transparent}`
  }

  const StyledButton = styled.button`
      font-size: ${`${getFontSize()}rem`};
      padding-left: ${`${getHorizontalPadding()}rem`};
      padding-right: ${`${getHorizontalPadding()}rem`};
      color: ${getFontColor()};
      background-color: ${backgroundColor[type!].default};
      padding-top: ${`${getVerticalPadding()}px`};
      padding-bottom: ${`${getVerticalPadding()}px`};
      border-radius: 4px;
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
      :focussed {
        background-color: ${backgroundColor[type!].hover};
        border: 1px solid ${theme.shades.lightBlue}
        box-shadow: 0px 1px 4px ${theme.shades.paleYellow};
      }
  `

  return (
    <StyledButton>
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
