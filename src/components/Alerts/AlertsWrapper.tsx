import React, { ReactNode } from "react"
import { v4 as uuid } from "uuid"
import { placementType, AlertProps } from "./AlertInterface"
import TransitionWrapper from "./TransitionWrapper"

export interface AlertsWrapperProps {
  // Pass value of where placement where alert should appear
  placement?: placementType
  // Container define which component encapsulate as box to alerts,
  getContainer?: () => HTMLElement | ReactNode
}

export interface AlertsWrapperState {
  // Array of Alert Props object stored as state and passed around to transition wrappers.
  alerts: Array<AlertProps>
}

// Wrapper Component for particular corner, Using React Class Component to access methods using API (callback ref).
class AlertsWrapper extends React.Component<
  AlertsWrapperProps,
  AlertsWrapperState
> {
  placement: placementType

  constructor(props: AlertsWrapperProps) {
    super(props)
    this.state = {
      alerts: [],
    }
    this.placement = this.props.placement || "bottomLeft"
  }

  // Passed to API, add Alert to state and generate unique key
  add = (alertProps: AlertProps): string => {
    const key: string = uuid() // To generate Unique key for each Alert Component
    alertProps = { key, ...alertProps }

    // Closing Alert will call remove method of this class to update state
    const curOnClose = alertProps.onClose
    alertProps.onClose = event => {
      this.remove(key)
      curOnClose && curOnClose(event)
    }

    this.setState({
      alerts: [alertProps, ...this.state.alerts],
    })

    return key
  }

  // Passed to API, remove Element from state using key
  remove = (key: string): boolean => {
    const index = this.state.alerts.findIndex(i => i.key === key)
    if (index > -1) {
      this.setState({
        alerts: [
          ...this.state.alerts.slice(0, index),
          ...this.state.alerts.slice(index + 1),
        ],
      })
      return true
    }
    return false
  }

  render() {
    return (
      <TransitionWrapper
        placement={this.placement}
        alerts={this.state.alerts}
      />
    )
  }
}

export default AlertsWrapper
