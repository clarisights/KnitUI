import styled from "styled-components"
import { IStyledDialog } from "../types"

const getPadding = (props: IStyledDialog) => {
  const { theme: { knitui }, customProps: { padding } } = props
  return padding ?
    `${padding.vertical} ${padding.horizontal}`
      :
    `${knitui.modalPadding.vertical}rem ${knitui.modalPadding.horizontal}rem`
}

const Main = styled.div<IStyledDialog>`
  padding: ${props => getPadding(props)};
  overflow-y: auto;
  flex: 1 1 auto;
`

export default Main
