import React from "react"
import { Header, ScrollWrapper } from "../components"
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
        <ScrollWrapper padding={padding}>
          {childrenToRender["body"]}
          {childrenToRender["footer"]}
        </ScrollWrapper>
      </VerticalLayoutContent>
    </BaseLayout>
  )
}

export default BaseModal
