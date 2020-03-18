import { ReactNode } from "react"
import { BaseComponentProps } from "../../common/types"

export interface ILinkProps extends BaseComponentProps {
  href?: string
  /** whether to show underline or not, default to true */
  underline?: boolean
  children: ReactNode
  /** Disabled link, default to false */
  disabled?: boolean
  /** Opens link in a new tab, default to false */
  newTab?: boolean
}
