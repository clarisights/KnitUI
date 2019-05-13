import React, { useState } from "react"
import styled from "styled-components"

import Container from '../components/Container'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

import { ModalProps, defaultProps } from './Default'

interface LeftPanelModalProps extends ModalProps {}

const Layout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;s
`

const LeftSection = styled.div`
  width: 210px;
  border-right: 1px solid #D9D9D9;
`

const RightSection = styled.div`
  width: 100%;
`

const Modal: React.FC<LeftPanelModalProps> = ({
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
        <LeftSection>
          Left Section
        </LeftSection>
        <RightSection>
          <Main padding={padding}>{body}</Main>
          <Footer padding={padding}>{footer}</Footer>
        </RightSection>
      </Layout>
    </Container>
  )
}

Modal.defaultProps = defaultProps

export default Modal
