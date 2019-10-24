import { IStyled } from "../../../common/types"

export interface ModalProps {
  maxContentHeight: string
  minContentHeight: string
  padding?: { vertical: string; horizontal: string }
}

export interface PanelModalProps extends ModalProps {
  location?: string
}

export type IStyledPanelModal = IStyled<PanelModalProps>

export type IStyledModal = IStyled<ModalProps>
