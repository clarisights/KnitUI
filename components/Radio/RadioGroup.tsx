import React, {
  SFC,
  ReactNode,
  CSSProperties,
  Component,
  cloneElement,
} from "react"
import _ from "lodash"
import { RadioProps } from "./Radio"

export interface RadioChangeEventTarget extends RadioProps {
  checked: boolean
}

type size = "small" | "medium"

export interface RadioChangeEvent {
  target: RadioChangeEventTarget
  stopPropagation: () => void
  preventDefault: () => void
  nativeEvent: MouseEvent
}

interface RadioGroupProps {
  /** Value of the radio group */
  value?: any
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
  /** Whether the group is disabled */
  disabled?: boolean
}

const renderRadio = (props, value, setValue) => {
  const propsToPass = _.omit(props, ["children"])
  let Radios = props.children || <></>
  if (!Array.isArray(Radios)) Radios = [Radios]
  return Radios.map((Radio, index) => {
    return cloneElement(Radio, {
      groupValue: value,
      setValue,
      key: index,
      ...propsToPass,
    })
  })
}

export default class RadioGroup extends Component<RadioGroupProps, any> {
  static Item: React.FunctionComponent<RadioProps>

  static defaultProps = {
    size: "medium",
  }

  state = {
    value: this.props.value || this.props.defaultValue,
  }

  setValue = value => {
    this.setState({ value })
  }
  render() {
    return <div>{renderRadio(this.props, this.state.value, this.setValue)}</div>
  }
}
