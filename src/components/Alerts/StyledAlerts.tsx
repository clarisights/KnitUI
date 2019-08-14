import styled from "styled-components"
import { animated } from "react-spring"

const positionBoxStyle = `
position: fixed;
overflow: hidden;
display: flex;
`

export const TopLeftBox = styled.div`
  ${positionBoxStyle}
  left: 0px;
  top: 0px;
  padding-top: 10px;
  padding-left: 10px;
  flex-flow: column nowrap;
  align-items: flex-start;
`

export const TopRightBox = styled.div`
  ${positionBoxStyle}
  right: 0px;
  top: 0px;
  padding-top: 10px;
  padding-right: 10px;
  flex-flow: column nowrap;
  align-items: flex-end;
`

export const BottomLeftBox = styled.div`
  ${positionBoxStyle}
  left: 0px;
  bottom: 0px;
  padding-bottom: 10px;
  padding-left: 10px;
  flex-flow: column-reverse nowrap;
  align-items: flex-start;
`

export const BottomRightBox = styled.div`
  ${positionBoxStyle}
  right: 0px;
  bottom: 0px;
  padding-bottom: 10px;
  padding-right: 10px;
  flex-flow: column-reverse nowrap;
  align-items: flex-end;
`

export const TransitionDiv = styled(animated.div)`
  margin: 4px 0;
`

export const AlertDiv = styled(animated.div)``
