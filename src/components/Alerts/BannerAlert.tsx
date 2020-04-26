import React from "react"
import ReactDOM from "react-dom"
import styled from "styled-components"
import { BannerAlertProps } from "./types"

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 4.8rem;
  padding: 0 2.8rem;
  display: flex;
  align-items: center;
  color: white;
  font-size: 1.4rem;
  line-height: 2rem;
  background-color: ${({ theme }) => theme.knitui.chromaPalette.Crimson80};
`

const BannerAlert = (props: BannerAlertProps) => {
  const alertMountNode = document.createElement("div")
  alertMountNode.classList.add("knitui-alerts-root")

  document.body.appendChild(alertMountNode)

  return (
    <div>
      {ReactDOM.createPortal(
        <Wrapper>{props.children}</Wrapper>,
        alertMountNode
      )}
    </div>
  )
}

export default BannerAlert
