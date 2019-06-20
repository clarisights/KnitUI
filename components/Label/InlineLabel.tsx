import React, { useContext } from "react"
import styled from "styled-components"
import BaseComponent from "../BaseComponent"

import { parseColorPreset, parseCustomColor } from "../_utils"
import { ThemeContext } from "styled-components"
import { InlineLabelType } from "./types"

const DEFAULT_COLOR_THEME = "neutral"

const InlineLabel: InlineLabelType = ({
  expanded = false,
  text,
  colorPreset = DEFAULT_COLOR_THEME,
  customColor,
  fontSize = 12,
  className,
  style,
}) => {
  const themeContext = useContext(ThemeContext)
  const { typography } = themeContext
  const selectedtTypography = typography[fontSize]
  fontSize = selectedtTypography.fontSize
  const lineHeight = selectedtTypography.lineHeight
  const parsedColorTheme = customColor
    ? parseCustomColor(customColor)
    : parseColorPreset(colorPreset)
  const backgroundColor = parsedColorTheme.background
  const fontColor = parsedColorTheme.font

  const verticalPadding = "0rem"
  const horizontalPadding = expanded ? "0.3rem" : "0rem"

  const StyledDiv = styled.div`
    display: inline-flex;
    align-items: center;
    padding: ${`${verticalPadding} ${horizontalPadding}`};
    background-color: ${backgroundColor};
    color: ${fontColor};
    font-size: ${`${fontSize}rem`};
    line-height: ${`${lineHeight}rem`};
    box-sizing: border-box;
    svg path {
      fill: ${fontColor};
    }
  `

  return (
    <StyledDiv className={className} style={style}>
      <span>{text}</span>
    </StyledDiv>
  )
}

export default BaseComponent(InlineLabel)
