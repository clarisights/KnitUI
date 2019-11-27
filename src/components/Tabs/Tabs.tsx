import React, { Children, useState, useEffect } from "react"
import styled from "styled-components"
import {
  SortableContainer,
  SortableElement,
  arrayMove,
} from "react-sortable-hoc"
import { TabsProps, TabPane } from "./types"

const TabsWrapper = styled.div`
  height: 100%;
  width: 100%;
`

const TabsPanelWrapper = styled.div`
  display: flex;
  margin-bottom: 16px;
  background: #f7f4ed;
  padding: 0 50px;
`

const TabPanel = styled.button<{ active: boolean }>`
  background: ${props => (props.active ? "#FFFFFF" : "none")};
  border: none;
  padding: 4px 14px;
  min-width: 80px;
  font-size: 14px;
  line-height: 20px;
  cursor: pointer;
}`

const VerticalBar = styled.div`
  height: 14px;
  width: 0px;
  position: absolute;
  border-right: 1px solid #cccccc;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
`

const TabContentWrapper = styled.div`
  width: 100%;
`

const SortableItem = SortableElement(
  ({ value, onChange, activeKey, activeKeyIndex, itemIndex }) => {
    const props = value.props
    const isActive = props.tabKey === activeKey
    const elem = React.cloneElement(value, {
      key: props.tabKey,
      active: isActive,
      role: "tab",
      "aria-controls": "tabpanel-id",
      children: props.tab,
      onClick: () => onChange(props.tabKey),
    })
    const showVBar = itemIndex + 1 !== activeKeyIndex && !isActive
    return (
      <div
        style={{
          position: "relative",
        }}>
        {elem}
        {showVBar ? <VerticalBar /> : null}
      </div>
    )
  }
)

const SortableList = SortableContainer(
  ({ items, onChange, activeKey, activeKeyIndex }) => {
    return (
      <div
        style={{
          display: "flex",
        }}>
        {items.map((value, index) => (
          <SortableItem
            onChange={onChange}
            key={`tab-${index}`}
            index={index}
            itemIndex={index}
            value={value}
            activeKey={activeKey}
            activeKeyIndex={activeKeyIndex}
          />
        ))}
      </div>
    )
  }
)

const getActiveKeyIndex = (childrenArray, activeKey) => {
  return childrenArray.findIndex(
    (child: React.ReactElement) => child.props.tabKey === activeKey
  )
}

const Tabs: React.FC<TabsProps> = ({ children, ...tabProps }) => {
  const childrenArrayProps = Children.toArray(children)
  if (childrenArrayProps.length < 1) {
    return <div />
  }
  const firstTab =
    childrenArrayProps[0] && childrenArrayProps[0]["props"].tabKey
  const internalState = useState(tabProps.defaultActiveKey || firstTab)
  const { activeKey = internalState[0], onChange = internalState[1] } = tabProps
  const [childrenArray, setChildrenArray] = useState([])
  const [activeKeyIndex, setActiveKeyIndex] = useState(null)
  useEffect(() => {
    setChildrenArray(childrenArrayProps as any)
  }, [children])
  useEffect(() => {
    const index = getActiveKeyIndex(childrenArray, activeKey)
    setActiveKeyIndex(index)
  }, [childrenArray, activeKey])
  const getTabsContent = () => {
    return childrenArray.map((child: React.ReactElement) => {
      const key = child.props.tabKey
      const active = key === activeKey
      if (active) return child.props.children
      return <div key={key} />
    })
  }
  const onSortEnd = ({ oldIndex, newIndex }) => {
    const newChildren = arrayMove(childrenArray, oldIndex, newIndex)
    setChildrenArray(newChildren)
    document.body.style.cursor = "default"
  }
  const onSortStart = () => {
    document.body.style.cursor = "grabbing"
  }
  return (
    <TabsWrapper>
      <TabsPanelWrapper>
        <SortableList
          shouldCancelStart={() => false}
          items={childrenArray}
          activeKey={activeKey}
          activeKeyIndex={activeKeyIndex}
          onSortStart={onSortStart}
          onSortEnd={onSortEnd}
          axis={"x"}
          lockAxis="x"
          pressDelay={200}
          onChange={onChange}
        />
      </TabsPanelWrapper>
      <TabContentWrapper>{getTabsContent()}</TabContentWrapper>
    </TabsWrapper>
  )
}

Tabs.TabPanel = TabPanel
export default Tabs
