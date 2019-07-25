import React, { ReactNode, useState, useEffect } from "react"
import ReactDom from "react-dom"
import { useTransition } from "react-spring"

import Alert from "./components/Alert/Alert"

import { placementType, AlertProps } from "./components/Alert/AlertInterface"
import {
  TopLeftBox,
  TopRightBox,
  BottomLeftBox,
  BottomRightBox,
  AnimatedDiv,
  Div,
} from "./components/StyledAlerts"

export interface AlertsWrapperProps {
  placement?: placementType
  getContainer?: () => HTMLElement | ReactNode
}

export interface AlertsWrapperStates {
  alerts: Array<AlertProps>
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

//Transition/Animation Using react-spring useTransition
const TransitionWrapper = (props: {
  alerts: Array<AlertProps>
  placement: placementType
}) => {
  const config: any = (item, state) => {
    return {
      duration: 250,
      easing: t => {
        if (state === "leave") {
          return (t * t + t * t * t) / 2 // - 3 * t - 3 * t * t * t //Bezier Curve (1,0,1,1)
        } else {
          return t * t * t //Bezier Curve (0,0,0,1)
        }
      },
    }
  }
  const [alerts, setAlerts] = useState(props.alerts)
  const [refMap] = useState(() => new WeakMap())
  const [cancelMap] = useState(() => new WeakMap())

  useEffect(() => {
    setAlerts(props.alerts)
  }, [props.alerts])

  const transitionConfigs: any = {
    from: { height: 0, opacity: 0, life: "100%" },
    enter: (item: AlertProps) => async (next: any) =>
      await next({ height: refMap.get(item).offsetHeight, opacity: 1 }),
    leave: (item: AlertProps) => async (next: any, cancel: any) => {
      cancelMap.set(item, cancel)
      await next({ life: "0%" })
      await next({ opacity: 0 })
      await next({ height: 0 })
    },
    config: config,
  }

  const transitionProps = useTransition(
    alerts,
    item => item.key as string,
    transitionConfigs
  )

  // Return container based on placement prop
  const getWrapper = () => {
    switch (props.placement) {
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

  const Wrapper = getWrapper()

  return (
    <Wrapper>
      {transitionProps.map(({ key, item, props: { life, ...style } }: any) => {
        let onClose = item.onClose
        const curOnClose = onClose
        onClose = (e?: Event): void => {
          if (curOnClose) {
            curOnClose(e)
          }
          if (cancelMap.has(item)) {
            cancelMap.get(item)()
          }
        }
        item.onClose = onClose

        return (
          <AnimatedDiv key={key} style={style}>
            <Div ref={ref => ref && refMap.set(item, ref)}>
              <Alert {...item} />
            </Div>
          </AnimatedDiv>
        )
      })}
    </Wrapper>
  )
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

    const newState = [alertProps, ...this.state.alerts]

    this.setState({
      alerts: newState,
    })
  }

  // Passed to API, remove Element from state using key
  remove = (key: string): void => {
    const newState = this.state.alerts.filter(i => i.key !== key)
    this.setState({ alerts: newState })
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

// Alerts save `AlertsWrapper` of 4 corners using [placement]: AlertsWrapperInstance
const alertsWrappers: { [placement: string]: AlertAPIInterface } = {}
// Div to refer new div element in below open function
let div: HTMLElement

// Open function for the API
function open(alertProps: AlertProps) {
  const placement: string = alertProps.placement as string

  // If AlertWrapperInstance instance is not found for particular placement,
  // create div and place it into  DOM outside of current ReactDOM,
  // we can pass our custom HTML Element using getContainer
  if (!alertsWrappers[placement]) {
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
    if (!alertsWrappers[placement]) {
      // It will pass an object which contains two internal methods to change states
      alertsWrappers[placement] = {
        open(alertPropsParam: AlertProps) {
          alertsWrapperInstance.add(alertPropsParam)
        },
        remove(key: string) {
          alertsWrapperInstance.remove(key)
        },
      }
    }
    alertsWrappers[placement].open(alertProps)
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
