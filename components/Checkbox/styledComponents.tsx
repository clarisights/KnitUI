import RCCheckbox from "rc-checkbox"
import styled from "styled-components"

const isSmall = size => size === "small"
const isDisabled = props => props.disabled

export const StyledCheckbox = styled(RCCheckbox)`
  &.knit-checkbox {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    position: relative;
    line-height: 1;
    vertical-align: middle;
    .knit-checkbox-inner {
      position: relative;
      top: 0;
      left: 0;
      display: inline-block;
      width: 14px;
      height: 14px;
      border-width: 1px;
      border-style: solid;
      border-radius: 3px;
      border-color: #d9d9d9;
      background-color: #ffffff;
      transition: border-color 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55), background-color 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55);
      &:after {
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
        position: absolute;
        left: 4px;
        top: 1px;
        display: table;
        width: 5px;
        height: 8px;
        border: 2px solid #ffffff;
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
      z-index: 9999;
      cursor: pointer;
      opacity: 0;
      top: 0;
      bottom: 0;
      right: 0;
    }
    &.knit-checkbox-checked:hover {
      .knit-checkbox-inner {
        border-color: #3dbcf6;
      }
    }
    &.knit-checkbox-checked {
      .knit-checkbox-inner {
        border-color: #3dbcf6;
        background-color: #3dbcf6;
      }
    }
    &.knit-checkbox-checked {
      .knit-checkbox-inner {
        &:after {
          transform: rotate(45deg);
          position: absolute;
          left: 4px;
          top: 1px;
          display: table;
          width: 5px;
          height: 8px;
          border: 2px solid #ffffff;
          border-top: 0;
          border-left: 0;
          content: ' ';
          animation-timing-function: cubic-bezier(0.68, -0.55, 0.27, 1.55);
          animation-duration: 0.3s;
          animation-name: amCheckboxOut;
        }
      }
    }
    &-disabled.knit-checkbox-checked:hover $-inner {
      border-color: #d9d9d9;
    }
    &-disabled.knit-checkbox-checked &-inner {
      background-color: #f3f3f3;
      border-color: #d9d9d9;
    }
    &-disabled.knit-checkbox-checked &-inner::after {
      animation-name: none;
      border-color: #cccccc;
    }
    &-disabled:hover &-inner {
      border-color: #d9d9d9;
    }
    &-disabled &-inner {
      border-color: #d9d9d9;
      background-color: #f3f3f3;
    }
    &-disabled &-inner::after {
      animation-name: none;
      border-color: #f3f3f3;
    }
    &-disabled &-inner-input {
      cursor: default;
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
