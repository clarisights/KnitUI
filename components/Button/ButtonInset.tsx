import React from "react"
import styled from "styled-components"

const StyledDiv = styled.div`
    display: inline-flex;
    background-color: ${props => props.theme.shades.white};
    color: ${props => props.theme.shades.gray20};
    font-size: ${props => `${props.theme.unit12}rem`};
    border-radius: 4px;
    margin-left: 4px;
    padding: 3px;
`

const ButtonInset = ({ label }) => {
    return (label ? <StyledDiv>{label}</StyledDiv> : null)
}

export default ButtonInset
