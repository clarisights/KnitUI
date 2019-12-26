import React from "react"
import styled from "styled-components"
import { IStyled } from "../../../common/types"
import { HeaderProps } from "../types"

type IStyledHeaderProps = IStyled<HeaderProps>

const VERTICAL_PADDING = 1.4

const getLineHeight = (props: IStyledHeaderProps) => {
  const {
    theme: { knitui },
  } = props
  const typographySize = knitui.modalTitleTypographySize
  return knitui.typography[typographySize].lineHeight
}

const getMinHeight = (props: IStyledHeaderProps) => {
  const lineHeight = getLineHeight(props)
  return lineHeight + 2 * VERTICAL_PADDING
}

const Container = styled.div<IStyledHeaderProps>`
  display: flex;
  padding: ${({ theme: { knitui } }) =>
    `${knitui.modalHeaderPadding.vertical}rem ${knitui.modalHeaderPadding.horizontal}rem`};
  border-radius: ${({ theme: { knitui } }) =>
    `${knitui.modalBorderRadius} ${knitui.modalBorderRadius} 0rem 0rem`};
  background: ${({ theme: { knitui }, customProps: { noFill } }) =>
    noFill ? "none" : knitui.chromaPalette.Neutral10};
  border-bottom: ${({ customProps: { noFill }, theme: { knitui } }) =>
    noFill ? knitui.modalBorder : "none"};
  min-height: ${props => `${getMinHeight(props)}rem`};
`

const Header: React.FC<HeaderProps> = props => {
  const { children } = props
  const scProps = { customProps: props }
  return <Container {...scProps}>{children}</Container>
}

export default Header
