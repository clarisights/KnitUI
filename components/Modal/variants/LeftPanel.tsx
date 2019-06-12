import React, { useContext } from "react"
import styled, { ThemeContext } from "styled-components"

import { BaseLayout } from "./Base"
import { PanelModalProps } from "./interfaces"

const LeftPanelModal: React.FC<PanelModalProps> = ({
  header,
  footer,
  body,
  panelContent,
}) => {
  const { modalBorder } = useContext(ThemeContext)
  const Layout = styled.div`
    display: flex;
    flex-direction: row;
    align-items: stretch;
    flex: 1 1 auto;
  `

  const LeftSection = styled.div`
    width: 210px;
    border-right: ${modalBorder};
  `

  const RightSection = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
  `
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
