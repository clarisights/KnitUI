import React, { ReactNode } from "react"
import ReactDom from "react-dom"
import Alert from "./Alert"
import { placementType, AlertProps } from "./AlertInterface"
import {
  TopLeftBox,
  TopRightBox,
  BottomLeftBox,
  BottomRightBox,
} from "./StyledAlerts"

export interface AlertsWrapperProps {
  placement?: placementType
  getContainer?: () => HTMLElement | ReactNode
}

export interface AlertsWrapperStates {
  alerts: { [key: string]: any }
}

export interface AlertAPIInterface {
  open: (obj: AlertProps) => void
  remove?: (obj: string) => void
}

// To generate Unique key for each Alert Component
let seeds = 0
const generateKey = (): string => {
  return new Date().getTime() + (seeds++).toString()
}

// Wrapper Component for particular corner
class AlertsWrapper extends React.Component<
  AlertsWrapperProps,
  AlertsWrapperStates
> {
  placement: placementType

  constructor(props: AlertsWrapperProps) {
    super(props)
    this.state = {
      alerts: {},
    }
    this.placement = this.props.placement ? this.props.placement : "bottomLeft"
    this.add.bind(this)
    this.remove.bind(this)
    this.add.bind(this)
  }

  // Passed to API, add Alert to state and generate unique key
  add = (alertProps: AlertProps): void => {
    const key: string = generateKey()
    alertProps = { key: key, ...alertProps }

    // Closing Alert will call remove method of this class to update state
    const curOnClose = alertProps.onClose
    alertProps.onClose = event => {
      this.remove(key)
      if (curOnClose) {
        curOnClose(event)
      }
    }

    const newState = {
      [key]: <Alert {...alertProps} />,
      ...this.state.alerts,
    }

    this.setState({
      alerts: newState,
    })
  }

  // Passed to API, remove Element from state using key
  remove = (key: string): void => {
    const newState = this.state.alerts
    delete newState[key]
    this.setState({ alerts: newState })
  }

  // Return container based on placement prop
  getWrapper = () => {
    switch (this.placement) {
      case "topLeft":
        return TopLeftBox
      case "topRight":
        return TopRightBox
      case "bottomLeft":
        return BottomLeftBox
      case "bottomRight":
        return BottomRightBox
      default:
        return BottomLeftBox
    }
  }

  render() {
    const Wrapper = this.getWrapper()
    const alertsArray = Object.values(this.state.alerts)

    return <Wrapper>{alertsArray}</Wrapper>
  }
}

// Alerts save `AlertsWrapper` of 4 corners using [placement]: AlertsWrapperInstance
const alerts: { [placement: string]: AlertAPIInterface } = {}
let div // Div to refer new div element in below open function

// Open function for the API
function open(alertProps: AlertProps) {
  const placement: string = alertProps.placement as string

  // If AlertWrapperInstance instance is not found for particular placement,
  // create div and place it into  DOM outside of current ReactDOM,
  // we can pass our custom HTML Element using getContainer
  if (!alerts[placement]) {
    div = document.createElement("div")
    document.body.appendChild(div)
  }

  let called = false
  // React callback ref function, to access/modify AlertsWrapperInstance from
  // outside of the React Component, mostly used for this cases.
  function ref(alertsWrapperInstance) {
    // Two avoid react internal twice execution of ref
    if (called) {
      return
    }

    called = true
    if (!alerts[placement]) {
      // It will pass an object which contains two internal methods to change states
      alerts[placement] = {
        open(alertPropsParam: AlertProps) {
          alertsWrapperInstance.add(alertPropsParam)
        },
        remove(key: string) {
          alertsWrapperInstance.remove(key)
        },
      }
    }
    alerts[placement].open(alertProps)
  }

  //To render affected placement/corner AlertWrapper Container
  ReactDom.render(
    <AlertsWrapper placement={alertProps.placement} ref={ref} />,
    div
  )
}

const alertAPI: AlertAPIInterface = {
  open: open,
  // remove : remove, Not sure still to give excess to remove Alert Component using API
}

export default alertAPI
