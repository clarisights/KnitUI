import React from "react"
import styled from "styled-components"
import { IStyled } from "../../common/types"
import { getBackgroundColor, getFontColor } from "./commonUtils"
import { InlineLabelProps, InlineLabelType } from "./types"

const DEFAULT_COLOR_THEME = "neutral"

const getFontSize = props => {
  const {
    customProps: { fontSize },
    theme: {
      knitui: { typography },
    },
  } = props
  return typography[fontSize].fontSize
}

const geLineHeight = props => {
  const {
    customProps: { fontSize },
    theme: {
      knitui: { typography },
    },
  } = props
  return typography[fontSize].lineHeight
}

const verticalPadding = "0rem"

const getHorizontalPadding = props => {
  const {
    customProps: { expanded },
  } = props
  return expanded ? "0.3rem" : "0rem"
}

const StyledDiv = styled.div<IStyled<InlineLabelProps>>(
  props => `
  display: inline-flex;
  align-items: center;
  padding: ${verticalPadding} ${getHorizontalPadding(props)};
  background-color: ${getBackgroundColor(props)};
  color: ${getFontColor(props)};
  font-size: ${getFontSize(props)}rem;
  line-height: ${geLineHeight(props)}rem;
  box-sizing: border-box;
`
)

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
