import { addParameters, configure, addDecorator } from "@storybook/react"
import { withInfo } from "@storybook/addon-info"
import { addReadme, configureReadme } from "storybook-readme"
import React from "react"
import theme from "./theme"
import { GlobalStyles, ThemeProvider } from "../src/common/styles"

// automatically import all files ending in *.stories.tsx
const req = require.context("../src/", true, /.stories.tsx$/)

const ThemeProviderDecorator = storyFn => (
  <ThemeProvider>{storyFn()}</ThemeProvider>
)

const GlobalStylesDecorator = storyFn => (
  <>
    <GlobalStyles />
    {storyFn()}
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

addDecorator(withInfo)
addDecorator(ThemeProviderDecorator)
addDecorator(GlobalStylesDecorator)
addDecorator(addReadme)
configureReadme({
  StoryPreview: ({ children }) => (
    <div style={{ padding: "10px", margin: "12px" }}>{children}</div>
  ),
}),
  configure(loadStories, module)
