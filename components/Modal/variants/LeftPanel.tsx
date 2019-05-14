import React, { ReactNode } from "react"
import styled from "styled-components"

import withModalWrapper from "./withModalWrapper"

import { ModalProps, defaultProps, PrimaryLayout } from './Default'

interface LeftPanelModalProps extends ModalProps {
  panelContent: ReactNode
}

const Layout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  flex: 1 1 auto;
`

const LeftSection = styled.div`
  width: 210px;
  border-right: 1px solid #D9D9D9;
`

const RightSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

const Modal: React.FC<LeftPanelModalProps> = ({
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
          {panelContent}
        </LeftSection>
        <RightSection>
          {body}
          {footer}
        </RightSection>
      </Layout>
    </PrimaryLayout>
  )
}

Modal.defaultProps = defaultProps

export default withModalWrapper(Modal)
