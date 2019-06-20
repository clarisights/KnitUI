import styled from "styled-components"
import { IStyled } from "../../common/types"

interface ButtonInsetProps {
  backgroundColor: string
  fontColor: string
  fontSize: string
  lineHeight: string
}

const ButtonInset = styled.div<IStyled<ButtonInsetProps>>`
  display: inline-flex;
  background-color: ${({ customProps }) => customProps.backgroundColor};
  color: ${({ customProps }) => customProps.fontColor};
  font-size: ${({ customProps }) => customProps.fontSize};
  line-height: ${({ customProps }) => customProps.lineHeight};
  border-radius: 0.4rem;
  margin-left: 0.4rem;
  padding: 0rem 0.3rem 0rem 0.3rem;
`

export default ButtonInset
