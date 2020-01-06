import styled from "styled-components"
import { IStyled } from "../../../common/types"

interface FooterProps {
  showBorder: boolean
}

const Footer = styled.div.attrs(() => ({
  "data-testid": "knit-modal-footer",
}))<IStyled<FooterProps>>`
  // Do not show the footer if there is no content.
  &:empty {
    display: none;
  }
  padding: ${({ theme: { knitui } }) =>
    `${knitui.modalPadding.vertical}rem ${knitui.modalPadding.horizontal}`}rem;
  justify-self: flex-end;
  border-top: ${({ customProps, theme: { knitui } }) =>
    customProps && customProps.showBorder ? knitui.modalBorder : `none`};
`

export default Footer
