import React from "react"
import { WrapperComponent } from "../types"

const Footer: WrapperComponent<{
  children: React.ReactNode
}> = ({ children }) => {
  return <>{children}</>
}

Footer.modalType = "footer"

export default Footer
