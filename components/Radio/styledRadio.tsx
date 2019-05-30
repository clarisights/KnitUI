import RCCheckbox from "rc-checkbox"
import styled from "styled-components"
import * as theme from "../styles/variables"
import { Neutral0, Neutral50, Neutral30, Neutral40, Azure80, Blue100 } from "../styles/palette"

const { checkboxCheckedColor, smallCheckboxSize, mediumCheckboxSize, tickHeight, tickWidth } = theme

const isSmall = size => size === "small"
const isDisabled = props => props.disabled

export const StyledRadio = styled(RCCheckbox)`
  &.knit-radio {
    white-space: nowrap;
    outline: none;
    display: inline-block;
    position: relative;
    .knit-radio-inner {
      position: relative;
      top: 0;
      left: 0;
      display: inline-block;
      width: 10px;
      height: 10px;
      border-width: 1px;
      border-style: solid;
      border-radius: 14px;
      border-color: ${Blue100.hex};
      background-color: #ffffff;
      transition: border-color @duration @ease-in-out-circ, background-color @duration @ease-in-out-circ;
      &:after {
        position: absolute;
        width: 6px;
        height: 6px;
        left: 2px;
        top: 2px;
        border-radius: 6px;
        display: table;
        border-top: 0;
        border-left: 0;
        content: ' ';
        background-color: ${Blue100.hex};
        transform: scale(0);
        -webkit-transform: scale(0);
        opacity: 0;
        transition: transform @duration @ease-in-out-circ,opacity @duration @ease-in-out-circ,background-color @duration @ease-in-out-circ;
        -webkit-transition: -webkit-transform @duration @ease-in-out-circ,opacity @duration @ease-in-out-circ,background-color @duration @ease-in-out-circ;
      }
    }

    &+span {
      margin-left: 10px;
    }

    .knit-radio-input {
      position: absolute;
      left: 0;
      z-index: 9999;
      cursor: pointer;
      opacity: 0;
      top: 0;
      bottom: 0;
      right: 0;
    }

    &.knit-radio-checked {
      .knit-radio-inner {
        &:after {
          transform: scale(1);
          -webkit-transform: scale(1);
          opacity: 1;
          transition: transform @duration @ease-out-back,opacity @duration @ease-in-out-circ,background-color @duration @ease-in-out-circ;
          -webkit-transition: -webkit-transform @duration @ease-out-back,opacity @duration @ease-in-out-circ,background-color @duration @ease-in-out-circ;
        }
      }
    }

    &.knit-radio-disabled {
      .knit-radio-inner {
        cursor: not-allowed;
        opacity: 0.6;
        background-color: #f3f3f3;
      }
      &+span {
        color: #808080;
      }
      .knit-radio-input {
        cursor: not-allowed;
      }
    }
  }
`
