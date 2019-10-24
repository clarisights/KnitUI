import React from "react"
import Modal, { Header, Body, Footer } from "../index"
import { render, cleanup, fireEvent } from "react-testing-library"
import "jest-styled-components"
import "jest-dom/extend-expect"
import { ThemeProvider } from "../../../common/styles"
import { Panel } from "../wrappers/Panel"

afterEach(cleanup)

describe("Modal", () => {
  const sizes = ["small", "medium", "large", "x-large"]
  sizes.forEach(size => {
    describe(`with size ${size}`, () => {
      it("with simple config", () => {
        const { container } = render(
          <ThemeProvider>
            <Modal size="medium" visible onClose={() => {}}>
              <Header>Title</Header>
              <Body>
                <div>Body</div>
              </Body>
              <Footer>
                <div>Footer</div>
              </Footer>
            </Modal>
          </ThemeProvider>
        )
        const dialogContainer = container.parentElement!.querySelector(
          ".rc-dialog-wrap"
        )
        expect(dialogContainer).toMatchSnapshot()
      })

      it("with a right panel", () => {
        const { container } = render(
          <ThemeProvider>
            <Modal size="medium" visible onClose={() => {}} panel="right">
              <Header>Title</Header>
              <Body>
                <div>Body</div>
              </Body>
              <Footer>
                <div>Footer</div>
              </Footer>
              <Panel>
                <div>Panel content</div>
              </Panel>
            </Modal>
          </ThemeProvider>
        )
        const dialogContainer = container.parentElement!.querySelector(
          ".rc-dialog-wrap"
        )
        expect(dialogContainer).toMatchSnapshot()
      })

      it("with a left panel", () => {
        const { container } = render(
          <ThemeProvider>
            <Modal size="medium" visible onClose={() => {}} panel="left">
              <Header>Title</Header>
              <Body>
                <div>Body</div>
              </Body>
              <Footer>
                <div>Footer</div>
              </Footer>
              <Panel>
                <div>Panel content</div>
              </Panel>
            </Modal>
          </ThemeProvider>
        )
        const dialogContainer = container.parentElement!.querySelector(
          ".rc-dialog-wrap"
        )
        expect(dialogContainer).toMatchSnapshot()
      })

      it("with a bottom panel", () => {
        const { container } = render(
          <ThemeProvider>
            <Modal size="medium" visible onClose={() => {}} panel="bottom">
              <Header>Title</Header>
              <Body>
                <div>Body</div>
              </Body>
              <Footer>
                <div>Footer</div>
              </Footer>
              <Panel>
                <div>Panel content</div>
              </Panel>
            </Modal>
          </ThemeProvider>
        )
        const dialogContainer = container.parentElement!.querySelector(
          ".rc-dialog-wrap"
        )
        expect(dialogContainer).toMatchSnapshot()
      })
    })
  })

  it("should call the onClose handler when the close button is clicked", () => {
    const onCloseStub = jest.fn()
    const { container } = render(
      <ThemeProvider>
        <Modal size="medium" visible onClose={onCloseStub}>
          <Header>Title</Header>
          <Body>
            <div>Body</div>
          </Body>
          <Footer>
            <div>Footer</div>
          </Footer>
        </Modal>
      </ThemeProvider>
    )

    const dialogContainer = container.parentElement!.querySelector(
      ".rc-dialog-wrap"
    )
    const closeButton = dialogContainer!.querySelector(".rc-dialog-close")
    fireEvent.click(closeButton!)
    expect(onCloseStub).toBeCalled()
  })

  it("with a custom style", () => {
    const { container } = render(
      <ThemeProvider>
        <Modal visible style={{ color: "red" }} onClose={() => {}}>
          <Header>Title</Header>
          <Body>
            <div>Body</div>
          </Body>
          <Footer>
            <div>Footer</div>
          </Footer>
        </Modal>
      </ThemeProvider>
    )
    const dialog = container.parentElement!.querySelector(
      ".rc-dialog-wrap .rc-dialog"
    )
    expect(dialog).toHaveStyle("color: red")
  })

  it("with a custom class", () => {
    const { container } = render(
      <ThemeProvider>
        <Modal visible className="custom-class" onClose={() => {}}>
          <Header>Title</Header>
          <Body>
            <div>Body</div>
          </Body>
          <Footer>
            <div>Footer</div>
          </Footer>
        </Modal>
      </ThemeProvider>
    )
    const dialog = container.parentElement!.querySelector(
      ".rc-dialog-wrap .rc-dialog"
    )
    expect(dialog).toHaveClass("custom-class")
  })

  it("with overriden padding", () => {
    const { container } = render(
      <ThemeProvider>
        <Modal
          padding={{ vertical: "0px", horizontal: "0px" }}
          visible
          className="custom-class"
          onClose={() => {}}>
          <Header>Title</Header>
          <Body>
            <div>Body</div>
          </Body>
          <Footer>
            <div>Footer</div>
          </Footer>
        </Modal>
      </ThemeProvider>
    )
    const dialogContainer = container.parentElement!.querySelector(
      ".rc-dialog-wrap"
    )
    expect(dialogContainer).toMatchSnapshot()
  })
})
