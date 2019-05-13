import React, { useState } from "react"
import styled from "styled-components"

import withModalWrapper from "./withModalWrapper"

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
}) => {
  return (
    <>
      {header}
      <Layout>
        <LeftSection>
          Left Section
        </LeftSection>
        <RightSection>
          {body}
          {footer}
        </RightSection>
      </Layout>
    </>
  )
}

Modal.defaultProps = defaultProps

export default withModalWrapper(Modal)
