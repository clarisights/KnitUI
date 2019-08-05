// Size types of the alert components
type sizeType = "x-small" | "small" | "medium" | "large"

// Type of alert in particular which define it's other property like color, icon,...
export type alertType = "standard" | "warning" | "success" | "error"

// define where will be the placement in the container
export type placementType =
  | "topLeft"
  | "topRight"
  | "bottomLeft"
  | "bottomRight"

// Type of buttons given to have action
export type actionType = {
  text: string
  callback: Function
}

// Alert Props are attributes which are used to define alert
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
  // custom icon, effective when mention in React Component or as Prop in object passed to API,
  // for use of default icon just pass it empty or undefined
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

// Properties required by outer container, size, type and placement
export interface AlertContainerProps {
  // type of the alert
  type: alertType
  // Size of the alert, default is small
  size: sizeType
  // placement of notification on screen
  placement: placementType
}

export interface AlertContentWrapperProps {
  // heading of the alert
  heading?: string
  // whether alert is multiline, defaults to false
  multiLine?: boolean
}
