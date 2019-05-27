import React, {
  ReactNode,
  ReactElement,
  CSSProperties,
  Component,
  cloneElement,
} from "react"
import { BreadcrumbItemProps, StyledText, StyledActive } from "./BreadcrumbItem"

export interface BreadcrumbProps {
  /** separate to be using between crumbs */
  separator?: string | ReactNode
  /** styles specified by the user */
  style?: CSSProperties
  /** Breadcrumb Items in children */
  children?: ReactNode[] | ReactNode
  /** className for user to specify their class */
  className?: string
  /** Max width of the breadcrumb to be wrapped in */
  maxWidth?: string
  /** Level till which the crumbs are to be shown (from end) First is shown anyways */
  truncateTo?: number
  /** Styles for the active item */
  activeStyles?: CSSProperties
}

export default class Breadcrumb extends Component<BreadcrumbProps, any> {
  static Item: React.FunctionComponent<BreadcrumbItemProps>
  static defaultProps = {
    separator: "/",
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
    } = this.props
    const updatedChildren = Array.isArray(children)
      ? this.insertSeparators(children, separator, truncateTo)
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
  insertSeparators = (
    crumbs: ReactNode[],
    separator: ReactNode | string,
    truncateTo: number
  ) => {
    // Container where we insert nodes and separators in appropriate places
    const updatedCrumbs: ReactNode[] = []
    // bool to check whether all items are to be shown
    const { showAll } = this.state
    // A bool to check whether the ... is inserted or not
    let truncated = false
    crumbs.forEach((crumb: ReactNode, index: number) => {
      const insertStuff =
        index === 0 || index >= crumbs.length - truncateTo || showAll
      if (insertStuff) {
        if (index !== crumbs.length - 1) {
          updatedCrumbs.push(crumb)
        } else {
          updatedCrumbs.push(
            cloneElement(crumb as ReactElement<any>, { activeElement: true })
          )
        }
        // Insert nodes till last element
        if (index < crumbs.length - 1) {
          updatedCrumbs.push(<StyledText separator>{separator}</StyledText>)
        }
      } else if (!truncated) {
        updatedCrumbs.push(
          <StyledText onClick={() => this.setState({ showAll: true })}>
            ...
          </StyledText>
        )
        updatedCrumbs.push(<StyledText separator>{separator}</StyledText>)
        truncated = true
      }
    })
    return updatedCrumbs
  }

  render() {
    const { className, style, maxWidth } = this.props
    const parentStyle: CSSProperties = {
      display: "flex",
      maxWidth,
      flexWrap: "wrap",
      width: "fit-content",
      alignItems: "center",
      ...style,
    }
    return (
      <div className={className || ""} style={parentStyle}>
        {this.renderBreadcrumbs()}
      </div>
    )
  }
}
