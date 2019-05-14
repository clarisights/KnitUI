import React, { ReactNode } from "react"
import withModalWrapper from "./withModalWrapper"
import styled from "styled-components"

export interface ModalProps {
  header: { title: string, rightSection?: ReactNode },
  body: ReactNode,
  footer: ReactNode,
  padding?: { vertical: string, horizontal: string },
}

export const BaseLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const BaseModal: React.FC<ModalProps> = ({
   header,
   body,
   footer,
  }) => {
  return (
    <BaseLayout>
      {header}
      {body}
      {footer}
    </BaseLayout>
  )
}

export default withModalWrapper(BaseModal)
