import styled from "styled-components"

const Main = styled.div`
  padding: ${({ theme: { modalPadding } }) =>
    `${modalPadding.vertical} ${modalPadding.horizontal} 0rem`};
  overflow-y: auto;
  flex: 1 1 auto;
`

export default Main
