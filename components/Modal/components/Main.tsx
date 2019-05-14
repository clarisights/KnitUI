import React, { useContext } from 'react'
import styled from "styled-components"
import { StyleContext } from "../common"

export default ({ children, setBodyRef }) => {
  const { padding: {horizontal, vertical} } = useContext(StyleContext)
  const Main = styled.div`
    padding: ${`${vertical} ${horizontal} 0rem`};
    overflow-y: auto;
    flex: 1 1 auto;
  `

  return (<Main ref={setBodyRef}>{children}</Main>)
}
