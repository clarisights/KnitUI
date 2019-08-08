import React, { ReactNode } from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  padding: ${({ theme: { knitui } }) =>
    `${knitui.modalPadding.vertical} ${knitui.modalPadding.horizontal}`};
  border-radius: ${({ theme: { knitui } }) =>
    `${knitui.modalBorderRadius} ${knitui.modalBorderRadius} 0rem 0rem`};
  background: ${({ theme: { knitui } }) => knitui.shades.gray95};
`
const TitleSection = styled.div`
  font-size: 20px;
  line-height: 30px;
  color: ${({ theme: { knitui } }) => knitui.shades.gray20};
`

const RightSection = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
`

interface HeaderProps {
  title: string
  rightSection?: ReactNode
}

const Header: React.FC<HeaderProps> = ({ title, rightSection }) => (
  <Container>
    <TitleSection>{title}</TitleSection>
    <RightSection>{rightSection}</RightSection>
  </Container>
)

export default Header
