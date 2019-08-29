import React from "react"
import AlertContext from "./AlertContext"
import hoistNonReactStatics from "hoist-non-react-statics"
import { AlertContextInterface } from "./types"

function withAlerts(Component: any) {
  // Reference for ForwardRef - https://reactjs.org/docs/higher-order-components.html#refs-arent-passed-through
  const WrappedComponent = React.forwardRef((props, ref) => (
    <AlertContext.Consumer>
      {(context: AlertContextInterface) => (
        <Component
          {...props}
          ref={ref}
          addAlert={context!.addAlert}
          removeAlert={context!.removeAlert}
        />
      )}
    </AlertContext.Consumer>
  ))

  // To display name during debuging
  if (process.env.NODE_ENV !== "production") {
    WrappedComponent.displayName = `WithAlert(${getDisplayName(Component)})`
  }
  function getDisplayName(Component) {
    return Component.displayName || Component.name || "Component"
  }

  // Reference https://reactjs.org/docs/higher-order-components.html#static-methods-must-be-copied-over
  hoistNonReactStatics(WrappedComponent, Component)

  return WrappedComponent
}

export default withAlerts
