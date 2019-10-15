import React, { ReactNode, ReactElement } from "react"
import styled from "styled-components"
import { ButtonBase } from "./components"
import { BaseComponentProps } from "../../common/types"

const getStyleForGhostButtons = (props: ButtonGroupWrapperProps) => {
  const style = props.isAllGhost
    ? `
        & ${ButtonBase}:not(:last-of-type){
          border-right: 0px;
        }
        & ${ButtonBase}:hover,& ${ButtonBase}:focus{
          border-right: 1px solid;
        }
        & ${ButtonBase}:hover+${ButtonBase}:focus{
          margin-left: -1px;
        }
        & ${ButtonBase}:focus {
          box-shadow: 0 0 2px;
          z-index: 1;
        }
        & ${ButtonBase}:hover+${ButtonBase}, & ${ButtonBase}:focus+${ButtonBase}{
          border-left: 0px;
        }
      `
    : `
        & ${ButtonBase}:not(:last-of-type)::after {
          content: "";
          display: block;
          width: 1px;
        }
      `
  return style
}

const StyledVerticalBar = styled.hr`
  margin-left: -1px;
  border: none;
  border-left: 1px solid rgba(255, 255, 255, 0.2);
  z-index: 1;
`

interface ButtonGroupWrapperProps extends ButtonGroupProps {
  isAllGhost: boolean
}
const ButtonGroupWrapper = styled.div<ButtonGroupWrapperProps>`
  //To have width equal to all of it's child component.
  display: inline-flex;

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

  // Style will be added if all buttons have ghost property
  ${props => getStyleForGhostButtons(props)}
`

interface ButtonGroupProps extends BaseComponentProps {
  children: ReactNode
  [htmlProp: string]: any
}
const ButtonGroup: React.FC<ButtonGroupProps> = props => {
  const childrenCount = React.Children.count(props.children)
  const { children, ...rest } = props
  let countGhost = 0
  React.Children.forEach(props.children, (child: ReactElement, i) => {
    if (child.props.ghost) countGhost += 1
  })

  const isAllGhost = countGhost === childrenCount ? true : false
  return (
    <ButtonGroupWrapper isAllGhost={isAllGhost} {...rest}>
      {React.Children.map(props.children, (child: ReactElement, i: Number) =>
        i == childrenCount - 1 ? (
          child
        ) : (
          <>
            {child}
            {!isAllGhost ? <StyledVerticalBar /> : null}
          </>
        )
      )}
    </ButtonGroupWrapper>
  )
}

export default ButtonGroup
