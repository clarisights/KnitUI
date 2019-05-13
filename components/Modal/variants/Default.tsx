import React, { useState, ReactNode } from "react"
import Container from '../components/Container'

import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

export interface ModalProps {
  header: {title: string, rightSection?: ReactNode},
  body: ReactNode,
  footer: ReactNode,
  padding?: { vertical: string, horizontal: string }
}

const Modal: React.FC<ModalProps> = ({
   header,
   body,
   footer,
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
      <Main padding={padding}>{body}</Main>
      <Footer padding={padding}>{footer}</Footer>
    </Container>
  )
}

export const defaultProps = {
  padding: {
    vertical: "2.1rem",
    horizontal: "2.8rem"
  }
}

Modal.defaultProps = defaultProps

export default Modal
