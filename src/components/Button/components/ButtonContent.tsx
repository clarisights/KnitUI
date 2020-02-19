import styled from "styled-components"
import { IStyled } from "../../../common/types"

import { ButtonProps } from "../types"

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

const ButtonContent = styled.div<IStyledBaseButton>`
  padding-left: ${props => `${getLeftPadding(props)}rem`};
  padding-right: ${props => `${getRightPadding(props)}rem`};
  padding-top: ${props => `${getVerticalPadding(props)}rem`};
  padding-bottom: ${props => `${getVerticalPadding(props)}rem`};
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
`

export default ButtonContent
