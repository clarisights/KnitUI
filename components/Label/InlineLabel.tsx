import React, { useContext } from "react"
import styled from "styled-components"

import { InputColorTheme, fontSizeType } from "../_utils/types"
import { parseColorTheme } from "../_utils"
import { ThemeContext } from "styled-components"

const DEFAULT_COLOR_THEME = "neutral"

interface InlineLabelPropTypes {
  /** Text to be rendered on the label */
  text: string
  /** Font size of the text */
  fontSize?: fontSizeType
  /** Thee spaciousness in the label */
  expanded?: boolean
  /** Defines the colors for the background and font */
  colorTheme?: InputColorTheme
}

export type InlineLabelType = React.FC<InlineLabelPropTypes>

const InlineLabel: InlineLabelType = ({
  expanded = false,
  text,
  colorTheme = DEFAULT_COLOR_THEME,
  fontSize = 12,
}) => {
  const themeContext = useContext(ThemeContext)
  const { typography } = themeContext
  const lineHeight = typography[fontSize].lineHeight
  const parsedColorTheme = parseColorTheme(colorTheme)
  const backgroundColor = parsedColorTheme.background
  const fontColor = parsedColorTheme.font

  const verticalPadding = "0rem"
  const horizontalPadding = expanded ? "0.3rem" : "0rem"

  const StyledDiv = styled.div`
    lineheightdisplay: inline-flex;
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

export default InlineLabel
