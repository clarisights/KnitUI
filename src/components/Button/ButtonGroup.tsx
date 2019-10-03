import React, { ReactNode } from "react"
import styled from "styled-components"
import { ButtonBase } from "./components"

type ButtonGroupProps = {
  children: ReactNode
}
const ButtonGroupWrapper = styled.div`
  display: flex;
  & ${ButtonBase} {
    border-radius: 0rem;
  }
  & ${ButtonBase}:first-of-type {
    border-top-left-radius: 0.4rem;
    border-bottom-left-radius: 0.4rem;
  }
  & ${ButtonBase}:last-of-type {
    border-top-right-radius: 0.4rem;
    border-bottom-right-radius: 0.4rem;
  }
  & ${ButtonBase}:not(:last-of-type)::after {
    content: "";
    display: block;
    width: 1px;
  }
`

const StyledVerticalBar = styled.hr`
  margin-left: -1px;
  border: none;
  border-left: 1px solid rgba(255, 255, 255, 0.2);
`

const ButtonGroup: React.FC<ButtonGroupProps> = props => {
  const childrenCount = React.Children.count(props.children)
  return (
    <ButtonGroupWrapper>
      {React.Children.map(props.children, (child, i) => {
        console.log(child)
        if (i == childrenCount - 1) return child
        return (
          <>
            {child}
            <StyledVerticalBar />
          </>
        )
      })}
    </ButtonGroupWrapper>
  )
}

export default ButtonGroup
