import React from "react"
import styled from "styled-components"
import * as Icons from "./Icons"
import { withProps } from "../_utils"

interface IIconProps {
  type: string
  height?: string
  width?: string
  customStyles?: string
}

const StyledIconWrapper: any = withProps<IIconProps>()(styled.span)`
  cursor: inherit;
  & svg {
   ${({ customStyles }) => customStyles};
  }
`

const Icon: any = (props: IIconProps) => {
  const { type, height = "18px", width = "18px", customStyles = "" } = props
  const svgStyles = { height, width }
  // If type is not provided, then "oCheckBoxOutlineBlank" is used as placeholder icon
  const defaultType = "oCheckBoxOutlineBlank"
  const icon =
    type && Icons[type] ? Icons[type](svgStyles) : Icons[defaultType](svgStyles)
  return (
    <StyledIconWrapper {...props} customStyles={customStyles}>
      {icon}
    </StyledIconWrapper>
  )
}

export default Icon
