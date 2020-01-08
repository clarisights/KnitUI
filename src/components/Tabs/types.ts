import { BaseComponentProps } from "../../common/types"
import { ReactNode } from "react"

type onOrderChnageParams = {
  oldIndex: number
  newIndex: number
}
export interface TabsProps extends BaseComponentProps {
  children: ReactNode[] | ReactNode
  defaultActiveKey?: string
  activeKey?: string
  hideAdd?: boolean
  size?: "default" | "medium"
  onChange?: (activeKey: string) => void
  onAddTab: () => void
  onOrderChange?: (onOrderChnageParams: onOrderChnageParams) => any
}

export interface TabPane extends HTMLButtonElement {
  key: string
  tab: string | ReactNode
  active?: boolean
}

export interface TabWrapperInterface<T> extends React.FC<T> {
  TabPanel: any
}

export interface activeTabFlagsInterface {
  left: boolean
  right: boolean
}
