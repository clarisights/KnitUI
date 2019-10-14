import React from "react"
import Modal from "../index"
import { render, cleanup, fireEvent } from "react-testing-library"
import "jest-styled-components"
import "jest-dom/extend-expect"
import { ThemeProvider } from "../../../common/styles"

afterEach(cleanup)

describe("Modal", () => {
  const sizes = ["small", "medium", "large", "x-large"]
  sizes.forEach(size => {
    describe(`with size ${size}`, () => {
      it("with simple config", () => {
        const { container } = render(
          <ThemeProvider>
            <Modal
              header={{ leftSection: "Title" }}
              body={<div>Body</div>}
              footer={<div>Footer</div>}
              size="medium"
              visible
              onClose={() => {}}
            />
          </ThemeProvider>
        )
        const dialogContainer = container.parentElement!.querySelector(
          ".rc-dialog-wrap"
        )
        expect(dialogContainer).toMatchSnapshot()
      })

      it("with no fill", () => {
        const { container } = render(
          <ThemeProvider>
            <Modal
              header={{ leftSection: "Title", noFill: true }}
              body={<div>Body</div>}
              footer={<div>Footer</div>}
              size="medium"
              visible
              onClose={() => {}}
            />
          </ThemeProvider>
        )
        const dialogContainer = container.parentElement!.querySelector(
          ".rc-dialog-wrap"
        )
        expect(dialogContainer).toMatchSnapshot()
      })

      it("with custom title size", () => {
        const { container } = render(
          <ThemeProvider>
            <Modal
              header={{ leftSection: "Title", fontSize: 12 }}
              body={<div>Body</div>}
              footer={<div>Footer</div>}
              size="medium"
              visible
              onClose={() => {}}
            />
          </ThemeProvider>
        )
        const dialogContainer = container.parentElement!.querySelector(
          ".rc-dialog-wrap"
        )
        expect(dialogContainer).toMatchSnapshot()
      })

      it("with left section in header", () => {
        const { container } = render(
          <ThemeProvider>
            <Modal
              header={{ leftSection: <div>The left section</div> }}
              body={<div>Body</div>}
              footer={<div>Footer</div>}
              size="medium"
              visible
              onClose={() => {}}
            />
          </ThemeProvider>
        )
        const dialogContainer = container.parentElement!.querySelector(
          ".rc-dialog-wrap"
        )
        expect(dialogContainer).toMatchSnapshot()
      })

      it("with right section in header", () => {
        const { container } = render(
          <ThemeProvider>
            <Modal
              header={{
                leftSection: "Title",
                rightSection: (
                  <div>
                    <div>The right section</div>
                  </div>
                ),
              }}
              body={<div>Body</div>}
              footer={<div>Footer</div>}
              size="medium"
              visible
              onClose={() => {}}
            />
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
            <Modal
              header={{ leftSection: "Title" }}
              body={<div>Body</div>}
              footer={<div>Footer</div>}
              size="medium"
              visible
              onClose={() => {}}
              panel={{ position: "right", content: <div>Panel content</div> }}
            />
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
            <Modal
              header={{ leftSection: "Title" }}
              body={<div>Body</div>}
              footer={<div>Footer</div>}
              size="medium"
              visible
              onClose={() => {}}
              panel={{ position: "left", content: <div>Panel content</div> }}
            />
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
            <Modal
              header={{ leftSection: "Title" }}
              body={<div>Body</div>}
              footer={<div>Footer</div>}
              size="medium"
              visible
              onClose={() => {}}
              panel={{ position: "bottom", content: <div>Panel content</div> }}
            />
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
        <Modal
          header={{ leftSection: "Title" }}
          body={<div>Body</div>}
          footer={<div>Footer</div>}
          size="medium"
          visible
          onClose={onCloseStub}
        />
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
        <Modal
          header={{
            leftSection: "Title",
            rightSection: (
              <div>
                <div>The right section</div>
              </div>
            ),
          }}
          body={<div>Body</div>}
          footer={<div>Footer</div>}
          visible
          style={{ color: "red" }}
          onClose={() => {}}
        />
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
        <Modal
          header={{ leftSection: "Title" }}
          body={<div>Body</div>}
          footer={<div>Footer</div>}
          visible
          className="custom-class"
          onClose={() => {}}
        />
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
          header={{ leftSection: "Title" }}
          body={<div>Body</div>}
          footer={<div>Footer</div>}
          visible
          className="custom-class"
          onClose={() => {}}
        />
      </ThemeProvider>
    )
    const dialogContainer = container.parentElement!.querySelector(
      ".rc-dialog-wrap"
    )
    expect(dialogContainer).toMatchSnapshot()
  })
})
