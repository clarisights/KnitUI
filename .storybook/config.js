import { addParameters, configure, addDecorator } from "@storybook/react"
import { withInfo } from "@storybook/addon-info"
import theme from "./theme"

// automatically import all files ending in *.stories.tsx
const req = require.context("../components", true, /.stories.tsx$/)

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

configure(loadStories, module)
