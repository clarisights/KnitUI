import React from "react"
import { SortableElement, SortableHandle } from "react-sortable-hoc"
import { VerticalBar, DragIcon } from "./styles"
import { getTabContainerStyle } from "./utils"
import { TabItemType } from "./types"

export const TabDragElement = SortableHandle(({ children }) => children)

export const TabItem = SortableElement(
  ({
    value,
    onChange,
    activeKey,
    activeKeyIndex,
    itemIndex,
    activeTabFlags,
    itemRef,
    activeNxtRef,
    activePrevRef,
    dragHandle,
    dragHandleElement: DragHandleElement,
    readOnly,
  }: TabItemType) => {
    const props = value.props
    const isActive = props.tabKey === activeKey

    const handleElement =
      dragHandle && isActive && !readOnly ? (
        <TabDragElement>
          {DragHandleElement ? (
            <DragHandleElement />
          ) : (
            <DragIcon type="oDragIndicator" size="16px" />
          )}
        </TabDragElement>
      ) : null

    const elem = React.cloneElement(value, {
      key: props.tabKey,
      active: isActive,
      dragHandle: dragHandle,
      role: "tab",
      "aria-controls": "tabpanel-id",
      children: [handleElement, props.tab],
      onClick: () => !isActive && onChange(props.tabKey),
    })
    const showVBar = itemIndex + 1 !== activeKeyIndex && !isActive
    const styles = getTabContainerStyle(
      activeTabFlags,
      activeKeyIndex,
      itemIndex,
      itemRef
    )
    const getRef = () => {
      if (activeKeyIndex === itemIndex) {
        return itemRef
      } else if (activeKeyIndex + 1 === itemIndex) {
        return activeNxtRef
      } else if (activeKeyIndex - 1 === itemIndex) {
        return activePrevRef
      }
      return null
    }
    return (
      <div ref={getRef()} id={isActive ? "knit-active-tab" : ""} css={styles}>
        {elem}
        {showVBar ? <VerticalBar tabIndex={-1} /> : null}
      </div>
    )
  }
)
