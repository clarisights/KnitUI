import React, { ReactNode, useState, useEffect, useRef } from "react"
import _ from "lodash"

import { IInputProps } from "./types"
import { getIconSize } from "./utils"

import Icon from "../Icon"
import {
  StyledInput,
  StyledTextArea,
  AddonBeforeSpan,
  AddonAfterSpan,
  AddonContainer,
  StyledLabel,
  NotificationContainer,
  IconBackground,
  InputWrapper,
} from "./styledComponents"

const RenderInput = React.forwardRef<HTMLElement, IInputProps>((props, ref) => {
  const {
    placeholder,
    value,
    onChange,
    state,
    label,
    inputSize = "default",
    type = "default",
    textareaResize = "both",
    notification,
    className,
    style,
    addonAfter,
    addonBefore,
    disabled,
    ...rest
  } = props
  const customProps = {
    inputSize,
    state,
  }

  const commonProps = {
    ref,
    placeholder,
    customProps,
    className,
    style,
    value,
    onChange,
    disabled,
    ...rest,
  }

  if (props.type === "textarea") {
    return <StyledTextArea {...commonProps} textareaResize={textareaResize} />
  }

  return (
    <StyledInput
      type={
        props.type === "password"
          ? "password"
          : props.type === "number"
          ? "number"
          : "text"
      }
      {...commonProps}
    />
  )
})

function renderInputAddons(
  children: React.ReactElement<any>,
  props: IInputProps
) {
  const {
    addonAfter,
    addonBefore,
    label,
    notification,
    inputSize,
    state,
  } = props
  const customProps = {
    inputSize,
    state,
  }

  let labelDOM: null | ReactNode = null
  let notificationDOM: null | ReactNode = null
  let addonDOM: ReactNode = children

  if (label) {
    labelDOM = label
    if (_.isString(label)) {
      labelDOM = <StyledLabel customProps={customProps}>{label}</StyledLabel>
    }
  }

  if (notification) {
    notificationDOM = notification
    if (_.isString(notification)) {
      notificationDOM = (
        <NotificationContainer customProps={customProps}>
          {notification}
        </NotificationContainer>
      )
    }
  }

  if (addonBefore) {
    addonDOM = (
      <AddonBeforeSpan iconSize={getIconSize(inputSize)}>
        {addonBefore ? (
          <AddonContainer
            css={`
              left: 1rem;
            `}>
            {addonBefore}
          </AddonContainer>
        ) : null}
        {children}
      </AddonBeforeSpan>
    )
  }
  if (addonAfter) {
    addonDOM = (
      <AddonAfterSpan iconSize={getIconSize(inputSize)}>
        {children}
        {addonAfter ? (
          <AddonContainer
            css={`
              right: 1rem;
            `}>
            {addonAfter}
          </AddonContainer>
        ) : null}
      </AddonAfterSpan>
    )
  }
  return (
    <>
      {labelDOM}
      {addonDOM}
      {notificationDOM}
    </>
  )
}

const InputRef = props => {
  const [currentValue, setCurrentValue] = useState(props.value || "")
  const [isPasswordField, setIsPasswordField] = useState(
    props.type === "password"
  )
  const [isOverflow, setIsOverflow] = useState(false)

  const inputRef = props.ref || useRef<HTMLInputElement>()

  useEffect(() => {
    // To update the current input value
    setCurrentValue(props.value)
  }, [props.value])

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

    if (inputRef.current) {
      if (
        inputRef.current.scrollWidth > inputRef.current.clientWidth &&
        !isOverflow
      ) {
        setIsOverflow(true)
      } else if (
        inputRef.current.scrollWidth <= inputRef.current.clientWidth &&
        isOverflow
      ) {
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
    return "text"
  }

  // Implemented to save the effort of adding `getIconSize` on every Icon component
  const AddonIcons = iconProps => (
    <Icon size={getIconSize(props.inputSize)} {...iconProps} />
  )

  const InputElem = (
    <InputWrapper {...props} customProps={customProps} isOverflow={isOverflow}>
      <RenderInput
        {...props}
        ref={inputRef}
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
    if (currentValue && currentValue.length > 0) {
      addonAfter = (
        <IconBackground bgSize={getIconSize(props.inputSize)}>
          <AddonIcons type="oClose" fill="#000000" onClick={clearInput} />
        </IconBackground>
      )
    } else {
      addonAfter = <AddonIcons type="oSearch" fill="#a6a6a6" />
    }
  } else if (props.type === "password") {
    if (isPasswordField) {
      addonAfter = (
        <AddonIcons
          type="oVisibility"
          fill="#000000"
          onClick={togglePasswordField}
        />
      )
    } else {
      addonAfter = (
        <AddonIcons
          type="oVisibilityOff"
          fill="#000000"
          onClick={togglePasswordField}
        />
      )
    }
  } else if (props.state === "success") {
    addonAfter = <AddonIcons type="oCheckCircleOutline" fill="#036600" />
  } else if (props.state === "warning") {
    addonAfter = <AddonIcons type="oWarning" fill="#FFC700" />
  } else if (props.state === "error") {
    addonAfter = <AddonIcons type="oErrorOutline" fill="#990000" />
  }

  return renderInputAddons(InputElem as React.ReactElement<any>, {
    ...props,
    addonAfter,
  })
}

const Input = React.forwardRef<HTMLElement, IInputProps>((props, ref) => {
  return <InputRef {...props} ref={ref} />
})

export default Input
