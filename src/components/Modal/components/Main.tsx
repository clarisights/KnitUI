import React from "react"
import styled from "styled-components"
import { IStyledDialog } from "../types"

const getPadding = (props: IStyledDialog) => {
  const {
    theme: { knitui },
    customProps: { padding },
  } = props
  return padding
    ? `${padding.vertical} ${padding.horizontal}`
    : `${knitui.modalPadding.vertical}rem ${knitui.modalPadding.horizontal}rem`
}

const StyledMain = styled.div<IStyledDialog>`
  padding: ${props => getPadding(props)};
  overflow-y: auto;
  flex: 1 1 auto;
`

const Main: any = React.forwardRef(
  (props: { customProps?: {}; children: React.ReactNode }, ref) => {
    const { children, customProps = {} } = props
    return (
      <StyledMain ref={ref} customProps={customProps}>
        {children}
      </StyledMain>
    )
  }
)

Main.defaultProps = {
  padding: {
    vertical: "2.8rem",
    horizontal: "2.1rem",
  },
}

export default Main
