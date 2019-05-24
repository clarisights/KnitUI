import React, { SFC, ReactNode, CSSProperties } from 'react'
import styled, { css } from 'styled-components'
import * as theme from "../styles/variables"
import { Neutral90, Neutral50, Neutral10 } from '../styles/palette'

const {
  typography: { size14 },
  inputBorderRadius,
  shades: { blue40 }
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
      props.separator ? "" : Neutral10.hex};
  }
`;

export const StyledText: any = styled.span`
  ${sharedStyles}
  cursor: pointer;
  color: ${Neutral50.hex};
  &:active {
    text-decoration: underline;
    color: ${blue40};
  }
`;

export const styledActive: any = styled.a`
  ${sharedStyles}
  color: ${Neutral90.hex}
`;

const BreadcrumbItem: SFC<BreadcrumbItemProps> = props => {
  const { separator, children, style, className, ...restProps } = props
  let link;
  link = (
    <StyledText {...restProps}>
    { children }
  </StyledText>
)

  return (
    <span>
      {React.cloneElement(link, {style, className, ...restProps})}
    </span>
  );
}

export default BreadcrumbItem
