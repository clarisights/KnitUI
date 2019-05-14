import React, { ReactNode } from "react"
import styled from "styled-components"

import withModalWrapper from "./withModalWrapper"

import { ModalProps, defaultProps, PrimaryLayout } from './Default'

interface RightPanelModalProps extends ModalProps {
  panelContent: ReactNode
}

const Layout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  flex: 1 1 auto;
`

const LeftSection = styled.div`
  width: 100%;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
`

const RightSection = styled.div`
  width: 210px;
  border-left: 1px solid #D9D9D9;
`

const Modal: React.FC<RightPanelModalProps> = ({
  header,
  footer,
  body,
  panelContent
}) => {
  return (
    <PrimaryLayout>
      {header}
      <Layout>
        <LeftSection>
          {body}
          {footer}
        </LeftSection>
        <RightSection>{panelContent}</RightSection>
      </Layout>
    </PrimaryLayout>
  )
}

Modal.defaultProps = defaultProps

export default withModalWrapper(Modal)
