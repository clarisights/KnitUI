import { CSSProperties, ReactNode } from "react"

export interface RadioWrapperProps {
  prefixCls?: string
  className?: string
  style?: CSSProperties
  checked?: boolean
  disabled?: boolean
  onFocus?: (e) => void | any
  onBlur?: (e) => void | any
  onChange?: (e) => void | any
  onClick?: (e) => void | any
  tabIndex?: number
  readOnly?: boolean
  autoFocus?: boolean
  value?: any
  setValue?: (e) => void | any
  size?: string
  theme?: object
}

type size = "small" | "medium"

export interface RadioChangeEvent {
  target: RadioChangeEventTarget
  stopPropagation: () => void
  preventDefault: () => void
  nativeEvent: MouseEvent
}

export interface RadioGroupProps {
  /** Custom styles for each radio button */
  style?: CSSProperties
  /** Function to call when radio is changed */
  onChange?: (e: RadioChangeEvent) => void
  /** default value of the group */
  defaultValue?: any
  /** Size of the radio items */
  size?: size
  /** children nodes */
  children?: ReactNode
  /** Whether the group is disabled */
  disabled?: boolean
  /** Custom class that needs ot be passed to the group */
  className?: string
}

export interface RadioChangeEventTarget extends RadioProps {
  checked: boolean
}

export interface RadioProps {
  /** whether radio is disabled */
  disabled?: boolean
  /** additional class name of root node */
  className?: string
  /** autofocus on mount */
  autoFocus?: boolean
  /** Child to render near the checkbox */
  children?: ReactNode
  /** Custom styles applied to the root element */
  style?: CSSProperties
  /** Custom styles for the checkbox */
  labelStyle?: CSSProperties
  /** size of the switch */
  size?: size
  /** value of the checkbox */
  value?: any
  /** if the radio is checked */
  checked?: boolean
}
