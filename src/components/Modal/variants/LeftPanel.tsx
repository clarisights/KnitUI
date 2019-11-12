import React from "react"
import { BaseLayout } from "./styledComponents"
import { PanelModalProps } from "./types"
import { getChildrenWithTypes } from "../helpers"
import { Layout, PanelSection, Content } from "./styledComponents"
import { Header, ScrollWrapper } from "../components"

const LeftPanelModal: React.FC<PanelModalProps> = ({
  maxContentHeight,
  minContentHeight,
  children,
  padding,
}) => {
  const childrenArray = React.Children.toArray(children)
  const childrenToRender = getChildrenWithTypes(childrenArray)
  return (
    <BaseLayout>
      <Header>{childrenToRender["header"]}</Header>
      <Layout customProps={{ maxContentHeight, minContentHeight }}>
        <PanelSection customProps={{ location: "left" }}>
          {childrenToRender["panel"]}
        </PanelSection>
        <Content>
          <ScrollWrapper padding={padding}>
            {childrenToRender["body"]}
            {childrenToRender["footer"]}
          </ScrollWrapper>
        </Content>
      </Layout>
    </BaseLayout>
  )
}

export default LeftPanelModal
