import { useContext } from "react"
import AlertContext from "./AlertContext"

// Will be used in functional component (hooks)
export default () => {
  const { addAlert, removeAlert } = useContext(AlertContext)!
  return { addAlert, removeAlert }
}
