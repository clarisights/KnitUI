import React, { useState } from "react"

import Dialog from '../components/Dialog'
import Body from "../components/Body"

const Modal = ({ header, footer, body }) => {
  const [visible, setVisible] = useState(true)
  return (
    <Dialog
      getContainer={() => document.getElementsByTagName('body')[0]}
      visible={visible}
      onClose={() => setVisible(false)}
    >
      <Body
        title="Title"
        body={body}
        footer={footer}
      />
    </Dialog>
  )
}

export default Modal
