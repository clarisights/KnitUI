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
  display: flex;
  & svg {
   ${({ customStyles }) => customStyles};
  }
`

const Icon: any = (props: IIconProps) => {
  const { type, height = "24px", width = "24px", customStyles = "" } = props
  const svgStyles = { height, width }
  const icon = type && Icons[type] ? Icons[type](svgStyles) : null
  return (
    <StyledIconWrapper {...props} customStyles={customStyles}>
      {icon}
    </StyledIconWrapper>
  )
}

export default Icon
