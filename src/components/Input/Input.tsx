import React from "react"

import InputRef from "./InputRef"

import { IInputProps } from "./types"

const Input = React.forwardRef<HTMLElement, IInputProps>((props, ref) => {
  return <InputRef {...props} ref={ref} />
})

export default Input
