import React, { SFC } from "react"
import RadioWrapper from "./RadioWrapper"
import { RadioProps } from "./Interface"

const Radio: SFC<RadioProps> = props => {
  const { style, className, children, labelStyle, value, ...otherProps } = props
  return (
    <label className={className} style={{ display: "flex", ...style }}>
      <RadioWrapper
        prefixCls="knit-radio"
        value={value}
        {...props}
        {...otherProps}
      />
      {children && <span style={labelStyle}>{children}</span>}
    </label>
  )
}

export default Radio
