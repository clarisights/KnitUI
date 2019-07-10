import { ReactNode } from "react"

export interface ModalProps {
  header: ReactNode
  body: ReactNode
  footer: ReactNode
}

export interface PanelModalProps extends ModalProps {
  panelContent: ReactNode
}
