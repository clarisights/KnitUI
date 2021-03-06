import React, { Children, useState, useEffect, useRef } from "react"
import arrayMove from "array-move"
import { Icon } from ".."
import { TabsList } from "./TabsList"
import {
  GlobalStyle,
  ButtonWrapper,
  TabsWrapper,
  TabsPanelWrapper,
  OverflowWrapper,
  BlurElement,
  IconWrapper,
  TabPanel,
  TabContentWrapper,
} from "./styles"
import { getWidthFromRef, DEFAULT_COLOR } from "./utils"
import {
  TabsProps,
  TabWrapperInterface,
  ActiveTabFlagsInterface,
} from "./types"

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
  setActiveTabFlags: (obj: ActiveTabFlagsInterface) => void,
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
  const childrenArrayProps: any = Children.toArray(children)
  const firstTab = childrenArrayProps[0] && childrenArrayProps[0]!.props.tabKey
  const internalState = useState(tabProps.defaultActiveKey || firstTab)
  const {
    activeKey = internalState[0],
    onChange = internalState[1],
    onAddTab,
    onOrderChange,
    pressDelay = 100,
    hideTabContent = false,
    useDragHandle = false,
    dragHandleElement = null,
    readOnly = false,
    hideAdd = false,
    addButtonElement,
    customColor = DEFAULT_COLOR,
    lockOffset = 100,
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
  // ref for left-arrow wrapper, instead of hard code width better to use ref.
  const leftArrowRef: React.RefObject<HTMLDivElement> = useRef(null)
  // ref for right-arrow wrapper, instead of hard code width better to use ref.
  const rightArrowRef: React.RefObject<HTMLDivElement> = useRef(null)

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

  const AddButtonElement =
    addButtonElement &&
    React.cloneElement(addButtonElement, {
      onClick: onAddTab,
      disabled: readOnly,
    })
  const showRightArrow = scrollFlags.rightSideScroll
  const showLeftArrow = scrollFlags.leftSideScroll
  const showRightBlur = showRightArrow && !activeTabFlags.right
  const showLeftBlur = showLeftArrow && !activeTabFlags.left
  const showActiveLeftBlur = showLeftArrow && activeTabFlags.left
  const showActiveRightBlur = showRightArrow && activeTabFlags.right
  return (
    <>
      <GlobalStyle customColor={customColor} />
      <TabsWrapper hideTabContent={hideTabContent}>
        <TabsPanelWrapper customColor={customColor}>
          <OverflowWrapper activeTabRef={itemRef}>
            <IconWrapper
              ref={leftArrowRef}
              visible={showLeftArrow}
              onClick={handleScrollLeft}
              customColor={customColor}>
              <Icon type="oKeyboardArrowLeft" size="18px" fill="#000000" />
            </IconWrapper>
            <BlurElement
              visible={showLeftBlur}
              dir="left"
              style={{
                left: getWidthFromRef(leftArrowRef),
              }}
              customColor={customColor}
            />
            <BlurElement
              visible={showActiveLeftBlur}
              dir="left"
              style={{
                left: getWidthFromRef(leftArrowRef) + getWidthFromRef(itemRef),
              }}
              customColor={customColor}
            />
            <TabsList
              listRef={listRef}
              dragHandleElement={dragHandleElement}
              dragHandle={useDragHandle}
              useDragHandle={useDragHandle}
              shouldCancelStart={() => readOnly}
              readOnly={readOnly}
              items={childrenArray}
              activeKey={activeKey}
              activeKeyIndex={activeKeyIndex}
              onSortStart={onSortStart}
              onSortEnd={onSortEnd}
              axis={"x"}
              lockAxis="x"
              pressDelay={pressDelay}
              onChange={onChange}
              activeTabFlags={activeTabFlags}
              itemRef={itemRef}
              activeNxtRef={activeNxtRef}
              activePrevRef={activePrevRef}
              customColor={customColor}
              helperClass="knitui-tabs-helper"
              lockToContainerEdges
              lockOffset={lockOffset}
            />
            <BlurElement
              visible={showActiveRightBlur}
              dir="right"
              style={{
                right:
                  getWidthFromRef(rightArrowRef) + getWidthFromRef(itemRef),
              }}
              customColor={customColor}
            />
            <BlurElement
              visible={showRightBlur}
              dir="right"
              style={{
                right: getWidthFromRef(rightArrowRef),
              }}
              customColor={customColor}
            />
            <IconWrapper
              ref={rightArrowRef}
              visible={showRightArrow}
              onClick={handleScrollRight}
              customColor={customColor}>
              <Icon type="oKeyboardArrowRight" size="18px" fill="#000000" />
            </IconWrapper>
          </OverflowWrapper>
          {!hideAdd &&
            (AddButtonElement || (
              <ButtonWrapper
                disabled={readOnly}
                onClick={onAddTab}
                icon="oAdd"
                bare
                customColor="#000000"
                bgColor={customColor}
              />
            ))}
        </TabsPanelWrapper>
        {!hideTabContent && (
          <TabContentWrapper>{getTabsContent()}</TabContentWrapper>
        )}
      </TabsWrapper>
    </>
  )
}

Tabs.TabPanel = TabPanel
export default Tabs
