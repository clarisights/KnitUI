import { ReactNode } from "react"
import { BaseComponentProps } from "../../common/types"

export interface ILinkProps extends BaseComponentProps {
  /** This is a placeholder description */
  href: string
  underline?: boolean
  children: ReactNode
  disabled?: boolean
  newTab?: boolean
}
