import React, { Component, cloneElement } from "react"
import _ from "lodash"
import { RadioGroupProps, RadioProps } from "./Interface"

const renderRadio = (props, value, setValue) => {
  const propsToPass = _.omit(props, ["children", "defaultValue"])
  let Radios = props.children || <></>
  if (!Array.isArray(Radios)) Radios = [Radios]
  return Radios.map((Radio, index) => {
    return cloneElement(Radio, {
      setValue,
      style: props.style,
      key: index,
      checked: value === Radio.props.value,
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
    value: this.props.defaultValue || null,
  }

  setValue = value => {
    this.setState({ value })
  }
  render() {
    return <>{renderRadio(this.props, this.state.value, this.setValue)}</>
  }
}
