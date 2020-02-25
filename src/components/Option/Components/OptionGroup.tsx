import React from "react"
import { IOptionGroupProps } from "../types"
import { VerticalWrapper, OptionDescription } from "./Option.styles"

const OptionGroup = (props: IOptionGroupProps) => {
  const { children, title } = props
  return (
    <VerticalWrapper>
      <OptionDescription>{title}</OptionDescription>
      <span>{children}</span>
    </VerticalWrapper>
  )
}

export default OptionGroup
