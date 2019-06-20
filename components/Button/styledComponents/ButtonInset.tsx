import React from "react"
import styled from "styled-components"

interface ButtonInsetProps {
  label: string
  backgroundColor: string
  fontColor: string
  fontSize: string
  lineHeight: string
}

const ButtonInset: React.FC<ButtonInsetProps> = ({
  label,
  backgroundColor,
  fontColor,
  fontSize,
  lineHeight,
}) => {
  const StyledDiv = styled.div`
    display: inline-flex;
    background-color: ${backgroundColor};
    color: ${fontColor};
    font-size: ${fontSize};
    line-height: ${lineHeight};
    border-radius: 0.4rem;
    margin-left: 0.4rem;
    padding: 0rem 0.3rem 0rem 0.3rem;
  `
  return <>{label ? <StyledDiv>{label}</StyledDiv> : null}</>
}

export default ButtonInset
