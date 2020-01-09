import React, { Children, useState, useEffect, useRef } from "react"
import styled, { css } from "styled-components"
import { arrayMove } from "react-sortable-hoc"
import {
  TabsProps,
  TabWrapperInterface,
  activeTabFlagsInterface,
  TabPane,
} from "./types"
import { Button, Icon } from ".."
import { TabsList } from "./TabsList"
import { getThemeColor, getOSName } from "../../common/_utils"

const TabsWrapper = styled.div`
  height: 100%;
  width: 100%;
`

const TabsPanelWrapper = styled.div`
  display: flex;
  background: ${props => getThemeColor(props, "Beige10")};
  padding: 0 50px;
`

const OverflowWrapper = styled.div`
  height: 100%;
  overflow: hidden;
  position: relative;
  display: flex;
`

const OverflowContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: scroll;
  padding-bottom: ${getOSName() !== "MacOS" ? "0px" : "15px"};
  margin-bottom: -15px;
  box-sizing: content-box;
`

const BlurElement = styled.div<{
  dir: string
  visible: boolean
}>`
  width: 80px;
  height: 100%;
  position: absolute;
  background: linear-gradient(
    to ${props => (props.dir === "left" ? "right" : "left")},
    ${props => getThemeColor(props, "Beige10")}FF,
    ${props => getThemeColor(props, "Beige10")}00
  );
  z-index: 9;
  visibility: ${props => (props.visible ? "visible" : "hidden")};
  pointer-events: none;
`

const IconWrapper = styled.div<{ visible: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: ${props => (props.visible ? "visible" : "hidden")};
  cursor: pointer;
`

const TabPanel = styled.button<{ active?: boolean }>`
  background: ${props => (props.active ? "#FFFFFF" : "none")};
  border: none;
  border-top: ${props =>
    props.active ? "2px solid #D8C9A7" : "2px solid transparent"};
  padding: 4px 14px;
  border-radius: 2px 2px 0px 0px;
  min-width: 80px;
  line-height: 20px;
  font-size: 14px;
  cursor: pointer;
`

const TabContentWrapper = styled.div`
  width: 100%;
`

const getActiveKeyIndex = (childrenArray, activeKey) => {
  return childrenArray.findIndex(
    (child: React.ReactElement) => child.props.tabKey === activeKey
  )
}

const onScroll = (
  listRef: React.RefObject<HTMLDivElement>,
  activeNxtRef: React.RefObject<HTMLDivElement>,
  itemRef: React.RefObject<HTMLDivElement>,
  activePrevRef: React.RefObject<HTMLDivElement>,
  setActiveTabFlags: (obj: activeTabFlagsInterface) => void,
  setScrollFlags: (obj: {
    leftSideScroll: boolean
    rightSideScroll: boolean
  }) => void
) => {
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
  const rightSideScroll =
    current.scrollLeft !== current.scrollWidth - current.offsetWidth
  const scrollFlags = {
    leftSideScroll,
    rightSideScroll,
  }
  setScrollFlags(scrollFlags)
}

const Tabs: TabWrapperInterface<TabsProps> = ({ children, ...tabProps }) => {
  const childrenArrayProps = Children.toArray(children)
  const firstTab =
    childrenArrayProps[0] && childrenArrayProps[0]!["props"].tabKey
  const internalState = useState(tabProps.defaultActiveKey || firstTab)
  const {
    activeKey = internalState[0],
    onChange = internalState[1],
    onAddTab,
    onOrderChange,
  } = tabProps
  const [childrenArray, setChildrenArray] = useState([])
  const [activeKeyIndex, setActiveKeyIndex] = useState(0)
  const [scrollFlags, setScrollFlags] = useState({
    leftSideScroll: false,
    rightSideScroll: false,
  })
  const [activeTabFlags, setActiveTabFlags] = useState({
    right: false,
    left: false,
  })
  // ref for main scrollable list container
  const listRef: React.RefObject<HTMLDivElement> = useRef(null)
  // ref for active tab
  const itemRef: React.RefObject<HTMLDivElement> = useRef(null)
  // ref for tab after active tab
  const activeNxtRef: React.RefObject<HTMLDivElement> = useRef(null)
  // ref for tab before active tab
  const activePrevRef: React.RefObject<HTMLDivElement> = useRef(null)

  useEffect(() => {
    const current = listRef.current
    current &&
      current.addEventListener("scroll", () =>
        onScroll(
          listRef,
          activeNxtRef,
          itemRef,
          activePrevRef,
          setActiveTabFlags,
          setScrollFlags
        )
      )
  }, [])
  useEffect(() => {
    setChildrenArray(childrenArrayProps as any)
  }, [children])
  useEffect(() => {
    const index = getActiveKeyIndex(childrenArray, activeKey)
    setActiveKeyIndex(index)
  }, [childrenArray, activeKey])
  useEffect(() => {
    onScroll(
      listRef,
      activeNxtRef,
      itemRef,
      activePrevRef,
      setActiveTabFlags,
      setScrollFlags
    )
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
    onOrderChange && onOrderChange({ oldIndex, newIndex })
    document.body.style.cursor = "default"
  }
  const onSortStart = () => {
    document.body.style.cursor = "grabbing"
  }
  const handleScrollRight = () => {
    const list = listRef.current
    if (list) {
      const distance = list.clientWidth + list.scrollLeft - 140 * 2
      list.scrollTo({
        behavior: "smooth",
        left: distance,
      })
    }
  }
  const handleScrollLeft = () => {
    const list = listRef.current
    if (list) {
      const distance = list.scrollLeft + 140 * 2 - list.clientWidth
      list.scrollTo({
        behavior: "smooth",
        left: distance,
      })
    }
  }
  const showRightArrow = scrollFlags.rightSideScroll
  const showLeftArrow = scrollFlags.leftSideScroll
  const showRightBlur = showRightArrow && !activeTabFlags.right
  const showLeftBlur = showLeftArrow && !activeTabFlags.left
  return (
    <TabsWrapper>
      <TabsPanelWrapper>
        <OverflowWrapper>
          <IconWrapper visible={showLeftArrow} onClick={handleScrollLeft}>
            <Icon type="oKeyboardArrowLeft" size="18px" fill="#000000" />
          </IconWrapper>
          <BlurElement
            visible={showLeftBlur}
            dir="left"
            style={{
              left: 18,
            }}
          />
          <OverflowContainer ref={listRef}>
            <TabsList
              shouldCancelStart={() => false}
              items={childrenArray}
              activeKey={activeKey}
              activeKeyIndex={activeKeyIndex}
              onSortStart={onSortStart}
              onSortEnd={onSortEnd}
              axis={"x"}
              lockAxis="x"
              pressDelay={10}
              onChange={onChange}
              activeTabFlags={activeTabFlags}
              itemRef={itemRef}
              activeNxtRef={activeNxtRef}
              activePrevRef={activePrevRef}
            />
          </OverflowContainer>
          <BlurElement
            visible={showRightBlur}
            dir="right"
            style={{
              right: 18,
            }}
          />
          <IconWrapper visible={showRightArrow} onClick={handleScrollRight}>
            <Icon type="oKeyboardArrowRight" size="18px" fill="#000000" />
          </IconWrapper>
        </OverflowWrapper>
        <Button
          onClick={onAddTab}
          icon="oAdd"
          kind="primary"
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
