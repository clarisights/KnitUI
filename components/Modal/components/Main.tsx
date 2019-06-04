import React, { useContext, ReactNode } from "react"
import styled from "styled-components"
import { StyleContext } from "../common/contexts"

export default ({
  children,
  setBodyRef,
}: {
  children: ReactNode
  setBodyRef: (instance: HTMLDivElement | null) => void
}) => {
  const {
    padding: { horizontal, vertical },
  } = useContext(StyleContext)
  const Main = styled.div`
    padding: ${`${vertical} ${horizontal} 0rem`};
    overflow-y: auto;
    flex: 1 1 auto;
  `

  return <Main ref={setBodyRef}>{children}</Main>
}
