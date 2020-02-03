import styled from "styled-components"
import { Neutral0, Neutral50, Blue100 } from "../../common/styles/palette"
import { RadioWrapperProps } from "./Interface"

const isSmall = size => size === "small"
const isDisabled = props => props.disabled

// helper to get radio size
const getRadioSize = (theme, size) => {
  return isSmall(size)
    ? theme.knitui.smallRadioSize
    : theme.knitui.mediumRadioSize
}

// helper to get radio bead size
const getRadioBeadSize = (theme, size) => {
  return isSmall(size)
    ? theme.knitui.smallRadioBead
    : theme.knitui.mediumRadioBead
}

export const StyledRadioRoot = styled.span<RadioWrapperProps>`
  &.knit-radio {
    white-space: nowrap;
    outline: none;
    display: inline-block;
    position: relative;

    & + span {
      cursor: ${props => (isDisabled(props) ? "not-allowed" : "pointer")};
      margin-left: 10px;
    }

    &.knit-radio-checked {
      .knit-radio-inner {
        position: relative;

        &::after {
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          -webkit-transform: translate(-50%, -50%);
          -ms-transform: translate(-50%, -50%);
          opacity: 1;
        }
      }
    }

    &.knit-radio-disabled {
      .knit-radio-inner {
        cursor: not-allowed;
        opacity: 0.6;
        background-color: ${({ theme }) => theme.knitui.radioDisabledColor};
      }
      & + span {
        color: ${Neutral50.hex};
      }
      .knit-radio-input {
        cursor: not-allowed;
      }
    }
  }
`
// prettier-ignore-next-line
export const StyledRadioInner = styled.span<{ size: string | undefined }>`
  position: relative;
  top: 0;
  left: 0;
  display: inline-block;
  width: ${({ theme, size }) => getRadioSize(theme, size)};
  height: ${({ theme, size }) => getRadioSize(theme, size)};
  border-width: 1px;
  cursor: pointer;
  border-style: solid;
  border-radius: 14px;
  border-color: ${Blue100.hex};
  background-color: ${Neutral0.hex};

  &::after {
    position: absolute;
    width: ${({ theme, size }) => getRadioBeadSize(theme, size)};
    height: ${({ theme, size }) => getRadioBeadSize(theme, size)};
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    border-radius: 0.7rem;
    border-top: 0;
    border-left: 0;
    content: " ";
    background-color: ${Blue100.hex};
    opacity: 0;
  }

  &:focus {
    box-shadow: 0px 0px 2px ${({ theme }) => theme.knitui.switchFocusColor};
    outline: none;
  }
`

export const StyledRadioInput = styled.input`
  position: absolute;
  left: 0;
  z-index: 9999;
  cursor: pointer;
  opacity: 0;
  top: 0;
  bottom: 0;
  right: 0;
`
