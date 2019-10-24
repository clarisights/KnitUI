import { ReactNode } from "react"
import { BaseComponentProps } from "../../common/types"
import { fontSizeType } from "../../common/types"

export interface TitleProps {
  title: string
  // FontSize is optional with default value 2rem
  fontSize?: fontSizeType
}

export interface HeaderProps {
  /** LeftSection can be either Title with string passed in object, or
   * ReactNode.
   * @type {TitleProps | ReactNode}
   */
  noFill?: boolean
}

export interface ModalWrapperProps extends BaseComponentProps {
  /** The padding values to be applied */
  padding?: { vertical: string; horizontal: string }
  /** Size values representing the amount of physical space occupied */
  size?: "small" | "medium" | "large" | "x-large"
  /** The DOM node under which the modal should reside */
  getContainer?: () => HTMLElement
  /** Controls the visibility of the modal */
  visible?: boolean
  /** Function to be executed when the modal is dismissed */
  onClose: () => void
  /** Addon panel that is attached to the modal */
  panel?: "left" | "right" | "bottom"
  /** to unmount child compenents on onClose */
  destroyOnClose?: boolean
}

export interface IStyledDialog {
  customProps: ModalWrapperProps
  theme: any
  [propName: string]: any
}
