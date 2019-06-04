import React, { SFC } from "react"
import { RadioWrapperProps } from "./Interface"

const RadioWrapper: SFC<RadioWrapperProps> = (props = defaultProps) => {
  const {
    prefixCls,
    className,
    style,
    disabled,
    readOnly,
    tabIndex,
    onClick,
    onFocus,
    onBlur,
    autoFocus,
    onChange,
    value,
    groupValue,
    setValue,
    ...others
  } = props

  const isChecked = () => value === groupValue || props.defaultChecked

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

  const checkedClass = isChecked() ? `${prefixCls}-checked` : ""
  const disabledClass = props.disabled ? `${prefixCls}-disabled` : ""
  const rootClass = `${prefixCls} ${className} ${checkedClass} ${disabledClass}`

  return (
    <span className={rootClass} style={style}>
      <input
        name={name}
        type="radio"
        readOnly={readOnly}
        disabled={disabled}
        tabIndex={tabIndex}
        className={`${prefixCls}-input`}
        checked={!!isChecked()}
        onClick={onClick}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={handleChange}
        autoFocus={autoFocus}
        value={value}
        {...globalProps}
      />
      <span className={`${prefixCls}-inner`} />
    </span>
  )
}

const defaultProps = {
  prefixCls: "knit-radio",
  className: "",
  style: {},
  defaultChecked: false,
  onFocus() {},
  onBlur() {},
  onChange() {},
}

export default RadioWrapper
