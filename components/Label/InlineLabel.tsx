import React, { useContext } from "react"
import styled from "styled-components"
import BaseComponent from "../BaseComponent"

import { fontSizeType } from "../_utils/types"
import { parseColorPreset, parseCustomColor } from "../_utils"
import { ThemeContext } from "styled-components"
import { BaseLabelProps } from "./common/types"

const DEFAULT_COLOR_THEME = "neutral"

interface InlineLabelPropTypes extends BaseLabelProps {
  /** Font size of the text */
  fontSize?: fontSizeType
}

export type InlineLabelType = React.FC<InlineLabelPropTypes>

const InlineLabel: InlineLabelType = ({
  expanded = false,
  text,
  colorPreset = DEFAULT_COLOR_THEME,
  customColor,
  fontSize = 12,
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
    <StyledDiv>
      <span>{text}</span>
    </StyledDiv>
  )
}

export default BaseComponent(InlineLabel)
