import React from "react"
import { OptionDescription, VerticalWrapper } from "./Option.styles"

const OptionText = props => {
  const { description, children } = props
  return (
    <VerticalWrapper>
      <span>{children}</span>
      {description && <OptionDescription>{description}</OptionDescription>}
    </VerticalWrapper>
  )
}

export default OptionText
