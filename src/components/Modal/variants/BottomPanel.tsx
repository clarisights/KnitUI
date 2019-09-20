import React from "react"
import styled from "styled-components"
import { BaseLayout, VerticalLayoutContent } from "./styledComponents"
import { PanelModalProps } from "./types"

const BottomSection = styled.div`
  box-sizing: border-box;
  height: 8.4rem;
  border-top: ${({ theme: { knitui } }) => knitui.modalBorder};
`

const BottomPanelModal: React.FC<PanelModalProps> = ({
  header,
  footer,
  body,
  panelContent,
  maxContentHeight,
  minContentHeight
}) => {
  return (
    <BaseLayout>
      {header}
      <VerticalLayoutContent customProps={{maxContentHeight, minContentHeight}}>
        {body}
        {footer}
        <BottomSection>{panelContent}</BottomSection>
      </VerticalLayoutContent>
    </BaseLayout>
  )
}

export default BottomPanelModal
