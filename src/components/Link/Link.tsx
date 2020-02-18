import React from "react"
import { ILinkProps } from "./types"
import { StyledLink } from "./Link.styles"

const Link = ({
  className,
  style,
  underline,
  href,
  children,
  disabled,
  newTab,
}: ILinkProps) => {
  const newTabProps = {
    target: "_blank",
    rel: "noopener noreferrer",
  }
  return (
    <StyledLink
      underline={underline}
      className={className}
      style={style}
      href={href}
      disabled={disabled}
      {...(newTab && newTabProps)}>
      {children}
    </StyledLink>
  )
}

Link.defaultProps = {
  underline: true,
  disabled: false,
  newTab: false,
}

export default Link
