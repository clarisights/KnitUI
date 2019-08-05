import React from "react"
import ReactDOM from "react-dom"
import AlertsWrapper from "./AlertsWrapper"
import { AlertProps } from "./AlertInterface"
// import console = require("console")

export interface AlertAPIInterface {
  // Add API function exposed to add any alert to any container
  add: (alertProps: AlertProps) => string
  // Remove API function exposed to remove any alert
  remove: (key: string) => boolean
}

// Alerts save `AlertsWrapper` of 4 corners using [placement]: AlertsWrapperInstance
const alertsWrappers: { [placement: string]: AlertAPIInterface } = {}

// Const key and placement information pair

// Divs to refer div placement element in below add function
const div: HTMLElement = document.createElement("div")
div.classList.add("knit-ui-alerts")
div.setAttribute("data-testid", "knit-ui-alerts")

let divTopLeft: HTMLElement = document.createElement("div")
divTopLeft.classList.add("knit-ui-top-left-alerts")
divTopLeft = div.appendChild(divTopLeft)

const divTopRight: HTMLElement = document.createElement("div")
divTopRight.classList.add("knit-ui-top-right-alerts")
div.appendChild(divTopRight)

const divBottomLeft: HTMLElement = document.createElement("div")
divBottomLeft.classList.add("knit-ui-bottom-left-alerts")
div.appendChild(divBottomLeft)

const divBottomRight: HTMLElement = document.createElement("div")
divBottomRight.classList.add("knit-ui-bottom-right-alerts")
div.appendChild(divBottomRight)

document.body.appendChild(div)

const divObjects = {
  topLeft: divTopLeft,
  topRight: divTopRight,
  bottomLeft: divBottomLeft,
  bottomRight: divBottomRight,
}

// add function for the API
function add(alertProps: AlertProps): string {
  const placement = alertProps.placement
    ? (alertProps.placement as string)
    : "bottomLeft"

  let key = ""

  // If AlertWrapperInstance instance is not found for particular placement,
  // create div and place it into  DOM outside of current ReactDOM,
  // we can pass our custom HTML Element using getContainer
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
        add(alertPropsParam: AlertProps): string {
          return alertsWrapperInstance.add(alertPropsParam)
        },
        remove(keyParam: string): boolean {
          return alertsWrapperInstance.remove(keyParam)
        },
      }
    }
    key = alertsWrappers[placement].add(alertProps)
  }

  //To render affected placement/corner AlertWrapper Container
  ReactDOM.render(
    <AlertsWrapper
      key={placement}
      placement={alertProps.placement}
      ref={ref}
    />,
    divObjects[placement]
  )

  return key
}

function remove(key: string): boolean {
  for (const [_placementProp, wrapper] of Object.entries(alertsWrappers)) {
    if (wrapper.remove && wrapper.remove(key)) {
      return true
    }
  }
  return false
}

export const alertAPI: AlertAPIInterface = {
  add: add,
  remove: remove,
}

export default alertAPI
