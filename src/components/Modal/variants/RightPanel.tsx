import React from "react"
import styled from "styled-components"

import { BaseLayout } from "./Base"
import { PanelModalProps } from "./interfaces"

const Layout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  flex: 1 1 auto;
`

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

const RightSection = styled.div`
  width: 21rem;
  border-left: ${({ theme: { knitui } }) => knitui.modalBorder};
`

const RightPanelModal: React.FC<PanelModalProps> = ({
  header,
  footer,
  body,
  panelContent,
}) => {
  return (
    <BaseLayout>
      {header}
      <Layout>
        <LeftSection>
          {body}
          {footer}
        </LeftSection>
        <RightSection>{panelContent}</RightSection>
      </Layout>
    </BaseLayout>
  )
}

export default RightPanelModal
