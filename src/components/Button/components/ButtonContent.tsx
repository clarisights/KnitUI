import styled from "styled-components"
import { IStyled } from "../../../common/types"

import { ButtonProps } from "../types"

type IStyledBaseButton = IStyled<ButtonProps>

const ButtonContent = styled.div<IStyledBaseButton>`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
`

export default ButtonContent
