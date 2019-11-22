import React, { Children, useState } from "react"
import styled from "styled-components"
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
}`

const TabContentWrapper = styled.div`
  width: 100%;
`

const Tabs: React.FC<TabsProps> = ({ children, ...tabProps }) => {
  const internalState = useState(tabProps.defaultActiveKey || "tab-0")
  const { activeKey = internalState[0], onChange = internalState[1] } = tabProps
  const childrenArray = Children.toArray(children)
  const getTabs = () => {
    return childrenArray.map((child: React.ReactElement, index) => {
      const props = child.props
      const key = props.key || `tab-${index}`
      const active = key === activeKey
      return React.cloneElement(child, {
        key,
        active,
        id: props.id || `tab-${index}`,
        role: "tab",
        "aria-selected": active,
        "aria-controls": "tabpanel-id",
        children: props.tab,
        onClick: () => onChange(key),
      })
    })
  }
  const getTabsContent = () => {
    return childrenArray.map((child: React.ReactElement, index: number) => {
      const key = child.props.key || `tab-${index}`
      const active = key === activeKey
      if (active) return child.props.children
      return <div />
    })
  }
  return (
    <TabsWrapper>
      <TabsPanelWrapper>{getTabs()}</TabsPanelWrapper>
      <TabContentWrapper>{getTabsContent()}</TabContentWrapper>
    </TabsWrapper>
  )
}

Tabs.TabPanel = TabPanel
export default Tabs
