import {
  BaseComponentProps,
} from "../../common/types"
import React, { ReactNode } from "react"

export interface OmniSearchProps extends BaseComponentProps {
  /** Whether the search box is visible or not  */
  visible: boolean

  /** The value to be seen in the input box */
  value: string

  /** placeholder string when the value is an empty string */
  placeholder?: string

  /** The dropdown component that is to be rendered below the search input box */
  dropdown?: ReactNode | null

  /** The callback made when the user changes the input */
  onChange: (e: React.FormEvent<HTMLInputElement>) => void

  /** handler that is run when close is initiated (eg. click outside) */
  onClose: () => void
}
