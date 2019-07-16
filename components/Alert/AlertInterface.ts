type sizeType = "x-small" | "small" | "medium" | "large"

export type alertType = "standard" | "warning" | "success" | "error"

export type placementType =
  | "topLeft"
  | "topRight"
  | "bottomLeft"
  | "bottomRight"

export type actionType = {
  text: string
  callback: Function
}

export interface AlertProps {
  // type of the alert
  type?: alertType
  // Size of the alert, default is small
  size?: sizeType
  // Main content of the alert
  content: string
  // whether alert is to be auto dismissed
  autoDismiss?: boolean
  // time after which we need to dismiss, effective when auto dismiss is set
  dismissDuration?: number
  // heading of the alert
  heading?: string
  // icon to be shown
  showIcon?: boolean
  // custom icon, effective when showIcon is set
  icon?: string
  // image url to be shown, overrides icon when both are specified
  image?: string
  // whether alert is multiline, defaults to false
  multiLine?: boolean
  // actions of alert, max 2, pass an array of objects with keys as text and callback
  actions?: Array<actionType>
  // Function to call once the alert is closed
  onClose?: (event) => void
  // position on window where it will be displayed
  placement?: placementType
  // key to reference Element from Alerts Container (help in remove function)
  key?: string
}

export interface AlertContainerProps {
  // type of the alert
  type: alertType
  // Size of the alert, default is small
  size: sizeType
  // placement of notification on screen
  placement: placementType
}

export interface AlertState {
  closed: boolean
}

export interface AlertContentWrapperProps {
  heading?: string
  multiLine?: boolean
}
