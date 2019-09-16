import { ReactNode } from "react"
import { IStyled } from "../../../common/types"

export interface ModalProps {
  header: ReactNode
  body: ReactNode
  footer: ReactNode
  maxContentHeight: string
}

export interface PanelModalProps extends ModalProps {
  panelContent: ReactNode
  location?: string
}


export type IStyledPanelModal = IStyled<PanelModalProps>

export type IStyledModal = IStyled<ModalProps>
