import { CSSProperties, FC, ReactNode, SyntheticEvent } from "react"
import { IAvatarProps } from "../Avatar/types"
import { IIconProps } from "../Icon/Icon"
import { LabelPropTypes } from "../Label/types"

export type TIconType = {
  left?: string | ReactNode
  right?: string | ReactNode
}

export interface IOptionProps {
  value: string | number
  disabled?: boolean
  selected?: boolean
  customStyles?: CSSProperties
  onClick?: (e: SyntheticEvent, value: string | number) => void
}

export interface IOption extends FC<IOptionProps> {
  Tag: FC<LabelPropTypes>
  Avatar: FC<IOptionAvatarProps>
  Text: IOptionText
  Icon: FC<IOptionIconProps>
  OptionGroup: FC<IOptionGroupProps>
}

interface IOptionTextProps {
  description?: string
  children: ReactNode
}

interface IOptionText extends FC<IOptionTextProps> {}

export interface IOptionGroupProps {
  title?: string
  children?: ReactNode[] | ReactNode
}

export interface IOptionIconProps extends IIconProps {
  align?: string
}

export interface IOptionAvatarProps extends IAvatarProps {
  align?: string
  alignStart?: boolean
}
