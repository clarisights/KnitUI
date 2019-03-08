import React from "react"

export const ButtonGroup = (props: { name: string }) => {
  return <button>{props.name}</button>
}

const Button = (props: { name: string }) => {
  return <button>btn {props.name}</button>
}

export default Button
