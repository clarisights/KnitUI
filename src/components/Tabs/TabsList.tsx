import React, { ReactNode, ReactElement } from "react"
import { SortableContainer } from "react-sortable-hoc"
import { TabItem } from "./TabItem"
import { activeTabFlagsInterface } from "./types"

type TabsListProps = {
  items: Array<ReactNode>
  onChange: (activeKey: string) => void
  activeKey: string
  activeKeyIndex: number
  activeTabFlags: activeTabFlagsInterface
  itemRef: React.RefObject<HTMLDivElement>
  activeNxtRef: React.RefObject<HTMLDivElement>
  activePrevRef: React.RefObject<HTMLDivElement>
  dragHandle: boolean
  dragHandleElement: React.FC<any> | null
  readOnly: boolean
}

export const TabsList = SortableContainer(
  ({
    items,
    onChange,
    activeKey,
    activeKeyIndex,
    activeTabFlags,
    itemRef,
    activeNxtRef,
    activePrevRef,
    dragHandle,
    dragHandleElement,
    readOnly,
  }: TabsListProps) => {
    return (
      <div
        style={{
          display: "flex",
          whiteSpace: "nowrap",
        }}>
        <div />
        {items.map((value, index) => (
          <TabItem
            readOnly={readOnly}
            dragHandleElement={dragHandleElement}
            dragHandle={dragHandle}
            onChange={onChange}
            key={`tab-${index}`}
            index={index}
            itemIndex={index}
            value={value}
            activeKey={activeKey}
            activeKeyIndex={activeKeyIndex}
            activeTabFlags={activeTabFlags}
            itemRef={itemRef}
            activeNxtRef={activeNxtRef}
            activePrevRef={activePrevRef}
          />
        ))}
      </div>
    )
  }
)
