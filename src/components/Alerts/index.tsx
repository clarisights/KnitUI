import { FC, Component, ComponentClass } from "react"
import Alert from "./Alert"
import AlertsProvider from "./AlertsProvider"
import useAlerts from "./useAlerts"
import withAlerts from "./withAlerts"

import { AlertProps, useAlertType } from "./types"

interface IAlertWrapper {
  Alert: FC<AlertProps>
  AlertsProvider: ComponentClass
  useAlerts: useAlertType
  withAlerts: (component: any) => any
}

const AlertWrapper: IAlertWrapper = {
  Alert,
  AlertsProvider,
  useAlerts,
  withAlerts
}

export default AlertWrapper
