import React from "react"
import {createGlobalStyle} from "styled-components"
import {fontsDefinition} from "./fonts"

const GlobalStyle = createGlobalStyle`
  ${fontsDefinition}

  html {
    font-size: 10px;
  }

  body {
    font-family: InterRegular, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }

`

export default GlobalStyles extends React.Component {
    render() {
        return (
            <>
                <GlobalStyle />
                {this.props.children}
            </>
        )
    }
}