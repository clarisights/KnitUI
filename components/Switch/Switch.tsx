import React, { SFC, ReactNode } from "react"
import _ from "lodash"
import { StyledSwitch } from "./styledComponents"

type SizeType = "small" | "default"

interface SwitchProps {
  /** whether checked by default */
  defaultChecked?: boolean
  /** called when switch is checked or unchecked */
  onChange?: (checked: boolean) => void | any
  /** whether switch is checked */
  checked?: boolean
  /** whether switch is disabled */
  disabled?: boolean
  /** whether switch is in loading state */
  loading?: boolean
  /** additional class name of root node */
  className?: string
  /** autofocus on mount */
  autoFocus?: boolean
  /** size of the switch */
  size?: SizeType
  /** checked content inside switch */
  checkedChildren?: ReactNode | string
  /** unchecked content inside switch */
  unCheckedChildren?: ReactNode | string
}

const Switch: SFC<SwitchProps> = props => {
  const propsToPass = _.omit(props, ["loading"])
  return <StyledSwitch prefixCls="knit-switch" {...propsToPass} />
}

export default Switch
