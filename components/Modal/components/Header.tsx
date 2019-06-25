import React, { ReactNode } from "react"
import styled from "styled-components"
import { borderRadius, padding } from "../common/styles"

const Container = styled.div`
  display: flex;
  padding: ${`${padding.vertical} ${padding.horizontal}`};
  border-radius: ${`${borderRadius} ${borderRadius} 0rem 0rem`};
  background: ${({ theme }) => theme.shades.gray95};
`
const TitleSection = styled.div`
  font-size: 20px;
  line-height: 30px;
  color: ${({ theme }) => theme.shades.gray20};
`

const RightSection = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
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
