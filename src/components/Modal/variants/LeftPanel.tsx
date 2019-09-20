import React from "react"
import { BaseLayout } from "./styledComponents"
import { PanelModalProps } from "./types"
import { Layout, PanelSection, Content } from "./styledComponents"


const LeftPanelModal: React.FC<PanelModalProps> = ({
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
      <Layout customProps={{maxContentHeight, minContentHeight}}>
        <PanelSection customProps={{location: "left"}}>{panelContent}</PanelSection>
        <Content>
          {body}
          {footer}
        </Content>
      </Layout>
    </BaseLayout>
  )
}

export default LeftPanelModal
