import React, { SFC } from "react"
import styled, { css } from "styled-components"
import { BreadcrumbItemProps } from "./types"

const TYPOGRAPHY_SIZE = 14

const sharedStyles = css<BreadcrumbItemProps>(
  props => `
  font-size: ${props.theme.knitui.typography[TYPOGRAPHY_SIZE].fontSize}rem;
  line-height: ${props.theme.knitui.typography[TYPOGRAPHY_SIZE].lineHeight}rem;
  border-radius: ${props.theme.knitui.inputBorderRadius};
  padding: 0 3px 0 3px;
  display: flex;
  align-items: center;
  &:hover {
    background-color: ${({ separator, theme: { knitui } }) =>
      separator ? "" : knitui.chromaPalette.Neutral10};
  }
  cursor: ${props.separator ? "default" : "pointer"};
  a,
  * a {
    text-decoration: underline;
    color: ${({ theme: { knitui } }) => knitui.shades.blue40};
  }
`
)

export const StyledText = styled.span<BreadcrumbItemProps>`
  ${sharedStyles}
  color: ${({ theme: { knitui } }) => knitui.chromaPalette.Neutral50};
`

export const StyledActive = styled.span<BreadcrumbItemProps>`
  ${sharedStyles}
  color: ${({ theme: { knitui } }) => knitui.chromaPalette.Neutral90}
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
