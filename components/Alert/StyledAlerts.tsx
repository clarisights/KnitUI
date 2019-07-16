import styled from "styled-components"

export const TopLeftBox = styled.div`
  position: absolute;
  display: flex;
  flex-flow: column;
  left: 0px;
  top: 0px;
  padding-top: 10px;
  padding-left: 10px;
`

export const TopRightBox = styled.div`
  position: absolute;
  display: flex;
  flex-flow: column nowrap;
  right: 0px;
  top: 0px;
  padding-top: 10px;
  padding-right: 10px;
`

export const BottomLeftBox = styled.div`
  position: absolute;
  display: flex;
  flex-flow: column nowrap;
  left: 0px;
  bottom: 0px;
  padding-bottom: 10px;
  padding-left: 10px;
`

export const BottomRightBox = styled.div`
  position: absolute;
  display: flex;
  flex-flow: column nowrap;
  right: 0px;
  bottom: 0px;
  padding-bottom: 10px;
  padding-right: 10px;
`
