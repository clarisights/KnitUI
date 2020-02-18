import { RefObject } from "react"
import styled, { createGlobalStyle } from "styled-components"
import { Button, Icon } from ".."
import { getThemeColor, getOSName } from "../../common/_utils"

/* The tab being dragged is appended to the body, hence it's styles need to be at global scope*/

export const GlobalStyle = createGlobalStyle`
.knitui-tabs-helper:not(#knit-active-tab) {
  background: ${props => getThemeColor(props, "Beige10")};
  
  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    height: 1.4rem;
    width: 1px;
    background: ${props => getThemeColor(props, "Neutral40")};
  }
}

.knitui-tabs-helper {
  white-space: nowrap;
}
`

export const ButtonWrapper = styled(Button)`
  border-radius: 4px 4px 0 0;
  :hover,
  :focus,
  :active {
    background: #efe9dc;
  }
`

export const TabsWrapper = styled.div<{ hideTabContent: boolean }>`
  height: ${({ hideTabContent }) => (hideTabContent ? "auto" : "100%")};
  width: 100%;
`

export const TabsPanelWrapper = styled.div`
  display: flex;
  background: ${props => getThemeColor(props, "Beige10")};
`

const getActiveTabHeight = props => {
  return "100%"

  /**
   * Idea was to assign height as much as active tab but during drag tab
   * height has extra 2px which causing recursive increase of OverflowWrapper's height.
   * Have to find work-around for this.
   */
  return props.activeTabRef.current
    ? `${props.activeTabRef.current.getBoundingClientRect().height}px`
    : "100%"
}

export const OverflowWrapper = styled.div<{
  activeTabRef: RefObject<HTMLDivElement>
}>`
  /**
   * Height needed to taken from ref because in some cases like in MacOS Mojave 
   * irrespective of browser & it's version, padding-bottom still visible.
   */
  height: ${props => getActiveTabHeight(props)};
  overflow: hidden;
  position: relative;
  display: flex;
`

export const BlurElement = styled.div<{ dir: string; visible: boolean }>`
  width: 80px;
  height: 100%;
  position: absolute;
  background: linear-gradient(
    to ${props => (props.dir === "left" ? "right" : "left")},
    ${props => getThemeColor(props, "Beige10")}FF,
    ${props => getThemeColor(props, "Beige10")}00
  );
  z-index: 100;
  visibility: ${props => (props.visible ? "visible" : "hidden")};
  pointer-events: none;
`

export const IconWrapper = styled.div<{ visible: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: visibility 250ms ease, width 150ms linear;
  visibility: ${props => (props.visible ? "visible" : "hidden")};
  width: ${props => (props.visible ? "30px" : "0")};
  cursor: pointer;
  z-index: 100;

  :hover,
  :focus,
  :active {
    background: #efe9dc;
  }
`

export const TabPanel = styled.button<{
  active?: boolean
  dragHandle?: boolean
}>`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  word-wrap: none;

  background: ${props =>
    props.active ? getThemeColor(props, "Neutral0") : "none"};
  color: ${props =>
    props.active
      ? getThemeColor(props, "Neutral90")
      : getThemeColor(props, "Neutral50")};
  border: 2px solid transparent;
  border-top: ${props =>
    props.active ? "2px solid #D8C9A7" : "2px solid transparent"};
  padding: 4px 14px;
  border-radius: 4px 4px 0px 0px;
  min-width: 80px;
  line-height: 20px;
  font-size: 14px;
  cursor: ${props => (props.dragHandle && props.active ? "auto" : "pointer")};

  /* To prevent focus outline overlapping with divider */
  margin-right: ${props => (props.active ? "0" : "1px")};

  :hover {
    background: ${props => (props.active ? "#FFFFFF" : "#efe9dc")};
  }

  :active,
  :focus {
    z-index: 101 !important;
    outline-color: ${props => getThemeColor(props, "Azure80")};
    border-color: ${props => getThemeColor(props, "Azure80")} auto 1px;
  }
`

export const TabContentWrapper = styled.div`
  width: 100%;
`

export const OverflowContainer = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
  width: 100%;
  overflow: scroll hidden;
  padding-bottom: ${getOSName() !== "MacOS" ? "0px" : "17px"};
  margin-bottom: -17px;
  box-sizing: content-box;
`

export const DragIcon = styled(Icon)`
  cursor: grab;
  & svg {
    fill: ${props => getThemeColor(props, "Neutral45")};
  }
  margin-right: 0.4rem;
  & svg :hover,
  & svg :active,
  & svg :focus {
    fill: #000000;
  }
`

export const VerticalBar = styled.div`
  height: 14px;
  width: 0px;
  position: absolute;
  border-right: 1px solid #cccccc;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  pointer-events: none;
`
