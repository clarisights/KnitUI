import React from "react"
import styled from "styled-components"
import { BaseLayout, VerticalLayoutContent } from "./styledComponents"
import { PanelModalProps } from "./types"
import { Header, Footer, Main } from "../components"
import { getChildrenWithTypes } from "../helpers"

const BottomSection = styled.div`
  box-sizing: border-box;
  height: 8.4rem;
  border-top: ${({ theme: { knitui } }) => knitui.modalBorder};
`

const BottomPanelModal: React.FC<PanelModalProps> = ({
  maxContentHeight,
  minContentHeight,
  children,
}) => {
  const childrenArray = React.Children.toArray(children)
  const childrenToRender = getChildrenWithTypes(childrenArray)
  return (
    <BaseLayout>
      <Header>{childrenToRender["header"]}</Header>
      <VerticalLayoutContent
        customProps={{ maxContentHeight, minContentHeight }}>
        <Main>{childrenToRender["body"]}</Main>
        <Footer>{childrenToRender["footer"]}</Footer>
        <BottomSection>{childrenToRender["panel"]}</BottomSection>
      </VerticalLayoutContent>
    </BaseLayout>
  )
}

export default BottomPanelModal
