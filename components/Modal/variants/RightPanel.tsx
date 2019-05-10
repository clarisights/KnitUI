import React, { useState } from "react"
import styled from "styled-components"

import Container from '../components/Container'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

const Layout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;s
`

const LeftSection = styled.div`
  width: 75%;
`

const RightSection = styled.div`
  width: 25%;
  border-left: 1px solid #D9D9D9;
`

const Modal = ({ title, footer, body }) => {
  const [visible, setVisible] = useState(true)

  return (
    <Container
      getContainer={() => document.getElementsByTagName('body')[0]}
      visible={visible}
      onClose={() => setVisible(false)}
    >
      <Header title={title} />
      <Layout>
        <LeftSection>
          <Main>{body}</Main>
          <Footer>{footer}</Footer>
        </LeftSection>
        <RightSection>Right Section</RightSection>
      </Layout>
    </Container>
  )
}

export default Modal
