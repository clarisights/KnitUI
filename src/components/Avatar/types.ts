import { SyntheticEvent } from 'react'

export interface IAvatarProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: string
  onClick?: (event?: SyntheticEvent) => void
  picture?: string
  name?: string
  disabled?: boolean
}

export interface IAvatarBaseProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isPicture: boolean
  isName: boolean
  isIcon: boolean
  size: string
  disabled: boolean
}