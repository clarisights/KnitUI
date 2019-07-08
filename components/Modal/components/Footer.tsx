import styled from "styled-components"
import { IStyled } from "../../../common/types"

interface FooterProps {
  showBorder: boolean
}

const Footer = styled.div<IStyled<FooterProps>>`
  padding: ${({ theme: { modalPadding } }) =>
    `${modalPadding.vertical} ${modalPadding.horizontal}`};
  justify-self: flex-end;
  border-top: ${({ customProps: { showBorder }, theme: { modalBorder } }) =>
    showBorder ? modalBorder : `none`};
`

export default Footer
