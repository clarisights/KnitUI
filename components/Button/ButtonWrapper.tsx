import React from "react"
import { Icon } from "../Icon"
import styled from "styled-components"

type ButtonWrapperType = React.FC<{
  label?: string
  type?: "primary" | "secondary",
  ghost?: boolean,
  size?: "small" | "medium" | "large",
  disabled?: boolean,
  icon?: string,
  bare?: boolean,
  insetValue?: number,
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
  icon,
  bare,
  insetValue,
}) => {
  const getFontSize = theme => size === "small" ? theme.unit12 : theme.unit14
  const getFontColor = theme => {
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
  const getBackgroundColor = theme => {
    if (ghost) {
      return theme.shades.white
    }
    switch (type) {
      case "primary":
      default:
        return theme.shades.darkBlue
      case "secondary":
        return theme.shades.lighterGray
    }
  }
  const getHorizontalPadding = theme => {
    switch (type) {
      case "primary":
      default:
        return getFontSize(theme)
      case "secondary":
        return getFontSize(theme) / 2
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

  const getBorder = theme => {
    return ghost ? `1px solid ${theme.shades.gray}` : "none"
  }

  const StyledButton = styled.button`
    font-size: ${props => `${getFontSize(props.theme)}rem` };
    padding-left: ${props => `${getHorizontalPadding(props.theme)}rem` };
    padding-right: ${props => `${getHorizontalPadding(props.theme)}rem` };
    color: ${props => getFontColor(props.theme)};
    background-color: ${props => getBackgroundColor(props.theme)};
    padding-top: ${props => `${getVerticalPadding()}px` };
    padding-bottom: ${props => `${getVerticalPadding()}px` };
    border-radius: 4px;
    border-style: none;
    box-sizing: border-box;
    border: ${props => getBorder(props.theme)};
  `
  return (
    <StyledButton>
      {icon ? <Icon type={icon} /> : null}{label}
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
