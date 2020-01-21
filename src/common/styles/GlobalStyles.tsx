import { createGlobalStyle } from "styled-components"
import { fontsDefinition } from "./fonts"

const GlobalStyles = createGlobalStyle`
  ${fontsDefinition}

  body,
  div,
  dl,
  dt,
  dd,
  ul,
  ol,
  li,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  pre,
  code,
  form,
  fieldset,
  legend,
  input,
  textarea,
  p,
  blockquote,
  th,
  td,
  hr,
  button,
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
      margin: 0;
      padding: 0;
  }

  body {
    overscroll-behavior-x: none; /* Prevent the page redirection on swipe */
  }

  ul,
  ol {
      list-style: none;
  }

  html {
    font-size: 10px;
  }

  body {
    font-family: InterRegular, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }
  :focus {
    outline-color: #0066FF;
  }
`

export default GlobalStyles
