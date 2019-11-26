import React, { Children, useState, Fragment, useEffect } from "react"
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
`

const TabPanel = styled.button<{ active: boolean }>`
  background: peru;
  padding: 4px 14px;
  background: peru;
  font-size: 14px;
  border-right: 1px solid #CCCCCC;
  border: ${props => (props.active ? "1px solid blue" : "none")};
  cursor: pointer;
}`

const TabContentWrapper = styled.div`
  width: 100%;
`

const SortableItem = SortableElement(({ value, onChange }) => {
  const props = value.props
  const elem = React.cloneElement(value, {
    key: props.tabKey,
    role: "tab",
    "aria-controls": "tabpanel-id",
    children: props.tab,
    onClick: () => onChange(props.tabKey),
  })
  return <div>{elem}</div>
})

const SortableList = SortableContainer(({ items, onChange }) => {
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
          value={value}
        />
      ))}
    </div>
  )
})

const Tabs: React.FC<TabsProps> = ({ children, ...tabProps }) => {
  const internalState = useState(tabProps.defaultActiveKey || "tab-0")
  const { activeKey = internalState[0], onChange = internalState[1] } = tabProps
  const [childrenArray, setChildrenArray] = useState([])
  useEffect(() => {
    const childrenArrayProps = Children.toArray(children)
    setChildrenArray(childrenArrayProps)
  }, [children])
  const getTabs = () => {
    return childrenArray.map((child: React.ReactElement, index) => {
      const props = child.props
      const key = props.key
      const active = key === activeKey
      const elem = React.cloneElement(child, {
        key,
        active,
        id: props.id || `tab-${index}`,
        role: "tab",
        "aria-selected": active,
        "aria-controls": "tabpanel-id",
        children: props.tab,
        onClick: () => onChange(key),
      })
      const SortableItem = SortableElement(() => <Fragment>{elem}</Fragment>)
      return <SortableItem index={index} key={key} />
    })
  }
  const getTabsContent = () => {
    return childrenArray.map((child: React.ReactElement, index: number) => {
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
