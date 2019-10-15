import React, { ReactNode } from "react"
import styled from "styled-components"
import { IStyled, fontSizeType } from "../../../common/types"
import { HeaderProps, TitleProps } from "../types"

type IStyledHeaderProps = IStyled<HeaderProps>

const VERTICAL_PADDING = 1.4

const getFontSize = (props: IStyledHeaderProps) => {
  const {
    customProps: { leftSection },
    theme: { knitui },
  } = props
  const typographySize =
    (leftSection as TitleProps).fontSize || knitui.modalTitleTypographySize
  return `${knitui.typography[typographySize].fontSize}rem`
}

const getLineHeight = (props: IStyledHeaderProps) => {
  const {
    customProps: { leftSection },
    theme: { knitui },
  } = props
  const typographySize =
    (leftSection as TitleProps).fontSize || knitui.modalTitleTypographySize
  return knitui.typography[typographySize].lineHeight
}

const getFontColor = (props: IStyledHeaderProps, color: string) => {
  const {
    theme: { knitui },
  } = props

  return knitui.chromaPalette[color].hex()
}

const getMinHeight = (props: IStyledHeaderProps) => {
  const lineHeight = getLineHeight(props)
  return lineHeight + 2 * VERTICAL_PADDING
}

const getHeadingStyle = (props: IStyledHeaderProps) => {
  const headingFontSize = getFontSize(props)
  const headingLineHeight = `${getLineHeight(props)}rem`
  const color = getFontColor(props, "Neutral80")
  const style = props.addHeadingStyle
    ? `
      font-size: ${headingFontSize};
      line-height: ${headingLineHeight};
      color: ${color};
      margin-right: 1.4rem;`
    : ``
  return style
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
const LeftSection = styled.div<IStyledHeaderProps>`
  display: flex;
  flex-grow: 1;
  align-items: center;

  /** If leftSection is simply string, add style of heading
   else user passed Element should have style itself. */
  ${props => getHeadingStyle(props)}
`

const RightSection = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
`

const Header: React.FC<HeaderProps> = props => {
  const { leftSection, rightSection } = props
  const scProps = { customProps: props }
  const isTitle = !!(leftSection as TitleProps).title
  return (
    <Container {...scProps}>
      <LeftSection addHeadingStyle={isTitle} {...scProps}>
        {isTitle ? (leftSection as TitleProps).title : leftSection}
      </LeftSection>
      <RightSection>{rightSection}</RightSection>
    </Container>
  )
}

export default Header
