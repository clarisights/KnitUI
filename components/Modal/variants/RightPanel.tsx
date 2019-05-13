import React from "react"
import styled from "styled-components"

import withModalWrapper from "./withModalWrapper"

import { ModalProps, defaultProps } from './Default'

interface RightPanelModalProps extends ModalProps {}

const Layout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;s
`

const LeftSection = styled.div`
  width: 100%;
`

const RightSection = styled.div`
  width: 210px;
  border-left: 1px solid #D9D9D9;
`

const Modal: React.FC<RightPanelModalProps> = ({
  header,
  footer,
  body,
}) => {
  return (
    <>
      {header}
      <Layout>
        <LeftSection>
          {body}
          {footer}
        </LeftSection>
        <RightSection>Right Section</RightSection>
      </Layout>
    </>
  )
}

Modal.defaultProps = defaultProps

export default withModalWrapper(Modal)
