import RCSwitch from "rc-switch"
import styled from "styled-components"

const isSmall = size => size === "small"
const isDisabled = props => props.disabled

export const StyledSwitch = styled(RCSwitch)`
  &.knit-switch {
    position: relative;
    display: inline-block;
    box-sizing: border-box;
    width: ${({ theme: { knitui }, size }) =>
      isSmall(size) ? knitui.switchWrapperWidthSm : knitui.switchWrapperWidth};
    height: ${({ theme: { knitui }, size }) =>
      isSmall(size)
        ? knitui.switchWrapperHeightSm
        : knitui.switchWrapperHeight};
    line-height: ${({ size }) => (isSmall(size) ? "8px" : "14px")};
    padding: 0;
    vertical-align: middle;
    border-radius: 20px 20px;
    border: 1px solid ${({ theme: { knitui } }) => knitui.wrapperBorderColor};
    background-color: ${({ theme: { knitui } }) => knitui.wrapperBgColor};
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.35, 0, 0.25, 1);
    .knit-switch-inner {
      color: #fff;
      font-size: ${({ size }) => (isSmall(size) ? "0.7rem" : "1.1rem")};
      position: absolute;
      left: 60%;
      top: 0;
    }
    &:after {
      position: absolute;
      width: ${({ size, theme: { knitui } }) =>
        isSmall(size)
          ? knitui.switchTrackerWidthSm
          : knitui.switchTrackerWidth};
      height: ${({ size, theme: { knitui } }) =>
        isSmall(size)
          ? knitui.switchTrackerHeightSm
          : knitui.switchTrackerHeight};
      left: 2px;
      top: 50%;
      transform: translateY(-50%) scale(1);
      border-radius: 50% 50%;
      background-color: #fff;
      content: " ";
      cursor: pointer;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.26);
      transition: left 0.3s cubic-bezier(0.35, 0, 0.25, 1);
      animation-timing-function: cubic-bezier(0.35, 0, 0.25, 1);
      animation-duration: 0.3s;
      animation-name: rcSwitchOff;
    }
    &:hover:after {
      transform: translateY(-50%) scale(1);
      animation-name: rcSwitchOn;
    }
    &:focus {
      box-shadow: 0 0 2px ${({ theme }) => theme.switchFocusColor};
      outline: none;
    }
    &.knit-switch-checked {
      border: 1px solid
        ${({ disabled, theme: { knitui } }) =>
          disabled
            ? knitui.switchCheckedDisabledBorderColor
            : knitui.switchCheckedBorderColor};
      background-color: ${({ theme: { knitui }, disabled }) =>
        disabled
          ? knitui.switchCheckedDisabledBgColor
          : knitui.switchCheckedBgColor};
      .knit-switch-inner {
        left: 6px;
      }

      &:after {
        left: ${({ theme: { knitui }, size }) =>
          isSmall(size)
            ? `calc(${knitui.switchWrapperWidthSm} - ${knitui.switchTrackerWidthSm} - 2px)`
            : `calc(${knitui.switchWrapperWidth} - ${knitui.switchTrackerWidth} - 2px)`};
      }
    }

    &.knit-switch-disabled {
      cursor: no-drop;
      background: hsl(0, 0%, 90%);
      border-color: hsl(0, 0%, 90%);

      &:after {
        background: #9e9e9e;
        animation-name: none;
        cursor: no-drop;
      }

      &:hover:after {
        transform: translateY(-50%) scale(1);
        animation-name: none;
      }
    }

    &.knit-switch-label {
      display: inline-block;
      line-height: 14px;
      font-size: 1.1rem;
      padding-left: 10px;
      vertical-align: middle;
      white-space: normal;
      pointer-events: none;
      user-select: text;
    }
  }

  @keyframes rcSwitchOn {
    0% {
      transform: translateY(-50%) scale(1);
    }
    50% {
      transform: translateY(-50%) scale(1.25);
    }
    100% {
      transform: translateY(-50%) scale(1.1);
    }
  }

  @keyframes rcSwitchOff {
    0% {
      transform: translateY(-50%) scale(1.1);
    }
    100% {
      transform: translateY(-50%) scale(1);
    }
  }
`
