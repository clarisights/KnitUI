import { FC } from "react"
import styled, { css } from "styled-components"
import { getThemeColor } from "../../../common/_utils"
import Icon from "../../Icon"

export const OptionWrapper = styled.div<{
  isDisabled?: boolean
  selected?: boolean
}>`
  font-size: 1.4rem;
  line-height: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${props => getThemeColor(props, "Neutral90")};
  padding: 0.7rem 1.4rem;
  border: 0.1rem solid transparent;
  cursor: default;
  overflow: hidden;
  background-color: ${props =>
    getThemeColor(props, props.selected ? "Neutral10" : "Neutral0")};
  ${({ isDisabled }) =>
    !isDisabled
      ? css`
          &:active {
            border: 0.1rem solid ${props => getThemeColor(props, "Azure80")};
            box-shadow: 0 0 0.2rem #0066ff;
            z-index: 1;
          }
          &:hover {
            background-color: ${props => getThemeColor(props, "Neutral10")};
          }
        `
      : css`
          cursor: not-allowed;
          opacity: 0.6;
          &:active {
            pointer-events: none;
          }
        `}
`

export const OptionDescription = styled.span`
  font-size: 1.2rem;
  line-height: 1.8rem;
  color: ${props => getThemeColor(props, "Neutral50")};
`

export const VerticalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`

export const StyledOptionText = styled.span`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`

export const FlexWrapper = styled.div<{ align?: string }>`
  display: flex;
  align-items: center;
  overflow: ${props => props.align === "right" ? 'initial' :'hidden'};
`

export const StyledDivider = styled.div`
  margin: 0.7rem 0;
  background-color: ${props => getThemeColor(props, "Neutral20")};
  height: 0.1rem;
`

export const StyledIcon = styled(Icon)`
  margin-right: ${props => (props.align === "right" ? 0 : "1.5rem")};
  margin-left: ${props => (props.align === "right" ? "1.5rem" : 0)};
`

// Generic component wrapper which styles a component and adds appropriate styles based on the position
export const OptionItemWrapper = (component, customProps): FC => {
  return styled(component)`
    margin-right: ${props => (props.align === "right" ? 0 : "1.5rem")};
    margin-left: ${props => (props.align === "right" ? "1.5rem" : 0)};
    &:first-child {
      margin-left: 0;
    }
    align-self: ${customProps && customProps.alignStart
      ? "flex-start"
      : "center"};
  `
}
