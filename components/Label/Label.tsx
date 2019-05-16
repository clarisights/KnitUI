import React, { ReactNode } from 'react'
import styled from "styled-components"

import { ColorPreset, IColorTheme } from "../_utils/types"
import { parseCustomColorTheme } from "../_utils"
import * as theme from "../styles/variables"
const { shades, typography, secondaryPalette } = theme

const DEFAULT_COLOR_THEME = "neutral"

type LabelColorTheme = ColorPreset | IColorTheme

interface LabelPropTypes {
  /** Text to be rendered on the label */
  text: string
  /** Thee spaciousness in the label */
  type?: "compact" | "expanded",
  /** The amount of physical space occupied */
  size?: "small" | "medium" | "large",
  /** Whether the edges of the label should be rounded */
  rounded?: boolean,
  /** Whether the label should have a distinct outline */
  outlined?: boolean,
  /** Whether it should be inlined */
  inline?: boolean,
  /** Defines the colors for the background and font */
  colorTheme?: LabelColorTheme
  /** Addons to be placed adjacent to the label text */
  addons?: { left?: ReactNode, right?: ReactNode},
  /** Label is focussed or being dragged */
  focus?: boolean
}

interface ParsedColorTheme {
  background: any,
  font: any,
}

const parseColorTheme = (colorTheme: LabelColorTheme) => {
  let parsedColorTheme: ParsedColorTheme = { ...secondaryPalette[DEFAULT_COLOR_THEME] }
  // Get the color theme based on variant and override if explicitly provided
  if (typeof colorTheme === "string") {
    parsedColorTheme = { ...secondaryPalette[colorTheme!] }
  } else {
    parsedColorTheme = parseCustomColorTheme(colorTheme)
  }
  return parsedColorTheme
}

const Label: React.FC<LabelPropTypes> = ({
  type = "compact",
  text,
  size = "medium",
  rounded = false,
  outlined = false,
  inline = false,
  colorTheme = DEFAULT_COLOR_THEME,
  addons = null,
  focus
}) => {
  const typographySize = {
    small: typography.size12,
    medium: typography.size14,
    large: typography.size14
  }

  const fontSize = typographySize[size].fontSize
  const lineHeight = typographySize[size].lineHeight
  const parsedColorTheme = parseColorTheme(colorTheme)
  const backgroundColor = parsedColorTheme.background
  const fontColor = parsedColorTheme.font
  const darkenedBorderColor = backgroundColor.set('hsl.l', '-0.2')

  const verticalPadding = {
    small: "0.1rem",
    medium: "0.2rem",
    large: "0.4rem"
  }

  const getVerticalPadding = () => {
    if (inline) {
      return "0rem"
    }
    return verticalPadding[size]
  }

  const getHorizontalPadding = () => {
    if (inline) {
      return "0.3rem"
    }
    if (type === "expanded" || rounded) {
      return "1rem"
    }
    return "0.7rem"
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
    display: inline-block;
    border-radius: ${getBorderRadius()};
    padding: ${`${getVerticalPadding()} ${getHorizontalPadding()}`};
    background-color: ${backgroundColor};
    color: ${fontColor};
    font-size: ${`${fontSize}rem`};
    line-height: ${`${lineHeight}rem`};
    border: ${`1px solid ${getBorderColor()}`};
    box-sizing: border-box;
    box-shadow: ${getBoxShadow()};
  `
  return <StyledDiv>{text}</StyledDiv>
}

export default Label
