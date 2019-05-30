import React, { SFC, ReactNode, CSSProperties, useState, cloneElement } from 'react'
import { RadioProps } from './Radio'

export interface RadioChangeEventTarget extends RadioProps {
  checked: boolean
}

type size = 'small' | 'medium'

export interface RadioChangeEvent {
  target: RadioChangeEventTarget
  stopPropagation: () => void
  preventDefault: () => void
  nativeEvent: MouseEvent
}

interface RadioGroupProps {
  /** Value of the radio group */
  value?: any,
  /** Custom styles for each radio button */
  radioStyle?: CSSProperties
  /** Function to call when radio is changed */
  onChange?: (e: RadioChangeEvent) => void
  /** default value of the group */
  defaultValue?: any
  /** Size of the radio items */
  size?: size
  /** children nodes */
  children?: ReactNode
}

const defaultRadioProps: RadioGroupProps = {
  size: 'medium'
}

const renderRadio = (props, value, setValue) => {
  return props.children.map((Radio, index) => {
    return cloneElement(Radio, {groupValue: value, setValue, key: index})
  })
}

const RadioGroup: SFC<RadioGroupProps> = props => {
  const [value, setValue] = useState(props.value || props.defaultValue)

  return (
    <div>
      {renderRadio(props, value, setValue)}
    </div>
  )
}

RadioGroup.defaultProps = defaultRadioProps

export default RadioGroup
