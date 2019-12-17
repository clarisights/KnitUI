import styled from "styled-components"
import { Blue100, Neutral0, Neutral50 } from "../../common/styles/palette"
import { RadioWrapperProps } from "./Interface"

const isSmall = size => size === "small"
const isDisabled = props => props.disabled

export const StyledRadioRoot = styled.span<RadioWrapperProps>(
  props => `
  &.knit-radio {
    white-space: nowrap;
    outline: none;
    display: inline-block;
    position: relative;

    & + span {
      cursor: ${isDisabled(props) ? "not-allowed" : "pointer"};
      margin-left: 10px;
    }

    &.knit-radio-checked {
      .knit-radio-inner {
        &:after {
          transform: scale(1);
          -webkit-transform: scale(1);
          opacity: 1;
          transition: transform @duration @ease-out-back,
            opacity @duration @ease-in-out-circ,
            background-color @duration @ease-in-out-circ;
          -webkit-transition: -webkit-transform @duration @ease-out-back,
            opacity @duration @ease-in-out-circ,
            background-color @duration @ease-in-out-circ;
        }
      }
    }

    &.knit-radio-disabled {
      .knit-radio-inner {
        cursor: not-allowed;
        opacity: 0.6;
        background-color: ${({ theme }) => theme.radioDisabledColor};
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
)

export const StyledRadioInner = styled.span<{
  size: string | undefined
}>`
  position: relative;
  top: 0;
  left: 0;
  display: inline-block;
  width: ${({ theme, size }) =>
    isSmall(size) ? theme.smallRadioSize : theme.mediumRadioSize};
  height: ${({ theme, size }) =>
    isSmall(size) ? theme.smallRadioSize : theme.mediumRadioSize};
  border-width: 1px;
  cursor: pointer;
  border-style: solid;
  border-radius: 14px;
  border-color: ${Blue100.hex};
  background-color: ${Neutral0.hex};
  &:after {
    position: absolute;
    width: ${({ theme, size }) =>
      isSmall(size) ? theme.smallRadioBead : theme.mediumRadioBead};
    height: ${({ theme, size }) =>
      isSmall(size) ? theme.smallRadioBead : theme.mediumRadioBead};
    left: 3px;
    top: 3px;
    border-radius: 6px;
    display: table;
    border-top: 0;
    border-left: 0;
    content: " ";
    background-color: ${Blue100.hex};
    transform: scale(0);
    -webkit-transform: scale(0);
    opacity: 0;
  }
  &:focus {
    box-shadow: 0px 0px 2px ${({ theme }) => theme.switchFocusColor};
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
