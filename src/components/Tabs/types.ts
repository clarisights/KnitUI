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
  /** To avoid ambiguity between click & drag, press delay will switch mouseDown to drag after passed time.*/
  pressDelay?: number
  /** This is flag for showing only tab bar/ showing with tab's content */
  hideTabContent?: boolean
  /** When active tab change */
  onChange?: (activeKey: string) => void
  /** Function to be executed when click add button */
  onAddTab: () => void
  /** When tab order is changed, this is a callback function which passes changed order params*/
  onOrderChange?: (onOrderChnageParams: onOrderChnageParams) => any
  /** To have drag handle instead of whole tab panel as draggable */
  useDragHandle?: boolean
  /** prop to pass element which replace default drag */
  dragHandleElement?: React.FC<any> | null
  /** disable sorting of tabs & disable `add tab` button */
  readOnly?: boolean
  /** Add Button Element, Please pass button element to behave it correctly. */
  addButtonElement?: React.ReactElement
}

export interface TabPane extends HTMLButtonElement {
  key: string
  tab: string | ReactNode
  active?: boolean
}

export interface TabWrapperInterface<T> extends React.FC<T> {
  TabPanel: any
}

export interface ActiveTabFlagsInterface {
  left: boolean
  right: boolean
}

export type TabItemType = {
  value: any
  onChange: (activeKey: string) => void
  activeKey: string | null
  activeKeyIndex: number
  itemIndex: number
  activeTabFlags: ActiveTabFlagsInterface
  itemRef: React.RefObject<HTMLDivElement>
  activeNxtRef: React.RefObject<HTMLDivElement>
  activePrevRef: React.RefObject<HTMLDivElement>
  dragHandle: boolean
  dragHandleElement: React.FC<any> | null
  readOnly: boolean
}

export type TabsListProps = {
  items: Array<ReactNode>
  onChange: (activeKey: string) => void
  activeKey: string
  activeKeyIndex: number
  activeTabFlags: ActiveTabFlagsInterface
  listRef: React.RefObject<HTMLDivElement>
  itemRef: React.RefObject<HTMLDivElement>
  activeNxtRef: React.RefObject<HTMLDivElement>
  activePrevRef: React.RefObject<HTMLDivElement>
  dragHandle: boolean
  dragHandleElement: React.FC<any> | null
  readOnly: boolean
}
