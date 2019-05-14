import React, { ReactNode, useState } from 'react'
import styled from "styled-components"

interface MainProps {
  children: ReactNode,
  padding: { vertical: string, horizontal: string }
}

export default ({ children, padding, setBodyRef }) => {

  const Main = styled.div`
    padding: ${`${padding.vertical} ${padding.horizontal} 0rem`};
    overflow-y: auto;
    flex: 1 1 auto;
  `

  return (<Main ref={setBodyRef}>{children}</Main>)
}
