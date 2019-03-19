import { addParameters, configure, addDecorator } from "@storybook/react"
import { withInfo } from "@storybook/addon-info"
import React from "react"
import theme from "./theme"
import { GlobalStyles, ThemeProvider } from "../components/styles"

// automatically import all files ending in *.stories.tsx
const req = require.context("../components", true, /.stories.tsx$/)

const ThemeProviderDecorator = storyFn => (
  <ThemeProvider>{storyFn()}</ThemeProvider>
)

const GlobalStylesDecorator = storyFn => (
  <>
    <GlobalStyles />
    <div style={{ margin: 24 }}>{storyFn()}</div>
  </>
)

addParameters({
  options: {
    name: "KnitUI",
    theme,
  },
})

function loadStories() {
  req.keys().forEach(req)
}

addDecorator(
  withInfo({
    inline: true,
    header: false,
  })
)

addDecorator(ThemeProviderDecorator)
addDecorator(GlobalStylesDecorator)

configure(loadStories, module)
