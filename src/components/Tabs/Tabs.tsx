import React, { Children, useState, useEffect, useRef } from "react"
import styled from "styled-components"
import {
  SortableContainer,
  SortableElement,
  arrayMove,
} from "react-sortable-hoc"
import { TabsProps, TabPane } from "./types"
import { Button, Icon } from ".."

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
border-top: ${props =>
  props.active ? "2px solid #D8C9A7" : "1px solid transparent"};
border-bottom: ${props => (props.active ? "none" : "1px solid transparent")};
  padding: 4px 14px;
  border-radius: 2px 2px 0px 0px;
  min-width: 80px;
  line-height: 20px;
  font-size: 14px;
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
  }) => {
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
    let styles: any = { position: "relative" }
    if (activeKeyIndex === itemIndex) {
      styles = { position: "relative", zIndex: 10 }
    }
    if (activeTabFlags.left && activeKeyIndex === itemIndex) {
      styles = {
        position: "absolute",
        zIndex: 2,
      }
    } else if (activeTabFlags.right && activeKeyIndex === itemIndex) {
      styles = {
        position: "absolute",
        zIndex: 2,
        right: 18,
      }
    }
    // console.log(activeTabFlags)
    if (activeTabFlags.left && activeKeyIndex === itemIndex - 1) {
      styles = {
        position: "relative",
        marginLeft: itemRef.current.getBoundingClientRect().width,
      }
    } else if (activeTabFlags.right && activeKeyIndex === itemIndex + 1) {
      styles = {
        position: "relative",
        marginRight: itemRef.current.getBoundingClientRect().width,
      }
    }
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
      <div ref={getRef()} id={isActive ? "active-tab" : ""} style={styles}>
        {elem}
        {showVBar ? <VerticalBar /> : null}
      </div>
    )
  }
)

const SortableList = SortableContainer(
  ({
    items,
    onChange,
    activeKey,
    activeKeyIndex,
    activeTabFlags,
    itemRef,
    activeNxtRef,
    activePrevRef,
  }) => {
    return (
      <div
        id="rohan"
        style={{
          display: "flex",
        }}>
        <div />
        {items.map((value, index) => (
          <SortableItem
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
  const {
    activeKey = internalState[0],
    onChange = internalState[1],
    onAddTab,
  } = tabProps
  const [childrenArray, setChildrenArray] = useState([])
  const [activeKeyIndex, setActiveKeyIndex] = useState(null)
  const [scrollFlags, setScrollFlags] = useState({
    leftSideScroll: false,
    rightRideScroll: false,
  })
  const [activeTabFlags, setActiveTabFlags] = useState({
    right: false,
    left: false,
  })
  const listRef = useRef(null)
  const itemRef = useRef(null)
  const activeNxtRef = useRef(null)
  const activePrevRef = useRef(null)
  const onScroll = () => {
    const current = listRef.current
    if (!current) {
      return
    }
    if (
      activeNxtRef.current &&
      itemRef.current &&
      current.offsetLeft + current.scrollLeft + itemRef.current.clientWidth >=
        activeNxtRef.current.offsetLeft
    ) {
      setActiveTabFlags({
        right: false,
        left: true,
      })
    } else if (
      activePrevRef.current &&
      itemRef.current &&
      current.offsetLeft + current.scrollLeft + current.clientWidth <=
        activePrevRef.current.offsetLeft +
          activePrevRef.current.clientWidth +
          itemRef.current.clientWidth
    ) {
      setActiveTabFlags({
        right: true,
        left: false,
      })
    } else {
      setActiveTabFlags({
        right: false,
        left: false,
      })
    }
    const leftSideScroll = current.scrollLeft > 0
    const rightRideScroll =
      current.scrollLeft !== current.scrollWidth - current.offsetWidth
    const scrollFlags = {
      leftSideScroll,
      rightRideScroll,
    }
    setScrollFlags(scrollFlags)
  }
  useEffect(() => {
    const current = listRef.current
    current.addEventListener("scroll", () => onScroll())
  }, [])
  useEffect(() => {
    setChildrenArray(childrenArrayProps as any)
  }, [children])
  useEffect(() => {
    const index = getActiveKeyIndex(childrenArray, activeKey)
    setActiveKeyIndex(index)
  }, [childrenArray, activeKey])
  useEffect(() => {
    onScroll()
  }, [activeKeyIndex])
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
  console.log(
    "ac",
    itemRef,
    activeNxtRef,
    activePrevRef,
    scrollFlags,
    activeTabFlags
  )
  const showRightArrow = scrollFlags.rightRideScroll
  const showLeftArrow = scrollFlags.leftSideScroll
  const showRightBlur = showRightArrow && !activeTabFlags.right
  const showLeftBlur = showLeftArrow && !activeTabFlags.left
  return (
    <TabsWrapper>
      <TabsPanelWrapper>
        <div
          style={{
            width: "100%",
            height: "100%",
            overflow: "hidden",
            position: "relative",
            display: "flex",
          }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              visibility: showLeftArrow ? "visible" : "hidden",
            }}>
            <Icon type="oKeyboardArrowLeft" size="18px" fill="#000000" />
          </div>
          <div
            style={{
              width: 80,
              height: "100%",
              position: "absolute",
              left: 18,
              background: "linear-gradient(to right, #f7f4ed, transparent)",
              zIndex: 9,
              visibility: showLeftBlur ? "visible" : "hidden",
            }}
          />
          <div
            style={{
              width: "100%",
              height: "100%",
              overflowX: "auto",
              paddingBottom: "17px",
              marginBottom: "-17px",
              boxSizing: "content-box",
            }}
            ref={listRef}>
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
              activeTabFlags={activeTabFlags}
              itemRef={itemRef}
              activeNxtRef={activeNxtRef}
              activePrevRef={activePrevRef}
            />
          </div>
          <div
            style={{
              width: 80,
              height: "100%",
              position: "absolute",
              right: 18,
              background: "linear-gradient(to left, #f7f4ed, transparent)",
              visibility: showRightBlur ? "visible" : "hidden",
            }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              visibility: showRightArrow ? "visible" : "hidden",
            }}>
            <Icon type="oKeyboardArrowRight" size="18px" fill="#000000" />
          </div>
        </div>
        <Button
          onClick={onAddTab}
          icon="oAdd"
          type="primary"
          bare
          customColor="#000000"
        />
      </TabsPanelWrapper>
      <TabContentWrapper>{getTabsContent()}</TabContentWrapper>
    </TabsWrapper>
  )
}

Tabs.TabPanel = TabPanel
export default Tabs
