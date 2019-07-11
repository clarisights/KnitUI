import React, { useState, cloneElement } from "react"
import _ from "lodash"
import { RadioGroupProps, RadioProps } from "./Interface"
import Radio from "./Radio"

const renderRadio = (props, value, setValue) => {
  const propsToPass = _.omit(props, ["children", "defaultValue"])
  let Radios = props.children || <></>
  if (!Array.isArray(Radios)) Radios = React.Children.toArray(Radios)
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

const getDefaultValue = radios => {
  const child = React.Children.count(radios)
  if (child < 2) {
    // Optionally throw error if need be
    console.error("Add 2 or more Radio Items to the Group")
  }
  switch (true) {
    case child > 1:
      const len = radios.length - 1
      for (const radio in radios) {
        if (radios[len - Number(radio)].props.checked) {
          return radios[len - Number(radio)].props.value
        }
      }
      return null
    case child === 1:
      return radios.props.checked ? radios.props.value : null
    default:
      return null
  }
}

const RadioGroup: React.FC<RadioGroupProps> & {
  Item: React.FC<RadioProps>
} = props => {
  const radioValue = getDefaultValue(props.children)
  const [value, setValue] = useState(radioValue || props.defaultValue)

  return <>{renderRadio(props, value, setValue)}</>
}

RadioGroup.defaultProps = {
  size: "medium",
}

RadioGroup.Item = Radio

export default RadioGroup
