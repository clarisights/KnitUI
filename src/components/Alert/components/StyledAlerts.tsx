import styled from "styled-components"
import { animated } from "react-spring"

export const TopLeftBox = styled.div`
  position: fixed;
  left: 0px;
  top: 0px;
  overflow: hidden;
  // bottom: 0px;
  padding-top: 10px;
  padding-left: 10px;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
`

export const TopRightBox = styled.div`
  position: fixed;
  right: 0px;
  top: 0px;
  overflow: hidden;
  // bottom: 0px;
  padding-top: 10px;
  padding-right: 10px;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-end;
`

export const BottomLeftBox = styled.div`
  position: fixed;
  left: 0px;
  bottom: 0px;
  overflow: hidden;
  // top: 0px;
  padding-bottom: 10px;
  padding-left: 10px;
  display: flex;
  flex-flow: column-reverse nowrap;
  align-items: flex-start;
`

export const BottomRightBox = styled.div`
  position: fixed;
  right: 0px;
  bottom: 0px;
  overflow: hidden;
  // top: 0px;
  padding-bottom: 10px;
  padding-right: 10px;
  display: flex;
  flex-flow: column-reverse nowrap;
  align-items: flex-end;
`

export const AnimatedDiv = styled(animated.div)`
  margin: 4px 0;
`

export const Div = styled(animated.div)``
