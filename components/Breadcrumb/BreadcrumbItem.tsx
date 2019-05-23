import React, { SFC, ReactNode, CSSProperties } from 'react'
import styled, { css } from 'styled-components'
import * as theme from "../styles/variables"

const {
  typography: { size14 },
  inputBorderRadius,
  shades: { gray30, gray95, blue40 }
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

const sharedStyles = css`
  font-size: ${`${size14.fontSize}rem`};
  line-height: ${size14.lineHeight};
  border-radius: ${inputBorderRadius};
  padding: 0 3px 0 3px;
  &:hover {
    background-color: ${(props: any) =>
      props.separator ? "" : gray95};
  }
`;

const StyledText: any = styled.span`
  ${sharedStyles}
  cursor: "default";
  color: ${gray30};
`

const StyledLink: any = styled.a`
  ${sharedStyles}
  text-decoration: "underline";
  color: ${blue40};
`;

const BreadcrumbItem: SFC<BreadcrumbItemProps> = props => {
  const { separator, children, style, className, ...restProps } = props
  let link
  console.log(children)
  if ('href' in props) {
    link = (
      <StyledLink link {...restProps}>{ children }</StyledLink>
      )
    } else {
      link = (
        <StyledText {...restProps}>
        { children }
      </StyledText>
    )
  }
  console.log(link)

  return (
    <span className={className || ''} {...restProps} style={style}>
      {link}
    </span>
  );
}

export default BreadcrumbItem
