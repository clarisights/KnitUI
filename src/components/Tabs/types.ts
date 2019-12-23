import { BaseComponentProps } from "../../common/types"
import { ReactNode } from "react"

export interface TabsProps extends BaseComponentProps {
  children: ReactNode[] | ReactNode
  defaultActiveKey: string
  activeKey: string
  hideAdd: boolean
  size: "default" | "medium"
  onChange: (activeKey: string) => void
  onAddTab: () => void
}

export interface TabPane {
  key: string
  tab: string | ReactNode
}

export interface TabWrapperInterface<T> extends React.FC<T> {
  TabPanel: React.ReactNode
}

export interface activeTabFlagsInterface {
  left: boolean
  right: boolean
}
