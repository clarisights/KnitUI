import React from "react"

import { IInputProps } from "./types"

interface IRenderInput extends IInputProps {
  isOverflow: boolean
}

import { StyledInput, StyledTextArea } from "./styledComponents"

const RenderInput = React.forwardRef<HTMLElement, IRenderInput>(
  (props, ref) => {
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
  }
)

export default RenderInput
