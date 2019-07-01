import React, { SFC, ReactNode, CSSProperties } from "react"
import styled, { css } from "styled-components"
import * as theme from "../styles/variables"
import { Neutral90, Neutral50, Neutral10 } from "../styles/palette"

const TYPOGRAPHY_SIZE = 14

const {
  typography,
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

const sharedStyles = css<BreadcrumbItemProps>`
  font-size: ${`${typography[TYPOGRAPHY_SIZE].fontSize}rem`};
  line-height: ${typography[TYPOGRAPHY_SIZE].lineHeight}rem;
  border-radius: ${inputBorderRadius};
  padding: 0 3px 0 3px;
  display: flex;
  align-items: center;
  &:hover {
    background-color: ${props => (props.separator ? "" : Neutral10.hex)};
  }
  cursor: ${props => (props.separator ? "default" : "pointer")};
  a,
  * a {
    text-decoration: underline;
    color: ${blue40};
  }
`

export const StyledText = styled.span`
  ${sharedStyles}
  color: ${Neutral50.hex};
`

export const StyledActive = styled.span`
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
