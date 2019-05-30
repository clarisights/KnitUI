import React, { useEffect, SFC, ReactNode, CSSProperties } from "react"
import { StyledRadio } from './styledRadio'

type SizeType = "small" | "default"

export interface RadioProps {
  /** whether checked by default */
  defaultChecked?: boolean
  /** called when switch is checked or unchecked */
  onChange?: (checked: boolean) => void | any
  /** whether switch is checked */
  checked?: boolean
  /** whether switch is disabled */
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
  size?: SizeType
  /** value of the checkbox */
  value?: any
  /** Value of the radio group */
  groupValue?: any
  /** Function to set the value of radio on the group */
  setValue?: (val: any) => void | any
}

const isChecked = (groupValue, value) => groupValue === value

const Radio: SFC<RadioProps> = props => {
  const { style, className, children, labelStyle, setValue, value, groupValue } = props
  return (
    <label
      className={className}
      style={{display: 'flex', ...style}}
    >
      <StyledRadio onChange={() => setValue && setValue(value)} prefixCls="knit-radio" checked={isChecked(groupValue, value)} value={value} type="radio" {...props} />
      {children !== undefined && <span style={labelStyle}>{children}</span>}
    </label>
  )

}

export default Radio
