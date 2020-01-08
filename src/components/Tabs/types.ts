import { BaseComponentProps } from "../../common/types"
import { ReactNode } from "react"
import { StyledComponent } from "styled-components"
export interface TabsProps extends BaseComponentProps {
  children: ReactNode[] | ReactNode
  defaultActiveKey?: string
  activeKey?: string
  hideAdd?: boolean
  size?: "default" | "medium"
  onChange?: (activeKey: string) => void
  onAddTab: () => void
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
