import RCCheckbox from "rc-checkbox"
import styled from "styled-components"
import * as theme from "../../components/styles/variables"
import { Neutral0, Neutral50, Neutral30, Neutral40, Azure80 } from "../styles/palette"

const { checkboxCheckedColor, smallCheckboxSize, mediumCheckboxSize, tickHeight, tickWidth } = theme

const isSmall = size => size === "small"
const isDisabled = props => props.disabled

export const StyledCheckbox = styled(RCCheckbox)`
  &.knit-checkbox {
    &.knit-checkbox-checked {
      .knit-checkbox-inner {
        border-color: ${checkboxCheckedColor};
      }
    }
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    position: relative;
    line-height: 1;
    vertical-align: middle;
    .knit-checkbox-inner {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      top: 0;
      left: 0;
      width: ${({ size }) => isSmall(size) ? smallCheckboxSize : mediumCheckboxSize};
      height: ${({ size }) => isSmall(size) ? smallCheckboxSize : mediumCheckboxSize};
      border-width: 1.56px;
      border-style: solid;
      border-radius: 3px;
      border-color: ${Neutral30.hex};
      background-color: ${Neutral0.hex};
      transition: border-color 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55), background-color 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55);
      &:after {
        margin-bottom: 20%;
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
        display: table;
        width: ${tickWidth};
        height: ${tickHeight};
        border: 2px solid ${Neutral0.hex};
        border-top: 0;
        border-left: 0;
        content: ' ';
        animation-timing-function: cubic-bezier(0.68, -0.55, 0.27, 1.55);
        animation-duration: 0.3s;
        animation-name: amCheckboxOut;
      }
    }
    .knit-checkbox-input {
      position: absolute;
      left: 0;
      cursor: pointer;
      z-index: 9999;
      opacity: 0;
      top: 0;
      bottom: 0;
      right: 0;
    }
    &+span {
      margin-left: 10px;
    }
    &.knit-checkbox-checked {
      .knit-checkbox-inner {
        background-color: ${checkboxCheckedColor};
      }
      &:focus {
        .knit-checkbox-inner {
          border-color: ${Azure80.hex};
          box-shadow: 0px 0px 2px #0066FF;
        }
      }
    }
    &.knit-checkbox-disabled {
      &+span {
        color: ${Neutral50.hex};
      }
      &.knit-checkbox-checked {
        .knit-checkbox-inner {
          background-color: ${checkboxCheckedColor};
          border-color: ${checkboxCheckedColor};
          &:after {
            animation-name: none;
            border-color: ${Neutral40.hex};
          }
        }
      }
      cursor: not-allowed;
      .knit-checkbox-input {
        cursor: not-allowed;
      }
      .knit-checkbox-inner {
        background-color: ${Neutral0.hex};
        opacity: 0.6;
      }
    }
  }
  @keyframes amCheckboxIn {
    0% {
      opacity: 0;
      transform-origin: 50% 50%;
      transform: scale(0, 0) rotate(45deg);
    }
    100% {
      opacity: 1;
      transform-origin: 50% 50%;
      transform: scale(1, 1) rotate(45deg);
    }
  }
  @keyframes amCheckboxOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`
