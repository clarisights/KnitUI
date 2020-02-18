import { ActiveTabFlagsInterface } from "./types"

export const getWidthFromRef = (refNode: React.RefObject<HTMLDivElement>) => {
  return refNode.current ? refNode.current.offsetWidth : 0
}

export const getTabContainerStyle = (
  activeTabFlags: ActiveTabFlagsInterface,
  activeKeyIndex: number,
  itemIndex: number,
  itemRef: React.RefObject<HTMLDivElement>
) => {
  let styles: React.CSSProperties = { zIndex: 99, position: "relative" }
  if (activeKeyIndex === itemIndex) {
    styles = { zIndex: 101 }
  }
  if (activeTabFlags.left && activeKeyIndex === itemIndex) {
    styles = {
      position: "sticky",
      zIndex: 101,
      left: 0,
    }
  } else if (activeTabFlags.right && activeKeyIndex === itemIndex) {
    styles = {
      position: "sticky",
      zIndex: 101,
      right: 0,
    }
  }
  return styles
}
