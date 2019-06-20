import React from "react"
import styled from "styled-components"

import { ModalProps } from "./interfaces"

export const BaseLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const BaseModal: React.FC<ModalProps> = ({ header, body, footer }) => {
  return (
    <BaseLayout>
      {header}
      {body}
      {footer}
    </BaseLayout>
  )
}

export default BaseModal
