import React from "react"
import { BaseLayout, VerticalLayoutContent  } from "./styledComponents"
import { ModalProps } from "./types"

const BaseModal: React.FC<ModalProps> = ({ header, body, footer, maxContentHeight }) => {
  return (
    <BaseLayout>
      {header}
      <VerticalLayoutContent customProps={{maxContentHeight}}>
        {body}
        {footer}
      </VerticalLayoutContent>
    </BaseLayout>
  )
}

export default BaseModal
