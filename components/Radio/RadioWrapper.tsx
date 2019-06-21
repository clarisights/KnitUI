import React, { SFC } from "react"
import { RadioWrapperProps } from "./Interface"
import {
  StyledRadioRoot,
  StyledRadioInput,
  StyledRadioInner,
} from "./styledRadio"

const RadioWrapper: SFC<RadioWrapperProps> = (props = defaultProps) => {
  const {
    prefixCls,
    className,
    style,
    size,
    disabled,
    readOnly,
    tabIndex,
    onClick,
    onFocus,
    onBlur,
    autoFocus,
    onChange,
    value,
    checked,
    setValue,
    ...others
  } = props

  const handleChange = e => {
    if (props.disabled) {
      return
    }
    if (setValue) {
      setValue(value)
    }
    if (onChange) {
      onChange({
        target: {
          ...props,
          checked: e.target.checked,
        },
        stopPropagation() {
          e.stopPropagation()
        },
        preventDefault() {
          e.preventDefault()
        },
        nativeEvent: e.nativeEvent,
      })
    }
  }

  // https://github.com/react-component/checkbox/blob/3efbcecbe41533c90a0844d836adbc28c8b0a7ff/src/Checkbox.jsx#L116
  // Pass aria and data, props, role the the created element
  const globalProps = Object.keys(others).reduce((prev, key) => {
    if (
      key.substr(0, 5) === "aria-" ||
      key.substr(0, 5) === "data-" ||
      key === "role"
    ) {
      prev[key] = others[key]
    }
    return prev
  }, {})

  const checkedClass = checked ? `${prefixCls}-checked` : ""
  const disabledClass = props.disabled ? `${prefixCls}-disabled` : ""
  const rootClass = `${prefixCls} ${className} ${checkedClass} ${disabledClass}`

  const styleProps = { size, disabled }

  return (
    <StyledRadioRoot className={rootClass} {...styleProps} style={style}>
      <StyledRadioInput
        name={name}
        type="radio"
        readOnly={readOnly}
        disabled={disabled}
        tabIndex={tabIndex}
        className={`${prefixCls}-input`}
        checked={checked}
        onClick={onClick}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={handleChange}
        autoFocus={autoFocus}
        value={value}
        {...globalProps}
      />
      <StyledRadioInner {...styleProps} className={`${prefixCls}-inner`} />
    </StyledRadioRoot>
  )
}

const defaultProps = {
  prefixCls: "knit-radio",
  className: "",
  style: {},
  size: "medium",
  defaultChecked: false,
  onFocus() {},
  onBlur() {},
  onChange() {},
}

export default RadioWrapper
