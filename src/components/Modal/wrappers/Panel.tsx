import React from "react"
import { WrapperComponent } from "../types"

const Panel: WrapperComponent<{
  children: React.ReactNode
}> = ({ children }) => {
  return <>{children}</>
}

Panel.modalType = "panel"

export default Panel
