import React, {
  ReactNode,
  ReactElement,
  CSSProperties,
  Component,
  cloneElement,
} from "react"
import styled from "styled-components"
import { BreadcrumbItemProps, StyledText } from "./BreadcrumbItem"

export interface BreadcrumbProps {
  /** separate to be using between crumbs */
  separator?: string | ReactNode
  /** Styles applied to the root */
  rootStyle?: CSSProperties
  /** Styles applied to each child */
  childStyle?: CSSProperties
  /** Breadcrumb Items in children */
  children?: ReactNode[] | ReactNode
  /** className for user to specify their class */
  className?: string
  /** Max width of the breadcrumb to be wrapped in */
  maxWidth?: string
  /** Level till which the crumbs are to be shown (from end). First is shown anyways */
  truncateTo?: number
  /** Styles for the active item */
  activeStyles?: CSSProperties
}

const StyledParent: any = styled.div`
  display: flex;
  max-width: ${(props: any) => props.maxWidth};
  flex-wrap: wrap;
  width: fit-content;
  align-items: center;
`

export default class Breadcrumb extends Component<BreadcrumbProps, any> {
  static Item: React.FunctionComponent<BreadcrumbItemProps>
  static defaultProps = {
    separator: "/",
    truncateTo: Infinity,
  }

  state = {
    showAll: false,
  }

  renderBreadcrumbs = (): ReactNode => {
    const {
      children,
      truncateTo = Infinity,
      separator,
      activeStyles,
      childStyle,
    } = this.props
    const updatedChildren = Array.isArray(children)
      ? this.preprocessCrumbs(children, separator, truncateTo, childStyle)
      : children
    const crumbs = React.Children.map(
      updatedChildren,
      (element: ReactNode, index) => {
        if (!element) {
          return element
        }
        return cloneElement(element as ReactElement<any>, {
          key: index,
          activeStyles,
        })
      }
    )
    return crumbs
  }

  // Logic to insert separators among the list of children
  preprocessCrumbs = (
    crumbs: ReactNode[],
    separator: ReactNode | string,
    truncateTo: number,
    childStyle: CSSProperties
  ) => {
    // Container where we insert nodes and separators in appropriate places
    const updatedCrumbs: ReactNode[] = []
    // bool to check whether all items are to be shown
    const { showAll } = this.state
    // A bool to check whether the ... is inserted or not
    let truncated = false
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
          <StyledText
            style={childStyle}
            onClick={() => this.setState({ showAll: true })}>
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

  render() {
    const { className, rootStyle, maxWidth } = this.props
    return (
      <StyledParent
        className={className || ""}
        maxWidth={maxWidth}
        style={rootStyle}>
        {this.renderBreadcrumbs()}
      </StyledParent>
    )
  }
}
