import React from "react"
import styled from "styled-components"
import { IStyled } from "../../common/types"
import { InlineLabelProps } from "./types"
import { parseColorPreset, parseCustomColor } from "../../common/_utils"
import { InlineLabelType } from "./types"

const DEFAULT_COLOR_THEME = "neutral"

const getFontSize = props => {
  const {
    customProps: { fontSize },
    theme: { typography },
  } = props
  return typography[fontSize].fontSize
}

const geLineHeight = props => {
  const {
    customProps: { fontSize },
    theme: { typography },
  } = props
  return typography[fontSize].lineHeight
}

const parseColorTheme = ({ customProps: { customColor, colorPreset } }) =>
  customColor ? parseCustomColor(customColor) : parseColorPreset(colorPreset)

const getBackgroundColor = props => parseColorTheme(props).background

const getFontColor = props => parseColorTheme(props).font

const verticalPadding = "0rem"
const getHorizontalPadding = props => {
  const {
    customProps: { expanded },
  } = props
  return expanded ? "0.3rem" : "0rem"
}

const StyledDiv = styled.div<IStyled<InlineLabelProps>>`
  display: inline-flex;
  align-items: center;
  padding: ${props => `${verticalPadding} ${getHorizontalPadding(props)}`};
  background-color: ${props => getBackgroundColor(props)};
  color: ${props => getFontColor(props)};
  font-size: ${props => `${getFontSize(props)}rem`};
  line-height: ${props => `${geLineHeight(props)}rem`};
  box-sizing: border-box;
`

const InlineLabel: InlineLabelType = ({ className, style, ...rest }) => {
  const { text } = rest
  const scProps = { className, style, customProps: rest }
  return (
    <StyledDiv {...scProps} className={className} style={style}>
      <span>{text}</span>
    </StyledDiv>
  )
}

InlineLabel.defaultProps = {
  expanded: false,
  fontSize: 12,
  colorPreset: DEFAULT_COLOR_THEME,
}

export default InlineLabel
