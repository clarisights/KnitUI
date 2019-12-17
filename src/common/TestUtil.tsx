import React, { ReactElement } from "react"
import { render } from "react-testing-library"
import { ThemeProvider } from "./styles"

const ProviderWrapper = ({
  children,
}: {
  children: ReactElement
}): ReactElement => {
  // Nest all providers here
  return <ThemeProvider>{children}</ThemeProvider>
}

const customRender = (ui: ReactElement, options?: object) =>
  render(ui, { wrapper: ProviderWrapper, ...options })

// re-export everything
export * from "react-testing-library"
// override render method
export { customRender as render }
