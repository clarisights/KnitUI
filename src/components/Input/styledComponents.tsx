import styled, { css } from "styled-components"

import Icon from "../Icon"

import { IStyledInput } from "./types"

import {
  getPadding,
  getInputBorder,
  getHeight,
  getFontSize,
  getLineHeight,
  getBackgroundColor,
  getBorderRadius,
  getColor,
  getBoxShadow,
  getSelectionBackground,
  getAddonPadding,
  getGradientOffset,
  getBlurHeight,
} from "./utils"

export const InputWrapper = styled.span<IStyledInput>`
  position: relative;
  display: flex;
  align-items: center;
  outline: none;

  &::after {
    content: " ";
    position: absolute;
    height: ${props => getBlurHeight(props)}rem;
    width: ${props => (props.type === "number" ? "0" : "30px")};
    right: ${props => getGradientOffset(props)}rem;
    background-image: ${props =>
      !props.isOverflow
        ? "linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0))"
        : "linear-gradient(to left, #f2f2f2 5%, rgba(242, 242, 242, 0.46) 66.67%);"};
  }
`

// Common styles for <input> and <textarea>
const commonInputStyles = props => css`
  width: 100%;
  position: relative;
  border-radius: ${getBorderRadius(props)};
  border: ${getInputBorder(props, "default")};
  padding: ${getPadding(props)};
  box-sizing: border-box;
  background-color: ${getBackgroundColor(props)};
  color: ${getColor(props)};
  font-size: ${`${getFontSize(props)}rem`};
  line-height: ${`${getLineHeight(props)}rem`};
  transition: border 0.25s ease;

  &:hover {
    border: ${getInputBorder(props, "hover")};
  }

  &:focus,
  &:active {
    outline: none;
    background-color: ${getBackgroundColor(props, "focus")};
    border: ${getInputBorder(props, "focus")};
    box-shadow: ${getBoxShadow(props, "active")};
  }

  &:disabled {
    cursor: not-allowed;
    background-color: ${getBackgroundColor(props)};
    border: ${getInputBorder(props, "default")};
    box-shadow: none;
    resize: none;
  }

  &::placeholder {
    color: ${getColor(props, "placeholder")};
  }

  &::selection {
    background-color: ${getSelectionBackground(props)};
  }
`

export const StyledInput = styled.input<IStyledInput>`
  ${commonInputStyles}
  height: ${props => getHeight(props)};

  &[type="number"]::-webkit-inner-spin-button {
    height: ${props => getHeight(props)};
  }
`

export const StyledTextArea = styled.textarea<IStyledInput>`
  ${commonInputStyles}
  font-family: InterRegular, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol";
  resize: ${props => props.textareaResize};
`

const AddonSpan = styled.span`
  display: inline-block;
  position: relative;
`

export const AddonBeforeSpan = styled(AddonSpan)<{ iconSize: string }>`
  & input {
    padding-left: ${props => getAddonPadding(props.iconSize)}rem;
  }
`

export const AddonAfterSpan = styled(AddonSpan)<{ iconSize: string }>`
  & input {
    padding-right: ${props => getAddonPadding(props.iconSize)}rem;
  }
`

export const AddonContainer = styled.span`
  display: flex;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
`

const labelStyle = css`
  font-size: 1.2rem;
  line-height: 1.8rem;
`

export const StyledLabel = styled.label<IStyledInput>`
  ${labelStyle}
  text-transform: uppercase;
  color: ${props => getColor(props, "label")};
`

export const NotificationContainer = styled.div<IStyledInput>`
  ${labelStyle}
  color: ${props => getColor(props, "notification")};
`

export const IconBackground = styled.span<{ bgSize: string }>`
  display: inline-block;
  height: ${props => props.bgSize};
  width: ${props => props.bgSize};
  border-radius: 50%;
  background-color: #e5e5e5;
`

export const AddonIcon = styled(Icon)`
  ${props => props.pointer && `cursor: pointer`}
`
