import React, { Children } from "react"
import Avatar from "../../Avatar"
import Icon from "../../Icon"
import Label from "../../Label"
import { IOption } from "../types"
import { FlexWrapper, OptionItemWrapper, OptionWrapper } from "./Option.styles"
import OptionGroup from "./OptionGroup"
import OptionText from "./OptionText"

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
    comp => comp!.props.align === "right"
  )
  const leftChildren = Children.toArray(children).filter(
    comp => comp!.props.align !== "right"
  )

  return (
    <OptionWrapper
      onClick={onClick ? e => onClick(e, value) : () => null}
      style={customStyles}
      disabled={disabled}
      {...rest}>
      <FlexWrapper>{leftChildren}</FlexWrapper>
      <FlexWrapper>{rightChildren}</FlexWrapper>
    </OptionWrapper>
  )
}

// const AvatarWrapper = props => <Avatar {...props} alignStart />

// Wrap all option sub-components in a common wrapper and pass all props to the corresponding component
Option.Icon = OptionItemWrapper(Icon)
Option.Text = OptionItemWrapper(OptionText)
Option.Tag = OptionItemWrapper(Label)
Option.Avatar = OptionItemWrapper(Avatar)
Option.OptionGroup = OptionGroup

export default Option
