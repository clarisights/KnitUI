import React, { SFC, ReactNode, CSSProperties } from "react"
import { StyledRadio } from "./styledRadio"
import { RadioProps } from "./Interface"

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
