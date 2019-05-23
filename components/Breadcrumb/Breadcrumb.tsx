import React, { ReactNode, ReactElement, CSSProperties, Component, cloneElement } from 'react'
import BreadcrumbItem, { BreadcrumbItemProps } from './BreadcrumbItem'

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
    const crumbs = React.Children.map(children, (element: ReactNode, index) => {
      if (!element) {
        return element
      }
      // Separator to be used among children, nothing for last child
      const sep = index === (children && children.length - 1) ? '' : separator
      return cloneElement(element as ReactElement<any>, {
        separator: sep,
        key: index
      })
    })
    return crumbs

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
