import { ReactNode } from "react"
import _ from "lodash"

export function getChildrenWithTypes(children: Array<ReactNode>) {
  return _.keyBy(children, child => child.type.modalType)
}

export const sizeToWidth = {
  small: "49rem",
  medium: "63rem",
  large: "105rem",
  "x-large": "126rem",
  fluid: "84%",
}
