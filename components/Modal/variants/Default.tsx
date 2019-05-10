import React, { useState } from "react"
import Dialog from '../components/Dialog'

import Body from "../components/Body"

const Modal = ({ title, footer, body }) => {
  const [visible, setVisible] = useState(true)
  return (
    <Dialog
      getContainer={() => document.getElementsByTagName('body')[0]}
      visible={visible}
      onClose={() => setVisible(false)}
    >
      <Body
        title={title}
        body={body}
        footer={footer}
      />
    </Dialog>
  )
}

export default Modal
