import styled from "styled-components"
import { IStyled } from "../../../common/types"

interface ButtonInsetProps {
  backgroundColor: string
  fontColor: string
  fontSize: string
  lineHeight: string
  insetPosition: string
  size: string
}

const getBorderRadius = position => {
  if (position === "right") return "0rem 0.3rem 0.3rem 0"
  return "0.3rem 0 0 0.3rem"
}

const getVerticalMargin = size => {
  switch (size) {
    case "small":
      return "0.1rem"
    case "large":
      return "0.7rem"
    default:
      return "0.4rem"
  }
}

const ButtonInset = styled.div<IStyled<ButtonInsetProps>>`
  display: inline-flex;
  background-color: ${({ customProps }) => customProps.backgroundColor};
  color: ${({ customProps }) => customProps.fontColor};
  font-size: ${({ customProps }) => customProps.fontSize};
  line-height: ${({ customProps }) => customProps.lineHeight};
  border-radius: ${({ customProps }) =>
    getBorderRadius(customProps.insetPosition)};
  margin-left: ${({ customProps }) =>
    customProps.insetPosition === "right" ? "0.4rem" : 0};
  margin-right: ${({ customProps }) =>
    customProps.insetPosition === "right" ? 0 : "0.4rem"};
  span {
    margin: ${({ customProps }) => getVerticalMargin(customProps.size)} 0.7rem;
    line-height: 2rem;
  }
`

export default ButtonInset
