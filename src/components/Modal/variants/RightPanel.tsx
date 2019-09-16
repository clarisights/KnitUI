import React from "react"
import { BaseLayout } from "./styledComponents"
import { PanelModalProps } from "./types"
import { Layout, PanelSection, Content } from "./styledComponents"

const RightPanelModal: React.FC<PanelModalProps> = ({
  header,
  footer,
  body,
  panelContent,
  maxContentHeight
}) => {
  return (
    <BaseLayout>
      {header}
      <Layout customProps={{maxContentHeight}}>
        <Content>
          {body}
          {footer}
        </Content>
        <PanelSection customProps={{location: "right"}}>
          {panelContent}
        </PanelSection>
      </Layout>
    </BaseLayout>
  )
}

export default RightPanelModal
