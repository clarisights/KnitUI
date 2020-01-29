import React, { FC, SyntheticEvent } from "react"
import styled from "styled-components"
import { IStyled } from "common/types"
import { oAccountCircle as UserProfileIcon } from "../Icon/Icons"

interface AvatarProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: string
  onClick?: (event?: SyntheticEvent) => void
  picture?: string
  name?: string
  disabled: boolean
}

interface AvatarBaseProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isPicture: boolean
  isName: boolean
  isIcon: boolean
  size: string
  disabled: boolean
}

const getThemeColor = (props, color) => {
  const {
    theme: {
      knitui: { chromaPalette },
    },
  } = props
  return chromaPalette[color].hex()
}

const getBoxShadowStyle = props => {
  const {
    theme: {
      knitui: { shades },
    },
    customProps: { disabled },
  } = props

  return disabled ? "none" : `0px 0px 2px ${shades.blue50.hex()}`
}

const getFontSize = props => {
  const {
    customProps: { size },
  } = props
  return `calc(1.4 * ${size} / 2.4)`
}

const getLineHeight = props => {
  const {
    customProps: { size },
  } = props
  return `calc(2.0 * ${size} / 2.4)`
}

const getBackgroundColor = (props, state) => {
  const { isPicture, isName, isIcon, disabled } = props.customProps
  if (isPicture || isIcon) {
    return "transparent"
  } else if (isName) {
    if (disabled || state === "default") {
      return getThemeColor(props, "Neutral10")
    } else if (state === "hover" || state === "focus") {
      return getThemeColor(props, "Neutral20")
    } else {
      return getThemeColor(props, "Neutral10")
    }
  }
}

const getBorderStyle = (props, state) => {
  const { isPicture, isName, disabled } = props.customProps

  const focusColor = getThemeColor(props, "Azure80")
  const hoverColor = getThemeColor(props, "Neutral20")
  const defaultColor = getThemeColor(props, "Neutral10")

  if (state === "focus" && !disabled) {
    return `1px solid ${focusColor}`
  }
  if (isPicture || isName) {
    if (state === "default" || disabled) {
      return `1px solid ${defaultColor}`
    } else if (state === "hover") {
      return `1px solid ${hoverColor}`
    }
  }
  /* if(isIcon) with (state === "default" || state === "hover" || disabled), focus is already taken care of,
   * so directly returning transparent style in all other case of isIcon
   * because of the ts-lint error `not all paths return` to make this condition default
   */
  return `1px solid transparent`
}

const getMarginStyle = props => {
  const { isPicture, isIcon } = props.customProps
  return isIcon || isPicture ? "-1px" : "0"
}

const getFillColor = (props, state) => {
  const { isPicture, isName, isIcon, disabled } = props.customProps

  if (isPicture || isName) {
    return "transparent"
  } else if (isIcon) {
    if (state === "default" || disabled) {
      return getThemeColor(props, "Neutral10")
    } else if (state === "hover" || state === "focus") {
      return getThemeColor(props, "Neutral20")
    }
  }
}

const getOpacity = props => {
  const { isIcon } = props.customProps

  return isIcon ? 1 : 0.4
}

const AvatarBase = styled.button<IStyled<AvatarBaseProps>>`
  width: ${({ customProps }) => customProps.size};
  height: ${({ customProps }) => customProps.size};

  overflow: hidden;
  border-radius: 50%;
  outline: none;
  cursor: pointer;

  /* Style for Name Avatar */
  color: ${props => getThemeColor(props, "Neutral90")};
  font-size: ${props => getFontSize(props)};
  line-height: ${props => getLineHeight(props)};

  /* Below Basic Property & corresponding function calls which will play role in :
   * all three types of Avatar -
   *  - isPicture
   *  - isName
   *  - isIcon
   * along with thier 3 state & disabled attribute -
   *  - default
   *  - hover
   *  - focus/active
   */
  background: ${props => getBackgroundColor(props, "default")};
  border: ${props => getBorderStyle(props, "default")};
  img {
    width: ${({ customProps }) => customProps.size};
    height: ${({ customProps }) => customProps.size};
    margin: ${props => getMarginStyle(props)};
    user-drag: none;
    user-select: none;
    transition: transform 120ms;
  }

  svg {
    margin: ${props => getMarginStyle(props)};
    path {
      fill: ${props => getFillColor(props, "default")};
    }
  }

  :hover {
    img {
      transform: scale(1.05);
    }
    background: ${props => getBackgroundColor(props, "hover")};
    border: ${props => getBorderStyle(props, "hover")};
    svg path {
      fill: ${props => getFillColor(props, "hover")};
    }
  }
  :focus,
  :active {
    background: ${props => getBackgroundColor(props, "focus")};
    border: ${props => getBorderStyle(props, "focus")};
    svg path {
      fill: ${props => getFillColor(props, "focus")};
    }
    box-shadow: ${props => getBoxShadowStyle(props)};
  }

  :disabled {
    img {
      transform: none;
    }
    opacity: ${props => getOpacity(props)};
    cursor: not-allowed;
  }
`

const Avatar: FC<AvatarProps> = props => {
  const { picture, size = "24px", name, disabled = false, ...rest } = props

  const isPicture = !!picture
  const isName = !!name
  const isIcon = !(isPicture || isName)
  const avatarTitle = isName ? name : isPicture ? "" : "Unknown User"
  const customProps = {
    isPicture,
    isName,
    isIcon,
    size,
    disabled,
  }

  return (
    <AvatarBase
      data-testid="avatar"
      customProps={customProps}
      disabled={disabled}
      title={avatarTitle}
      {...rest}>
      {(isPicture && <img src={picture} />) ||
        (isName && name!.toUpperCase()[0]) ||
        (isIcon && <UserProfileIcon width={size} height={size} />)}
    </AvatarBase>
  )
}

export default Avatar
