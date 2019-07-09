type sizeType = "x-small" | "small" | "medium" | "large"

export type alertType = "standard" | "warning" | "success" | "error"

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
}

export interface AlertContainerProps {
  // type of the alert
  type: alertType | undefined
  // Size of the alert, default is small
  size: sizeType | undefined
}

export interface AlertState {
  closed: boolean
}

export interface AlertContentWrapperProps {
  heading?: string
  multiLine?: boolean
}
