import React, { ReactNode } from "react"
import styled from "styled-components"

import withModalWrapper from "./withModalWrapper"
import { ModalProps, BaseLayout } from './Base'
import { border } from "../commonStyles"

interface BottomPanelModalProps extends ModalProps {
  panelContent: ReactNode
}

const BottomSection = styled.div`
  box-sizing: border-box;
  height: 8.4rem;
  border-top: ${border};
`

const BottomPanelModal: React.FC<BottomPanelModalProps> = ({
  header,
  footer,
  body,
  panelContent
}) => {
  return (
    <BaseLayout>
      {header}
      {body}
      {footer}
      <BottomSection>{panelContent}</BottomSection>
    </BaseLayout>
  )
}

export default withModalWrapper(BottomPanelModal)
