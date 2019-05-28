import RCSwitch from "rc-switch"
import styled from "styled-components"

const isSmall = size => size === "small"
const isDisabled = props => props.disabled

export const StyledSwitch = styled(RCSwitch)`
  &.knit-switch {
    position: relative;
    display: inline-block;
    box-sizing: border-box;
    width: ${({ theme, size }) =>
      isSmall(size) ? theme.switchWrapperWidthSm : theme.switchWrapperWidth};
    height: ${({ theme, size }) =>
      isSmall(size) ? theme.switchWrapperHeightSm : theme.switchWrapperHeight};
    line-height: ${({ size }) => (isSmall(size) ? "8px" : "14px")};
    padding: 0;
    vertical-align: middle;
    border-radius: 80px;
    border: 1px solid ${({ theme }) => theme.wrapperBorderColor};
    background-color: ${({ theme }) => theme.wrapperBgColor};
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
      width: ${({ size, theme }) =>
        isSmall(size) ? theme.switchTrackerWidthSm : theme.switchTrackerWidth};
      height: ${({ size, theme }) =>
        isSmall(size)
          ? theme.switchTrackerHeightSm
          : theme.switchTrackerHeight};
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
      box-shadow: 0 0 2px #0066FF;
      outline: none;
    }
    &.knit-switch-checked {
      border: 1px solid
        ${({ disabled, theme }) =>
          disabled
            ? theme.switchCheckedDisabledBorderColor
            : theme.switchCheckedBorderColor};
      background-color: ${({ theme, disabled }) =>
        disabled
          ? theme.switchCheckedDisabledBgColor
          : theme.switchCheckedBgColor};
      .knit-switch-inner {
        left: 6px;
      }

      &:after {
        left: ${({ theme, size }) =>
          isSmall(size)
            ? `calc(${theme.switchWrapperWidthSm} - ${
                theme.switchTrackerWidthSm
              } - 2px)`
            : `calc(${theme.switchWrapperWidth} - ${
                theme.switchTrackerWidth
              } - 2px)`};
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
