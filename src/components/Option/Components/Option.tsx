import React, { FC, Children, ReactNode } from "react"
import Icon from "../../Icon"
import Label from "../../Label"
import Avatar from "../../Avatar"
import OptionGroup from "./OptionGroup"
import { IOption, TIconType, IOptionIconProps, IOptionText } from "../types"
import {
  OptionWrapper,
  OptionDescription,
  VerticalWrapper,
  FlexWrapper,
  OptionItemWrapper,
} from "./Option.styles"

const OptionText: IOptionText = (props) => {
  const { description, children} = props
  return (
  <VerticalWrapper>
    <span>{children}</span>
    {description && <OptionDescription>{description}</OptionDescription>}
  </VerticalWrapper>
  )
}


const Option: IOption = props => {
  const {
    value,
    customStyles,
    onClick,
    children,
    disabled = false,
    ...rest
  } = props

  // Filter children based on their alignment
  const rightChildren = Children.toArray(children).filter(
    comp => comp.props.align === "right"
  )
  const leftChildren = Children.toArray(children).filter(
    comp => comp.props.align !== "right"
  )

  return (
    <OptionWrapper
      onClick={onClick ? e => onClick(e, value) : () => null}
      style={customStyles}
      {...rest}>
      <FlexWrapper>{leftChildren}</FlexWrapper>
      <FlexWrapper>{rightChildren}</FlexWrapper>
    </OptionWrapper>
  )
}

// Wrap all option sub-components in a common wrapper and pass all props to the corresponding component
Option.Icon = OptionItemWrapper(Icon)
Option.Text = OptionItemWrapper(OptionText)
Option.Tag = OptionItemWrapper(Label)
Option.Avatar = OptionItemWrapper(Avatar)
Option.OptionGroup = OptionGroup

export default Option
