import { ReactNode } from "react"
import _ from "lodash"

export function getChildrenWithTypes(children: Array<ReactNode>) {
  return _.keyBy(children, child => child.type.modalType)
}
