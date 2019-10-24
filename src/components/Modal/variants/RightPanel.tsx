import React from "react"
import { BaseLayout } from "./styledComponents"
import { PanelModalProps } from "./types"
import { Layout, PanelSection, Content } from "./styledComponents"
import { Header, Footer, Main } from "../components"
import { getChildrenWithTypes } from "../helpers"

const RightPanelModal: React.FC<PanelModalProps> = ({
  maxContentHeight,
  minContentHeight,
  children,
}) => {
  const childrenArray = React.Children.toArray(children)
  const childrenToRender = getChildrenWithTypes(childrenArray)
  return (
    <BaseLayout>
      <Header>{childrenToRender["header"]}</Header>
      <Layout customProps={{ maxContentHeight, minContentHeight }}>
        <Content>
          <Main>{childrenToRender["body"]}</Main>
          <Footer>{childrenToRender["footer"]}</Footer>
        </Content>
        <PanelSection customProps={{ location: "right" }}>
          {childrenToRender["panel"]}
        </PanelSection>
      </Layout>
    </BaseLayout>
  )
}

export default RightPanelModal
