import React, { ReactNode } from "react"
import styled from "styled-components"
import { padding } from "../common/styles"

export default ({
  children,
  setBodyRef,
}: {
  children: ReactNode
  setBodyRef: (instance: HTMLDivElement | null) => void
}) => {
  const Main = styled.div`
    padding: ${`${padding.vertical} ${padding.horizontal} 0rem`};
    overflow-y: auto;
    flex: 1 1 auto;
  `

  return <Main ref={setBodyRef}>{children}</Main>
}
