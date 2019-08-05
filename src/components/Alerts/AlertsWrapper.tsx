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

export interface AlertsWrapperStates {
  // Array of Alert Props object stored as state and passed around to transition wrappers.
  alerts: Array<AlertProps>
}

// Wrapper Component for particular corner, Using React Class Component to access methods using API (callback ref).
class AlertsWrapper extends React.Component<
  AlertsWrapperProps,
  AlertsWrapperStates
> {
  placement: placementType

  constructor(props: AlertsWrapperProps) {
    super(props)
    this.state = {
      alerts: [],
    }
    this.placement = this.props.placement ? this.props.placement : "bottomLeft"
  }

  // Passed to API, add Alert to state and generate unique key
  add = (alertProps: AlertProps): string => {
    const key: string = uuid() // To generate Unique key for each Alert Component
    alertProps = { key: key, ...alertProps }

    // Closing Alert will call remove method of this class to update state
    const curOnClose = alertProps.onClose
    alertProps.onClose = event => {
      this.remove(key)
      if (curOnClose) {
        curOnClose(event)
      }
    }

    this.setState({
      alerts: [alertProps, ...this.state.alerts],
    })

    return key
  }

  // Passed to API, remove Element from state using key
  remove = (key: string): boolean => {
    let isFound = false
    this.setState({
      alerts: this.state.alerts.filter(i => {
        if (i.key !== key) {
          isFound = true
          return true
        }
        return false
      }),
    })
    return isFound
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
