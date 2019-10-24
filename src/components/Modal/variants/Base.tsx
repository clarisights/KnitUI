import React from "react"
import { Header, Footer, Main } from "../components"
import { BaseLayout, VerticalLayoutContent } from "./styledComponents"
import { ModalProps } from "./types"
import { getChildrenWithTypes } from "../helpers"

const BaseModal: React.FC<ModalProps> = ({
  maxContentHeight,
  minContentHeight,
  padding,
  children,
}) => {
  const childrenArray = React.Children.toArray(children)
  const childrenToRender = getChildrenWithTypes(childrenArray)
  return (
    <BaseLayout>
      <Header>{childrenToRender["header"]}</Header>
      <VerticalLayoutContent
        customProps={{ maxContentHeight, minContentHeight }}>
        <Main customProps={{ padding }}>{childrenToRender["body"]}</Main>
        <Footer>{childrenToRender["footer"]}</Footer>
      </VerticalLayoutContent>
    </BaseLayout>
  )
}

export default BaseModal
