import { CSSProperties, SyntheticEvent, ReactNode, FC } from "react"
import { IIconProps } from "../Icon/Icon"

export type TIconType = {
  left?: string | ReactNode
  right?: string | ReactNode
}

export interface IOptionProps {
  value: string | number
  disabled?: boolean
  customStyles?: CSSProperties
  onClick?: (e: SyntheticEvent, value: string | number) => void
}

export interface IOption extends FC<IOptionProps> {
  Tag: FC
  Avatar: FC
  Text: FC
  Icon: FC<IOptionIconProps>
  OptionGroup: FC<IOptionGroupProps>
}

interface OptionTextProps {
  description: string
  children: ReactNode
}

export interface IOptionText extends FC<OptionTextProps> {}

export interface IOptionGroupProps {
  title?: string
  children?: ReactNode[] | ReactNode
}

export interface IOptionIconProps extends IIconProps {
  align?: string
}
