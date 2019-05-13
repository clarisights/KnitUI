import React from 'react'
import styled from "styled-components"

export default ({ children, padding }) => {
  const Main = styled.div`
    padding: ${`${padding.vertical} ${padding.horizontal} 0rem`}
  `
  return (<Main>{children}</Main>)
}
