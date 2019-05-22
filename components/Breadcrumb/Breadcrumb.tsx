import React, { SFC, ReactNode, CSSProperties, Component } from 'react'
import BreadcrumbItem, { BreadcrumbItemProps } from './BreadcrumbItem'

export interface BreadcrumbProps {
  /** crumbs of the data to be shown */
  crumbs: string[] | ReactNode[],
  /** separate to be using between crumbs */
  separator?: string | ReactNode,
  /** styles specified by the user */
  style?: CSSProperties
}

export default class Breadcrumb extends Component<BreadcrumbProps, any> {
  static Item: React.FunctionComponent<BreadcrumbItemProps>

  static defaultProps = {
    separator: '/'
  }

  renderBreadcrumbs = (crumbs: string[] | ReactNode[], separator: string | ReactNode): ReactNode => {
    return crumbs.map((crumb, i) => <span>{crumb}<span> {i !== crumbs.length - 1 && separator} </span></span>)
  }
  
  render() {
    const { crumbs, separator } = this.props
    console.log(crumbs)
    return (
      <>
        {
          this.renderBreadcrumbs(crumbs, separator)
        }
      </>
    )
  }
}
