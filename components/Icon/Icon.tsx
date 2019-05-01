import React from "react"
import styled from "styled-components"
import * as Icons from "./Icons"
import { withProps } from "../_utils"

interface IconProps {
  SVGHeight?: number
  SVGWidth?: number
  customStyles?: any
}

const StyledIconWrapper: any = withProps<IconProps>()(styled.span)`
  cursor: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: ${props => props.SVGHeight};
  width: ${({ SVGWidth }) => SVGWidth};
  & svg {
    padding: 2px;
    margin: 2px;
    height: ${props => props.SVGHeight};
    width: ${({ SVGWidth }) => SVGWidth};
    ${({ customStyles }) => customStyles};
  }
`

const Icon: any = props => {
  const { type, height = "28px", width = "28px", customStyles = "" } = props
  const icon = Icons[`IconSystem${type}`]()
  return (
    <StyledIconWrapper
      {...props}
      SVGWidth={width}
      SVGHeight={height}
      customStyles={customStyles}>
      {icon}
    </StyledIconWrapper>
  )
}

export default Icon
