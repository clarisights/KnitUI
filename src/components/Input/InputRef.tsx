import React, { useState, useEffect, useRef } from "react"

import { IInputProps } from "./types"
import { getIconSize } from "./utils"

import RenderInput from "./RenderInput"
import renderInputAddons from "./InputAddons"
import { IconBackground, InputWrapper, AddonIcon } from "./styledComponents"

const InputRef = React.forwardRef<HTMLElement, IInputProps>((props, ref) => {
  const [currentValue, setCurrentValue] = useState<string | number | undefined>(
    props.value || ""
  )
  const [isPasswordField, setIsPasswordField] = useState(
    props.type === "password"
  )
  const [isOverflow, setIsOverflow] = useState(false)

  useEffect(() => {
    // To update the current input value
    setCurrentValue(props.value)
  }, [props.value])

  const currentRef = useRef<HTMLElement>(null) as React.MutableRefObject<
    HTMLElement
  >

  const customProps = {
    inputSize: props.inputSize,
    state: props.state,
  }

  const handleChange = e => {
    // Handle onChange if provided and update the input value
    if (props.onChange) {
      props.onChange(e)
    }

    setCurrentValue(e.target.value)
  }

  const handleFocus = e => {
    if (props.onFocus) {
      props.onFocus(e)
    }

    setIsOverflow(false)
  }

  const handleBlur = e => {
    if (props.onBlur) {
      props.onBlur(e)
    }

    if (currentRef.current) {
      const input = currentRef.current.children[0]

      if (input.scrollWidth > input.clientWidth && !isOverflow) {
        setIsOverflow(true)
      } else if (input.scrollWidth <= input.clientWidth && isOverflow) {
        setIsOverflow(false)
      }
    }
  }

  const clearInput = () => {
    setCurrentValue("")
  }

  const togglePasswordField = () => {
    setIsPasswordField(prevState => !prevState)
  }

  const getCurrentInputType = () => {
    // Get the input type. Useful while toggling password field.
    if (props.type === "number") {
      return "number"
    } else if (props.type === "textarea") {
      return "textarea"
    } else if (isPasswordField) {
      return "password"
    }
    return "default"
  }

  // Implemented to save the effort of adding `getIconSize` on every Icon component
  const Icon = iconProps => (
    <AddonIcon size={getIconSize(props.inputSize)} {...iconProps} />
  )

  const InputElem = (
    <InputWrapper
      inputSize={props.inputSize}
      type={props.type}
      state={props.state}
      addonAfter={props.addonAfter}
      ref={currentRef}
      customProps={customProps}
      isOverflow={isOverflow}>
      <RenderInput
        {...props}
        ref={ref}
        value={currentValue}
        onChange={handleChange}
        type={getCurrentInputType()}
        isOverflow={isOverflow}
        onBlur={handleBlur}
        onFocus={handleFocus}
      />
    </InputWrapper>
  )

  let addonAfter = props.addonAfter

  if (props.type === "search") {
    if (currentValue && currentValue.toString().length > 0) {
      addonAfter = (
        <IconBackground bgSize={getIconSize(props.inputSize)}>
          <Icon type="oClose" fill="#000000" onClick={clearInput} pointer />
        </IconBackground>
      )
    } else {
      addonAfter = <Icon type="oSearch" fill="#a6a6a6" />
    }
  } else if (props.type === "password") {
    if (isPasswordField) {
      addonAfter = (
        <Icon
          type="oVisibility"
          fill="#000000"
          onClick={togglePasswordField}
          pointer
        />
      )
    } else {
      addonAfter = (
        <Icon
          type="oVisibilityOff"
          fill="#000000"
          onClick={togglePasswordField}
          pointer
        />
      )
    }
  } else if (props.state === "success") {
    addonAfter = <Icon type="oCheckCircleOutline" fill="#036600" />
  } else if (props.state === "warning") {
    addonAfter = <Icon type="oWarning" fill="#FFC700" />
  } else if (props.state === "error") {
    addonAfter = <Icon type="oErrorOutline" fill="#990000" />
  }

  return renderInputAddons(InputElem as React.ReactElement<any>, {
    ...props,
    addonAfter,
  })
})

export default InputRef
