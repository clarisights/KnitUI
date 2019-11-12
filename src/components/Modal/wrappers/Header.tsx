import React from "react"
import { WrapperComponent } from "../types"

const Header: WrapperComponent<{
  children: React.ReactNode
}> = ({ children }) => {
  return <>{children}</>
}

Header.modalType = "header"

export default Header
