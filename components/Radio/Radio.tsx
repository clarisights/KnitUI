import React, { SFC, ReactNode, CSSProperties } from "react"
import { StyledRadio } from "./styledRadio"

type SizeType = "small" | "default"

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
  size?: SizeType
  /** value of the checkbox */
  value?: any
}

const Radio: SFC<RadioProps> = props => {
  const { style, className, children, labelStyle, value } = props
  return (
    <label className={className} style={{ display: "flex", ...style }}>
      <StyledRadio
        prefixCls="knit-radio"
        value={value}
        type="radio"
        {...props}
      />
      {children !== undefined && <span style={labelStyle}>{children}</span>}
    </label>
  )
}

export default Radio
