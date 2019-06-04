import React, { ReactNode, useContext } from "react"
import styled from "styled-components"
import { border } from "../common/styles"
import { StyleContext } from "../common/contexts"

const Footer = ({
  children,
  showBorder,
}: {
  children: ReactNode
  showBorder: boolean
}) => {
  const {
    padding: { horizontal, vertical },
  } = useContext(StyleContext)

  const StyledDiv = styled.div`
    padding: ${`${vertical} ${horizontal}`};
    justify-self: flex-end;
    border-top: ${showBorder ? border : `none`};
  `

  return <StyledDiv>{children}</StyledDiv>
}

export default Footer
