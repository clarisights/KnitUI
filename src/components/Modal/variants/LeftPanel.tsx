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
  width: 21rem;
  border-right: ${({ theme: { knitui } }) => knitui.modalBorder};
`

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

const LeftPanelModal: React.FC<PanelModalProps> = ({
  header,
  footer,
  body,
  panelContent,
}) => {
  return (
    <BaseLayout>
      {header}
      <Layout>
        <LeftSection>{panelContent}</LeftSection>
        <RightSection>
          {body}
          {footer}
        </RightSection>
      </Layout>
    </BaseLayout>
  )
}

export default LeftPanelModal
