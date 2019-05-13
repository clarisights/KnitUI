import React, { ReactNode } from "react"
import styled from "styled-components"

import withModalWrapper from "./withModalWrapper"

import { ModalProps, defaultProps } from './Default'

interface BottomPanelModalProps extends ModalProps {
  panelContent: ReactNode
}

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
  panelContent
}) => {
  return (
    <>
      {header}
      <Layout>
        {body}
        {footer}
        <BottomSection>{panelContent}</BottomSection>
      </Layout>
    </>
  )
}

Modal.defaultProps = defaultProps

export default withModalWrapper(Modal)
