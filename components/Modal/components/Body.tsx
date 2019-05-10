import React from 'react'
import styled from 'styled-components'

import Header from './Header'
import Main from './Main'
import Footer from './Footer'

const StyledDiv = styled.div`
  overflow: hidden;
`

export default ({ title, body, footer}) => {
  return (
    <StyledDiv>
      <Header title={title} />
      <Main>{body}</Main>
      <Footer>{footer}</Footer>
    </StyledDiv>
  )
}
