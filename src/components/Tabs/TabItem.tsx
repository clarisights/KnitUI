import React, { CSSProperties } from "react"
import { SortableElement } from "react-sortable-hoc"
import styled, { CSSObject } from "styled-components"
import { activeTabFlagsInterface } from "./types"

const VerticalBar = styled.div`
  height: 14px;
  width: 0px;
  position: absolute;
  border-right: 1px solid #cccccc;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
`

type TabItemType = {
  value: any
  onChange: (activeKey: string) => void
  activeKey: string | null
  activeKeyIndex: number
  itemIndex: number
  activeTabFlags: activeTabFlagsInterface
  itemRef: React.RefObject<HTMLDivElement>
  activeNxtRef: React.RefObject<HTMLDivElement>
  activePrevRef: React.RefObject<HTMLDivElement>
}

const getTabContainerStyle = (
  activeTabFlags: activeTabFlagsInterface,
  activeKeyIndex: number,
  itemIndex: number,
  itemRef: React.RefObject<HTMLDivElement>
) => {
  let styles: React.CSSProperties = { position: "relative" }
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
  const current = itemRef.current
  if (activeTabFlags.left && activeKeyIndex === itemIndex - 1) {
    styles = {
      position: "relative",
      marginLeft:
        (current && current.getBoundingClientRect().width) || undefined,
    }
  } else if (activeTabFlags.right && activeKeyIndex === itemIndex + 1) {
    styles = {
      position: "relative",
      marginRight:
        (current && current.getBoundingClientRect().width) || undefined,
    }
  }
  return styles
}

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
  }: TabItemType) => {
    const props = value.props
    const isActive = props.tabKey === activeKey
    const elem = React.cloneElement(value, {
      key: props.tabKey,
      active: isActive,
      role: "tab",
      "aria-controls": "tabpanel-id",
      children: props.tab,
      onClick: () => !isActive && onChange(props.tabKey),
    })
    const showVBar = itemIndex + 1 !== activeKeyIndex && !isActive
    let styles = getTabContainerStyle(
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
      <div ref={getRef()} id={isActive ? "active-tab" : ""} style={styles}>
        {elem}
        {showVBar ? <VerticalBar tabIndex={-1} /> : null}
      </div>
    )
  }
)
