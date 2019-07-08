import React, {
  ReactNode,
  ReactElement,
  CSSProperties,
  cloneElement,
  useState,
} from "react"
import styled from "styled-components"
import { StyledText } from "./BreadcrumbItem"
import BreadcrumbItem from "./BreadcrumbItem"
import { BreadcrumbProps, IBreadCrumb } from "./types"

const StyledParent = styled.div<BreadcrumbProps>`
  display: flex;
  max-width: ${props => props.maxWidth};
  flex-wrap: wrap;
  width: fit-content;
  align-items: center;
`

const Breadcrumb: IBreadCrumb = props => {
  const {
    className,
    rootStyle,
    maxWidth,
    children,
    truncateTo = Infinity,
    separator,
    activeStyles,
    childStyle,
  } = props

  const [showAll, setShowAll] = useState(false)

  const renderBreadcrumbs = (): ReactNode => {
    const updatedChildren =
      React.Children.count(children) > 1
        ? preprocessCrumbs(
            children as ReactNode[],
            separator,
            truncateTo,
            setShowAll,
            showAll,
            childStyle
          )
        : children
    const crumbs = React.Children.map(
      updatedChildren,
      (element: ReactNode, index) => {
        if (!element) {
          return element
        }
        return cloneElement(element as ReactElement<any>, {
          key: index,
          childStyle,
          activeStyles,
        })
      }
    )
    return crumbs
  }

  return (
    <StyledParent
      className={className || ""}
      maxWidth={maxWidth}
      style={rootStyle}>
      {renderBreadcrumbs()}
    </StyledParent>
  )
}

// Logic to insert separators among the list of children
const preprocessCrumbs = (
  crumbs: ReactNode[],
  separator: ReactNode | string,
  truncateTo: number,
  setShowAll: Function,
  showAll: boolean,
  childStyle?: CSSProperties
) => {
  // Container where we insert nodes and separators in appropriate places
  const updatedCrumbs: ReactNode[] = []
  // A bool to check whether the ... is inserted or not
  let truncated = false
  // Handle the range of truncateTo
  if (truncateTo < 1) {
    truncateTo = 1
    console.warn(
      `Prop 'truncateTo' has been set to 1 since it's the lowest possible value`
    )
  }
  crumbs.forEach((crumb: ReactNode, index: number) => {
    const shouldInsertCrumbs =
      index === 0 || index >= crumbs.length - truncateTo || showAll
    if (shouldInsertCrumbs) {
      if (index !== crumbs.length - 1) {
        updatedCrumbs.push(
          cloneElement(crumb as ReactElement<any>, {
            childStyle,
          })
        )
      } else {
        updatedCrumbs.push(
          cloneElement(crumb as ReactElement<any>, {
            activeElement: true,
            childStyle,
          })
        )
      }
      // Insert nodes till last element
      if (index < crumbs.length - 1) {
        updatedCrumbs.push(
          <StyledText style={childStyle} separator>
            {separator}
          </StyledText>
        )
      }
    } else if (!truncated) {
      updatedCrumbs.push(
        <StyledText style={childStyle} onClick={() => setShowAll(true)}>
          ...
        </StyledText>
      )
      updatedCrumbs.push(
        <StyledText style={childStyle} separator>
          {separator}
        </StyledText>
      )
      truncated = true
    }
  })
  return updatedCrumbs
}

Breadcrumb.defaultProps = {
  separator: "/",
  truncateTo: Infinity,
}

Breadcrumb.Item = BreadcrumbItem

export default Breadcrumb
