import React, { useContext } from "react"
import styled from "styled-components"
import { ThemeContext } from "styled-components"
import { ColorPreset, CustomColor } from "../_utils/types"
import { parseCustomColor, parseColorPreset } from "../_utils"
import Icon from "../Icon"

const DEFAULT_COLOR_THEME = "neutral"

import { InlineLabelType } from "./InlineLabel"

interface LabelPropTypes {
  /** Text to be rendered on the label */
  text: string
  /** Thee spaciousness in the label */
  expanded?: boolean
  /** The amount of physical space occupied */
  size?: "small" | "medium" | "large"
  /** Whether the edges of the label should be rounded */
  rounded?: boolean
  /** Whether the label should have a distinct outline */
  outlined?: boolean
  /**
   * One of a set of predefined values that are representative of
   * the type of action
   */
  colorPreset?: ColorPreset
  /** Addons to be placed adjacent to the label text */
  customColor?: CustomColor
  /** Override defaults, should be valid CSS string */
  icons?: { left?: string; right?: string }
  /** Label is focussed or being dragged */
  focus?: boolean
}

interface ILabel extends React.FC<LabelPropTypes> {
  Inline?: InlineLabelType
}

const Label: ILabel = ({
  expanded = false,
  text,
  size = "medium",
  rounded = false,
  outlined = false,
  colorPreset = DEFAULT_COLOR_THEME,
  customColor,
  icons,
  focus,
}) => {
  const themeContext = useContext(ThemeContext)
  const { shades, typography } = themeContext
  const typographySize = {
    small: typography[12],
    medium: typography[14],
    large: typography[14],
  }
  const fontSize = typographySize[size].fontSize
  const lineHeight = typographySize[size].lineHeight
  const parsedColorTheme = customColor
    ? parseCustomColor(customColor)
    : parseColorPreset(colorPreset)
  const backgroundColor = parsedColorTheme.background
  const fontColor = parsedColorTheme.font
  const darkenedBorderColor = backgroundColor.set("hsl.l", "-0.2")
  const showLeftIcon = icons && icons.left
  const showRightIcon = icons && icons.right

  const verticalPadding = {
    small: "0.1rem",
    medium: "0.2rem",
    large: "0.4rem",
  }

  const getVerticalPadding = () => {
    return verticalPadding[size]
  }

  const getHorizontalPadding = () => {
    if (expanded) {
      return "1rem"
    }
    return "0.7rem"
  }

  const getLeftPadding = () => {
    if (showLeftIcon) {
      return size === "small" ? "0.3rem" : "0.5rem"
    }
    return getHorizontalPadding()
  }

  const getRightPadding = () => {
    if (showRightIcon) {
      return size === "small" ? "0.3rem" : "0.5rem"
    }
    return getHorizontalPadding()
  }

  const getIconMargin = () => {
    return size === "small" ? "0.2rem" : "0.4rem"
  }

  const getBorderColor = () => {
    return outlined ? darkenedBorderColor : "transparent"
  }

  const getBorderRadius = () => {
    return rounded ? "999px" : "0.2rem"
  }

  const getBoxShadow = () => {
    return focus ? `0rem 0rem 0.2rem ${shades.blue50}` : "none"
  }

  const StyledDiv = styled.div`
    display: inline-flex;
    align-items: center;
    border-radius: ${getBorderRadius()};
    padding: ${`${getVerticalPadding()} ${getRightPadding()} ${getVerticalPadding()} ${getLeftPadding()}`};
    background-color: ${backgroundColor};
    color: ${fontColor};
    font-size: ${`${fontSize}rem`};
    line-height: ${`${lineHeight}rem`};
    border: ${`1px solid ${getBorderColor()}`};
    box-sizing: border-box;
    box-shadow: ${getBoxShadow()};
    svg path {
      fill: ${fontColor};
    }
  `

  const StyledIcon = styled(Icon)`
    ${showRightIcon ? `margin-left: ${getIconMargin()};` : ""}
    ${showLeftIcon ? `margin-right: ${getIconMargin()};` : ""}
  `

  return (
    <StyledDiv>
      {showLeftIcon ? <StyledIcon type={icons!.left} /> : null}
      <span>{text}</span>
      {showRightIcon ? <StyledIcon type={icons!.right} /> : null}
    </StyledDiv>
  )
}

export default Label
