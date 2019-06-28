import styled from "styled-components"
import { border, padding } from "../common/styles"
import { IStyled } from "../../common/types"

interface FooterProps {
  showBorder: boolean
}

const Footer = styled.div<IStyled<FooterProps>>`
  padding: ${`${padding.vertical} ${padding.horizontal}`};
  justify-self: flex-end;
  border-top: ${({ customProps: { showBorder } }) =>
    showBorder ? border : `none`};
`

export default Footer
