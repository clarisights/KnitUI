import { ReactNode, CSSProperties } from "react"

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

export interface BreadcrumbItemProps {
  /** Link to the route which breadcrumb item should redirect to */
  href?: string
  /** Separator to be used */
  separator?: string | ReactNode
  /** Custom styles of the breadcrumb item */
  style?: CSSProperties
  /** className to be passed to the item */
  className?: string
  /** Styling of the active element if any */
  activeStyles?: CSSProperties
  /** Styles for all crumbs */
  childStyle?: CSSProperties
  /** onClick event */
  onClick?: (event) => void
}

export interface IBreadCrumb extends React.FC<BreadcrumbProps> {
  Item: React.FC<BreadcrumbItemProps>
}
