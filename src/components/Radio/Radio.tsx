import React, { SFC } from "react"
import RadioWrapper from "./RadioWrapper"
import { RadioProps } from "./Interface"

const Radio: SFC<RadioProps> = props => {
  const { style, className, children, labelStyle, value } = props
  return (
    <label
      className={className}
      style={{ display: "flex", ...style, width: "fit-content" }}>
      <RadioWrapper value={value} {...props} />
      {children && <span style={labelStyle}>{children}</span>}
    </label>
  )
}

export default Radio
