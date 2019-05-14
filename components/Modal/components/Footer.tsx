import React, { ReactNode, RefObject } from 'react'
import styled from "styled-components"

interface FooterProps {
  children: ReactNode,
  padding: { vertical: string, horizontal: string }
}

const Footer = ({ children, padding, showBorder }) => {
  const { vertical, horizontal } = padding
  const StyledDiv = styled.div`
    padding: ${`${vertical} ${horizontal}`};
    justify-self: flex-end;
    border-top: ${showBorder ? `1px solid #D9D9D9` : `none`}
  `
  return (
    <StyledDiv>
      {children}
    </StyledDiv>
  )
}
export default Footer
