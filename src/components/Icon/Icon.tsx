import React from "react"
import styled from "styled-components"
import * as Icons from "./Icons"
import { withProps } from "../../common/_utils"

export interface IIconProps {
  type: string
  size?: { width: string; height: string } | string
  fill?: string
  customStyles?: string
}

interface IIconWrapper {
  width: string
  height: string
  customStyles?: string
}

const StyledIconWrapper: any = withProps<IIconWrapper>()(styled.span)`
  cursor: inherit;
  display: inline-block;
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  & svg {
   ${({ customStyles }) => customStyles};
  }
`

const Icon: any = (props: IIconProps) => {
  const { type, size, fill = "#000", customStyles = "" } = props
  let width = "18px",
    height = "18px"
  if (typeof size === "string") {
    width = size
    height = size
  } else if (typeof size === "object") {
    width = size.width
    height = size.height
  }

  const svgStyles = { width, height, fill }
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
