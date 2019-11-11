import { AlertProps } from "./types"
import React, { useState, useEffect } from "react"
import { useTransition, UseTransitionResult } from "react-spring"
import { TransitionDiv, AlertDiv } from "./StyledAlerts"
import Alert from "./Alert"
import { SpringConfig, State } from "react-spring/renderprops"

// This interface extend Transition's return component with prop have properties Life,
// which is not defined in react-spring's types but implemented in the their code
interface UserTransitionResultWithLife
  extends UseTransitionResult<AlertProps, object> {
  props: { life: string }
}
//Transition/Animation Using react-spring useTransition
const TransitionWrapper = (props: { alerts: Array<AlertProps> }) => {
  const config = (_item: AlertProps, state: State): SpringConfig => {
    return {
      duration: 250,
      easing: t => {
        if (state === "leave") {
          return (t ** 2 + t ** 3) / 2
        } else {
          return t ** 3 //Bezier Curve (0,0,0,1)
        }
      },
    }
  }
  const [alerts, setAlerts] = useState(props.alerts)
  const [alertRefMap] = useState(() => new WeakMap())

  useEffect(() => {
    setAlerts(props.alerts)
  }, [props.alerts])

  // The type is defined `object` because react-spring typescript does not define
  // config as function with more than one argument, but it's js implementation does.
  // real interface is `UseTransition`
  const transitionProperties: object = {
    from: { height: 0, opacity: 0 },
    enter: (item: AlertProps) => async (next: Function) =>
      await next({ height: alertRefMap.get(item), opacity: 1 }),
    leave: { opacity: 0, height: 0 },
    config,
  }

  const transitionProps = useTransition<AlertProps, object>(
    alerts,
    item => item.alertKey as string,
    transitionProperties
  )

  return (
    <>
      {transitionProps.map(
        ({
          key,
          item,
          props: { life, ...style },
        }: UserTransitionResultWithLife) => {
          return (
            <TransitionDiv key={key} style={style}>
              <AlertDiv
                ref={ref => ref && alertRefMap.set(item, ref.offsetHeight)}>
                <Alert {...item} />
              </AlertDiv>
            </TransitionDiv>
          )
        }
      )}
    </>
  )
}

export default TransitionWrapper
