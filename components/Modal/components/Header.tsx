import React, { ReactNode } from 'react'
import styled from 'styled-components'

const padding = {
  horizontal: "2.8rem",
  vertical: "1.4rem"
}

interface HeaderProps {
  title: string,
  rightSection?: ReactNode
}

const borderRadius = "0.4rem"

const Header: React.FC<HeaderProps> = ({ title, rightSection }) => {
  const Container = styled.div`
    display: flex;
    padding: ${`${padding.vertical} ${padding.horizontal}`};
    border-radius: ${`${borderRadius} ${borderRadius} 0rem 0rem`};
    background: #F2F2F2;
  `
  const TitleSection = styled.div`
    font-size: 20px;
    line-height: 30px;
    color: #333333;
  `

  const RightSection = styled.div`
    display: flex;
    flex-grow: 1;
    justify-content: flex-end;
    align-items: center;
  `

  return (
    <Container>
      <TitleSection>{title}</TitleSection>
      <RightSection>{rightSection}</RightSection>
    </Container>
  )
}

export default Header
