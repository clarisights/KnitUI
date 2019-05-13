import React, { useState } from "react"
import styled from "styled-components"

import Container from '../components/Container'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

import { ModalProps, defaultProps } from './Default'

interface BottomPanelModalProps extends ModalProps {}

const Layout = styled.div`
`

const BottomSection = styled.div`
  box-sizing: border-box;
  height: 8.4rem;
  border-top: 1px solid #D9D9D9;
`

const Modal: React.FC<BottomPanelModalProps> = ({
  header,
  footer,
  body,
  padding
}) => {
  const [visible, setVisible] = useState(true)

  return (
    <Container
      getContainer={() => document.getElementsByTagName('body')[0]}
      visible={visible}
      onClose={() => setVisible(false)}
    >
      <Header {...header} />
      <Layout>
        <Main padding={padding}>{body}</Main>
        <Footer padding={padding}>{footer}</Footer>
        <BottomSection>Bottom section</BottomSection>
      </Layout>
    </Container>
  )
}

Modal.defaultProps = defaultProps

export default Modal
