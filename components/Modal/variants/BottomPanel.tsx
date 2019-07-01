import React from "react"
import styled from "styled-components"

import { BaseLayout } from "./Base"
import { PanelModalProps } from "./interfaces"

const BottomSection = styled.div`
  box-sizing: border-box;
  height: 8.4rem;
  border-top: ${({ theme }) => theme.modalBorder};
`

const BottomPanelModal: React.FC<PanelModalProps> = ({
  header,
  footer,
  body,
  panelContent,
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

export default BottomPanelModal
