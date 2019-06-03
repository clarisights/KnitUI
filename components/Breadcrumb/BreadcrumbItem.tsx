import React, { SFC, ReactNode, CSSProperties } from "react"
import styled, { css } from "styled-components"
import * as theme from "../styles/variables"
import { Neutral90, Neutral50, Neutral10 } from "../styles/palette"

const {
  typography: { size14 },
  inputBorderRadius,
  shades: { blue40 },
} = theme
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

const sharedStyles = css`
  font-size: ${`${size14.fontSize}rem`};
  line-height: ${size14.lineHeight}rem;
  border-radius: ${inputBorderRadius};
  padding: 0 3px 0 3px;
  display: flex;
  align-items: center;
  &:hover {
    background-color: ${(props: any) => (props.separator ? "" : Neutral10.hex)};
  }
  cursor: ${(props: any) => (props.separator ? "default" : "pointer")};
  a,
  * a {
    text-decoration: underline;
    color: ${blue40};
  }
`

export const StyledText: any = styled.span`
  ${sharedStyles}
  color: ${Neutral50.hex};
`

export const StyledActive: any = styled.span`
  ${sharedStyles}
  color: ${Neutral90.hex}
`

const BreadcrumbItem: SFC<BreadcrumbItemProps> = props => {
  const {
    separator,
    children,
    childStyle,
    style,
    activeStyles,
    className,
    onClick,
    ...restProps
  } = props
  let link
  if ("activeElement" in props) {
    link = (
      <StyledActive
        style={{ ...childStyle, ...style, ...activeStyles }}
        onClick={onClick}
        className={className}
        {...restProps}>
        {children}
      </StyledActive>
    )
  } else {
    link = (
      <StyledText
        style={{ ...childStyle, ...style }}
        onClick={onClick}
        className={className}
        {...restProps}>
        {children}
      </StyledText>
    )
  }

  return link
}

export default BreadcrumbItem
