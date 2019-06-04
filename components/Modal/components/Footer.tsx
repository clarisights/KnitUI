import React, { ReactNode } from "react"
import styled from "styled-components"
import { border, padding } from "../common/styles"

const Footer = ({
  children,
  showBorder,
}: {
  children: ReactNode
  showBorder: boolean
}) => {
  const StyledDiv = styled.div`
    padding: ${`${padding.vertical} ${padding.horizontal}`};
    justify-self: flex-end;
    border-top: ${showBorder ? border : `none`};
  `

  return <StyledDiv>{children}</StyledDiv>
}

export default Footer
