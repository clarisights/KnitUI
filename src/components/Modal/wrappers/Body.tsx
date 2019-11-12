import React from "react"
import { WrapperComponent } from "../types"

const Body: WrapperComponent<{
  children: React.ReactNode
}> = ({ children }) => {
  return <>{children}</>
}

Body.modalType = "body"

export default Body
