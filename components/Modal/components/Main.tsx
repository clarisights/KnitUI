import React from 'react'
import styled from "styled-components"

export default ({ children, padding }) => {
  const Main = styled.div`
    padding: ${`${padding.vertical} ${padding.horizontal} 0rem`};
    overflow-y: scroll;
    flex: 1 1 auto;
  `
  return (<Main>{children}</Main>)
}
