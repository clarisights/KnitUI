import React, { useState } from "react"
import Container from '../components/Container'

import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

const Modal = ({ title, footer, body }) => {
  const [visible, setVisible] = useState(true)
  return (
    <Container
      getContainer={() => document.getElementsByTagName('body')[0]}
      visible={visible}
      onClose={() => setVisible(false)}
    >
      <Header title={title} />
      <Main>{body}</Main>
      <Footer>{footer}</Footer>
    </Container>
  )
}

export default Modal
