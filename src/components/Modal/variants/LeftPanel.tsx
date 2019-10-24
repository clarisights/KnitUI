import React from "react"
import { BaseLayout } from "./styledComponents"
import { PanelModalProps } from "./types"
import { getChildrenWithTypes } from "../helpers"
import { Layout, PanelSection, Content } from "./styledComponents"
import { Header, Footer, Main } from "../components"

const LeftPanelModal: React.FC<PanelModalProps> = ({
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
        <PanelSection customProps={{ location: "left" }}>
          {childrenToRender["panel"]}
        </PanelSection>
        <Content>
          <Main>{childrenToRender["body"]}</Main>
          <Footer>{childrenToRender["footer"]}</Footer>
        </Content>
      </Layout>
    </BaseLayout>
  )
}

export default LeftPanelModal
