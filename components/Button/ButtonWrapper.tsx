import React from "react"
import { Icon } from "../Icon"
import styled from "styled-components"
import ButtonInset from "./ButtonInset"
import * as theme from "../styles/variables"

const { shades, typography } = theme

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
  const typographySize = size === "small" ? typography.size12 : typography.size14

  const getFontColor = (state) => {
    if (ghost) {
      return state === "hover" ? shades.gray30 : shades.gray60
    }
    return type === "primary" ? shades.white : shades.gray40
  }

  const backgroundColor = {
    "primary": {
      "default": shades.blue20,
      "hover": shades.blue30,
    },
    "secondary": {
      "default": shades.gray90,
      "hover": shades.gray95,
    }
  }

  const getBackgroundColor = (state) => {
    if (ghost) {
      return shades.white
    }
    return backgroundColor[type!][state]
  }

  const getRightPadding = () => {
    if (icon && !label) {
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

  const getVerticalPadding = () => {
    if (icon && !label) {
      return 0.5
    }
    const verticalPaddings = {
      "small": 0.1,
      "medium": 0.4,
      "large": 0.6
    }
    return verticalPaddings[size!]
  }

  const getBorder = () => {
    return ghost ? `1px solid ${shades.gray40}` : `1px solid ${shades.transparent}`
  }

  const StyledButton = styled.button`
      font-size: ${`${typographySize.fontSize}rem`};
      line-height: ${`${typographySize.lineHeight}rem`};
      padding-left: ${`${getLeftPadding()}rem`};
      padding-right: ${`${getRightPadding()}rem`};
      color: ${getFontColor("default")};
      background-color: ${getBackgroundColor("default")};
      padding-top: ${`${getVerticalPadding()}rem`};
      padding-bottom: ${`${getVerticalPadding()}rem`};
      border-radius: 0.4rem;
      border-style: none;
      box-sizing: border-box;
      border: ${getBorder()};
      :hover, :active, :focus {
        background-color: ${getBackgroundColor("hover")};
        color: ${getFontColor("hover")};
      }
      :active, :focus{
        border: 1px solid ${shades.lightBlue};
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
