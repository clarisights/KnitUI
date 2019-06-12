import React, { useContext } from "react"
import styled, { ThemeContext } from "styled-components"

import { BaseLayout } from "./Base"
import { PanelModalProps } from "./interfaces"

const BottomPanelModal: React.FC<PanelModalProps> = ({
  header,
  footer,
  body,
  panelContent,
}) => {
  const { modalBorder } = useContext(ThemeContext)
  const BottomSection = styled.div`
    box-sizing: border-box;
    height: 8.4rem;
    border-top: ${modalBorder};
  `
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
