import React, { SFC, ReactNode, CSSProperties } from 'react'
import styled from 'styled-components'
import * as theme from "../styles/variables"

const {
  typography: { size14 },
  inputBorderRadius,
  breadcrumbColor,
  breadcrumbHover,
  breadcrumbLinkColor
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
}

const StyledText: any = styled.span`
  font-size: ${`${size14.fontSize}rem`};
  line-height: ${size14.lineHeight};
  color: ${(props: any) => props.link ? breadcrumbLinkColor : breadcrumbColor};
  border-radius: ${inputBorderRadius};
  text-decoration: ${(props: any) => props.link ? 'underline' : 'none'};
  padding: 0 3px 0 3px;
  cursor: ${(props: any) => props.link ? 'pointer' : 'default'};
  &:hover {
    background-color: ${(props: any) => props.separator ? '' : breadcrumbHover}
  }
`

const BreadcrumbItem: SFC<BreadcrumbItemProps> = props => {
  const { separator, children, style, className, ...restProps } = props
  let link

  if ('href' in props) {
    link = (
      <StyledText link {...restProps}>{ children }</StyledText>
    )
  } else {
    link = (
      <StyledText {...restProps}>
        { children }
      </StyledText>
    )
  }

  return (
    <span className={className || ''} {...restProps} style={style}>
      {link}
      <StyledText separator>{separator}</StyledText>
    </span>
  );
}

export default BreadcrumbItem
