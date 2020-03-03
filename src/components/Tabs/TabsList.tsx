import React from "react"
import { SortableContainer } from "react-sortable-hoc"
import { TabItem } from "./TabItem"
import { OverflowContainer } from "./styles"
import { TabsListProps } from "./types"

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
    listRef,
    customColor,
  }: TabsListProps) => {
    return (
      <OverflowContainer ref={listRef}>
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
            customColor={customColor}
          />
        ))}
      </OverflowContainer>
    )
  }
)
