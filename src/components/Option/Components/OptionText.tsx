import React from "react"
import { OptionDescription, VerticalWrapper, StyledOptionText } from "./Option.styles"

const OptionText = props => {
  const { description, children } = props
  return (
    <VerticalWrapper>
      <StyledOptionText>{children}</StyledOptionText>
      {description && <OptionDescription>{description}</OptionDescription>}
    </VerticalWrapper>
  )
}

export default OptionText
