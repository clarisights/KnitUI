import { IStyled } from "../../../common/types"

export interface ModalProps {
  maxContentHeight: string
  minContentHeight: string
}

export interface PanelModalProps extends ModalProps {
  location?: string
}

export type IStyledPanelModal = IStyled<PanelModalProps>

export type IStyledModal = IStyled<ModalProps>
