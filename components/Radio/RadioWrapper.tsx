import React, { useState, useEffect, SFC, CSSProperties } from "react"

interface RadioWrapperProps {
  prefixCls?: string
  className?: string
  style?: CSSProperties
  id?: string
  defaultChecked?: boolean
  checked?: boolean
  disabled?: boolean
  onFocus?: (e) => void | any
  onBlur?: (e) => void | any
  onChange?: (e) => void | any
  onClick?: (e) => void | any
  tabIndex?: number
  readOnly?: boolean
  autoFocus?: boolean
  value?: any
  size?: string
}

const RadioWrapper: SFC<RadioWrapperProps> = props => {
  const {
    prefixCls,
    className,
    style,
    id,
    disabled,
    readOnly,
    tabIndex,
    onClick,
    onFocus,
    onBlur,
    autoFocus,
    onChange,
    value,
    ...others
  } = props

  const on = props.checked || props.defaultChecked

  const [checked, updateChecked] = useState(on)

  useEffect(() => {
    updateChecked(props.checked)
  }, [checked, disabled])

  const handleChange = e => {
    if (props.disabled) {
      return
    }
    updateChecked(e.target.checked)
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

  const checkedClass = props.checked ? `${prefixCls}-checked` : ""
  const disabledClass = props.disabled ? `${prefixCls}-disabled` : ""
  const rootClass = `${prefixCls} ${className} ${checkedClass} ${disabledClass}`

  return (
    <span className={rootClass} style={style}>
      <input
        name={name}
        id={id}
        type="radio"
        readOnly={readOnly}
        disabled={disabled}
        tabIndex={tabIndex}
        className={`${prefixCls}-input`}
        checked={!!props.checked}
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

RadioWrapper.defaultProps = {
  prefixCls: "knit-radio",
  className: "",
  style: {},
  defaultChecked: false,
  onFocus() {},
  onBlur() {},
  onChange() {},
}

export default RadioWrapper
