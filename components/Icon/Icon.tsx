import React from "react"
import styled from "styled-components"
import * as Icons from "./Icons"
import { withProps } from "../../common/_utils"

export interface IIconProps {
  type: string
  height?: string
  width?: string
  fill?: string
  customStyles?: string
}

const StyledIconWrapper: any = withProps<IIconProps>()(styled.span)`
  cursor: inherit;
  display: inline-block;
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  & svg {
   ${({ customStyles }) => customStyles};
  }
`

const Icon: any = (props: IIconProps) => {
  const {
    type,
    height = "18px",
    width = "18px",
    fill = "#000",
    customStyles = "",
  } = props
  const svgStyles = { height, width, fill }
  // If type is not provided, then "oCheckBoxOutlineBlank" is used as placeholder icon
  const defaultType = "oCheckBoxOutlineBlank"
  const icon =
    type && Icons[type] ? Icons[type](svgStyles) : Icons[defaultType](svgStyles)
  return (
    <StyledIconWrapper
      {...props}
      height={height}
      width={width}
      customStyles={customStyles}>
      {icon}
    </StyledIconWrapper>
  )
}

export default Icon
