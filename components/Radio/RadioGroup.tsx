import React, { useState, cloneElement } from "react"
import _ from "lodash"
import { RadioGroupProps, RadioProps } from "./Interface"
import Radio from "./Radio"

const renderRadio = (props, value, setValue) => {
  const propsToPass = _.omit(props, ["children", "defaultValue", "className"])
  let Radios = props.children || <></>
  if (!Array.isArray(Radios)) Radios = [Radios]
  return Radios.map((radio, index) => {
    return cloneElement(radio, {
      setValue,
      style: props.style,
      key: index,
      checked: value === radio.props.value,
      ...propsToPass,
    })
  })
}

const RadioGroup: React.FC<RadioGroupProps> & {
  Item: React.FC<RadioProps>
} = props => {
  const [value, setValue] = useState(props.defaultValue || null)

  return <>{renderRadio(props, value, setValue)}</>
}

RadioGroup.defaultProps = {
  size: "medium",
}

RadioGroup.Item = Radio

export default RadioGroup
