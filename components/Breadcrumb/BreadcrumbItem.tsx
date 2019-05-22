import React, { SFC, ReactNode } from 'react'
import styled from 'styled-components'
import * as theme from "../styles/variables";

const {
  typography: { size14 },
  inputBorderRadius,
  breadcrumbColor,
  breadcrumbHover,
  breadcrumbLinkColor
} = theme


export interface BreadcrumbItemProps {
  href?: string
  separator?: string | ReactNode
}

const StyledText: any = styled.span`
  font-size: ${`${size14.fontSize}rem`};
  line-height: ${size14.lineHeight};
  color: ${breadcrumbColor};
  border-radius: ${inputBorderRadius};
  padding: 0 3px 0 3px;
  &:hover {
    background-color: ${(props: any) => props.separator ? '' : breadcrumbHover}
  }
`

const StyledLink: any = styled.a`
  font-size: ${`${size14.fontSize}rem`};
  line-height: ${size14.lineHeight};
  color: ${breadcrumbLinkColor};
  border-radius: ${inputBorderRadius};
  padding: 0 3px 0 3px;
  &:hover {
    background-color: ${breadcrumbHover};
  }
`

const BreadcrumbItem: SFC<BreadcrumbItemProps> = props => {
  const { separator, children, ...restProps } = props
  let link

  if('href' in props) {
    link = (
      <StyledLink {...restProps}>{ children }</StyledLink>
    )
  } else {
    link = (
      <StyledText {...restProps}>
        { children }
      </StyledText>
    )
  }

  return (
    <span>
      {link}
      <StyledText separator>{separator}</StyledText>
    </span>
  );
}

export default BreadcrumbItem
