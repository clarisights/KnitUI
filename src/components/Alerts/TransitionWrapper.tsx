import { AlertProps, placementType } from "./AlertInterface"
import { useState, useEffect } from "react"
import { useTransition, UseTransitionResult } from "react-spring"
import {
  TopLeftBox,
  TopRightBox,
  BottomLeftBox,
  BottomRightBox,
  TransitionDiv,
  AlertDiv,
} from "./StyledAlerts"
import React from "react"
import Alert from "./Alert"
import { SpringConfig, State } from "react-spring/renderprops"

// This interface extend Transition's return component with prop have properties Life,
// which is not defined in react-spring's types but implemented in the their code
interface UserTransitionResultWithLife
  extends UseTransitionResult<AlertProps, object> {
  props: { life: string }
}

const PlacementWrapperDiv = {
  topLeft: TopLeftBox,
  topRight: TopRightBox,
  bottomLeft: BottomLeftBox,
  bottomRight: BottomRightBox,
}

//Transition/Animation Using react-spring useTransition
const TransitionWrapper = (props: {
  alerts: Array<AlertProps>
  placement: placementType
}) => {
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
    from: { height: 0, opacity: 0, life: "100%" },
    enter: (item: AlertProps) => async (next: Function) =>
      await next({ height: alertRefMap.get(item), opacity: 1 }),
    leave: (item: AlertProps) => async (next: Function, cancel: Function) => {
      await next({ life: "0%" })
      await next({ opacity: 0 })
      await next({ height: 0 })
    },
    config: config,
  }

  const transitionProps = useTransition<AlertProps, object>(
    alerts,
    item => item.key as string,
    transitionProperties
  )

  // Return container based on placement prop
  const Wrapper = PlacementWrapperDiv[props.placement]

  return (
    <Wrapper data-testid="alert-wrapper">
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
    </Wrapper>
  )
}

export default TransitionWrapper
