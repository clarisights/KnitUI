import React, { ComponentType } from "react"
import { ThemeProvider } from "../styles"

export interface GenericProps {
  [propName: string]: any
}

// This is required to be able to access the subcomponents from the main export
export interface GenericComponentWrapperInterface
  extends React.FC<GenericProps> {
  [subcomponent: string]: any
}

// This can be used to decorate properties that are universally applicable
export default (Component: ComponentType) => {
  const GenericComponetWrapper: GenericComponentWrapperInterface = props => (
    <ThemeProvider>
      <Component {...props} />
    </ThemeProvider>
  )
  return GenericComponetWrapper
}
