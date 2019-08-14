import React, { ReactNode } from "react"
import styled, { css, keyframes } from "styled-components"
import { AlertContainerProps, AlertContentWrapperProps } from "./AlertInterface"
import {
  Magenta80,
  Yellow80,
  Green80,
  Crimson80,
  Neutral10,
  Neutral0,
} from "../../common/styles/palette"
import { typography } from "../../common/styles/variables"
import Icon from "../Icon/index"

const isPrefixClassName = (prefixClassName: string | undefined) =>
  prefixClassName !== "" && prefixClassName !== undefined

const width = {
  "x-small": 280,
  small: 350,
  medium: 490,
  large: 770,
}

const background = {
  standard: Magenta80.hex,
  warning: Yellow80.hex,
  success: Green80.hex,
  error: Crimson80.hex,
}

const { fontSize: textFontSize, lineHeight: textLineHeight } = typography[14]
const {
  fontSize: headingFontSize,
  lineHeight: headingLineHeight,
} = typography[18]

export const AlertContainer = styled("div").attrs(
  (props: AlertContainerProps) => ({
    className:
      isPrefixClassName(props.prefixClassName) &&
      props.prefixClassName + "-knit-alert",
  })
)<AlertContainerProps>`
  width: ${({ size }) => width[size]}px;
  background: ${({ type }) => background[type]};
  border-radius: 4px;
  border: 1px solid ${({ type }) => background[type]}
  box-sizing: border-box;
  color: ${Neutral10.hex};
  display: flex;
  padding: 14px 14px 14px 0;
  overflow: hidden;
  opacity: 1;
  transition: all 0.5s;

  &.hide {
    opacity: 0;
  }
`

//  &${props => props.style}
export const AlertContentWrapper = styled.div.attrs(
  ({ prefixClassName }: AlertContentWrapperProps) => ({
    className:
      isPrefixClassName(prefixClassName) &&
      prefixClassName + "-knit-alert-content-wrapper",
  })
)<AlertContentWrapperProps>`
  display: flex;
  margin-left: 1.4rem;
  flex-direction: ${({ heading, multiLine }) =>
    heading && multiLine ? "column" : "row"};
  justify-content: space-between;
  width: 100%;
`

export const AlertContent = styled.div.attrs(
  ({ prefixClassName }: { prefixClassName: string }) => ({
    className:
      isPrefixClassName(prefixClassName) &&
      prefixClassName + "-knit-alert-content",
  })
)<{
  children: string | ReactNode
  multiLine?: boolean
  prefixClassName?: string
}>`
  font-size: ${textFontSize}rem;
  line-height: ${textLineHeight}rem;
  color: ${({ multiLine }) => (multiLine ? "#DDD1E0" : Neutral10.hex)};
`

export const StyledAlertIcon = styled(Icon).attrs(({ prefixClassName }) => ({
  className:
    isPrefixClassName(prefixClassName) && prefixClassName + "-knit-alert-icon",
  width: "20px",
  height: "20px",
}))`
  margin: ${({ multiLine }) => (multiLine ? "2px" : 0)} 0 2px 14px;
`

export const CloseIcon = styled(Icon).attrs(({ prefixClassName }) => ({
  className:
    isPrefixClassName(prefixClassName) && prefixClassName + "-knit-alert-close",
  type: "oClose",
  fill: Neutral0.hex,
}))`
  padding-left: 14px;
  cursor: pointer;
`

export const AlertHeading = styled.div.attrs(
  ({ prefixClassName }: { prefixClassName: string | undefined }) => ({
    className:
      isPrefixClassName(prefixClassName) &&
      prefixClassName + "-knit-alert-heading",
  })
)<{ prefixClassName?: string | undefined }>`
  font-size: ${headingFontSize}rem;
  line-height: ${headingLineHeight}rem;
`

export const StyledAlertPicture = styled.img.attrs(
  ({ prefixClassName }: { prefixClassName: string | undefined }) => ({
    className:
      isPrefixClassName(prefixClassName) &&
      prefixClassName + "-knit-alert-icon",
  })
)<{
  multiLine: boolean | undefined
  prefixClassName?: string | undefined
}>`
  min-width: 20px;
  height: 20px;
  border-radius: 12px;
  margin: ${({ multiLine }) => (multiLine ? "2px" : 0)} 0 2px 14px;
`

export const StyledAlertAction = styled.div.attrs(
  ({ prefixClassName }: { prefixClassName: string | undefined }) => ({
    className:
      isPrefixClassName(prefixClassName) &&
      prefixClassName + "-knit-alert-action",
  })
)<{ prefixClassName: string | undefined }>`
  flex-shrink: 0;
  text-transform: uppercase;
  font-size: ${textFontSize}rem;
  line-height: ${textLineHeight}rem;
  cursor: pointer;
`

export const AlertActionsWrapper = styled.div.attrs(
  ({ prefixClassName }: { prefixClassName: string | undefined }) => ({
    className:
      isPrefixClassName(prefixClassName) &&
      prefixClassName + "-knit-alert-action-wrapper",
  })
)<{
  multiLine: boolean | undefined
  prefixClassName?: string | undefined
}>`
  margin: ${({ multiLine }) => (multiLine ? "18px" : 0)} 3px 0 0;
  display: flex;
  div:not(:last-child) {
    margin-right: 29px;
  }
`
