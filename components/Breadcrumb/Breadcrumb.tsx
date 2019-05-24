import React, { ReactNode, ReactElement, CSSProperties, Component, cloneElement } from 'react'
import BreadcrumbItem, { BreadcrumbItemProps, StyledText } from './BreadcrumbItem'

export interface BreadcrumbProps {
  /** separate to be using between crumbs */
  separator?: string | ReactNode
  /** styles specified by the user */
  style?: CSSProperties
  /** Breadcrumb Items in children */
  children?: ReactNode[]
  /** className for user to specify their class */
  className?: string
}


export default class Breadcrumb extends Component<BreadcrumbProps, any> {
  static Item: React.FunctionComponent<BreadcrumbItemProps>

  static defaultProps = {
    separator: '/'
  }

  renderBreadcrumbs = (): ReactNode => {
    const { children, className, separator, style } = this.props;
    const updatedChilds = this.insertSeparators(children, separator)
    const crumbs = React.Children.map(updatedChilds, (element: ReactNode, index) => {
      if (!element) {
        return element
      }
      // Separator to be used among children, nothing for last child
      const sep = index === (children && children.length - 1) ? '' : separator
      return cloneElement(element as ReactElement<any>, {
        key: index
      })
    })
    return crumbs
  }

  // Logic to insert separators among the list of children
  insertSeparators = (crumbs: ReactNode[], separator: ReactNode | string) => {
    const updatedCrumbs: ReactNode[] = []
    crumbs.forEach((crumb: ReactNode, index: number) => {
      updatedCrumbs.push(crumb)
      // Insert nodes till last element
      if (index < crumbs.length - 1) {
        updatedCrumbs.push(
          <StyledText separator>{separator}</StyledText>
        )
      }
    })
    return updatedCrumbs
  }

  render() {
    const { className, style } = this.props
    return (
      <div className={className || ''} style={style}>
        {this.renderBreadcrumbs()}
      </div>
    );
  }
}
