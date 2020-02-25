import { ReactNode } from "react"

export type TPlacement = "top" | "bottom" | "left" | "right"

export type TPosition = {
  top: number
  left: number
}

export type TTrigger = "click" | "hover" | "contextMenu"

export interface ITriggerProps {
  placement?: TPlacement
  position?: TPosition
  trigger?: TTrigger
  blockScroll?: boolean
  disableOutsideClick?: boolean
  getPopupContainer?: (ref: React.RefObject<HTMLElement>) => HTMLElement
  visible?: boolean
  onVisibleChange?: (visible: boolean) => void
  disabled?: boolean
  children?: React.ReactNode
  overlay: React.ReactNode
  defaultVisible?: boolean
}

export type TTarget = TPosition | ReactNode
