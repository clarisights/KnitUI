import React from "react"
import { Modal } from "../index"
import { render, cleanup, fireEvent } from 'react-testing-library'
import 'jest-styled-components'
import 'jest-dom/extend-expect'
import { ThemeProvider } from "../../styles"

afterEach(cleanup)

describe("Modal", () => {
  const sizes = ["small", "medium", "large", "x-large"]
  sizes.forEach((size) => {
    describe(`with size ${size}`, () => {
      it("with simple config", () => {
        const { container } = render(
          <ThemeProvider>
            <Modal
              header={{title: "Title"}}
              body={<div>Body</div>}
              footer={<div>Footer</div>}
              size="medium"
              visible
              onClose={() => {}}
            />
          </ThemeProvider>
        )
        const dialogContainer = container.parentElement!.querySelector(".rc-dialog-wrap")
        expect(dialogContainer).toMatchSnapshot()
      })

      it("with right section in header", () => {
        const { container } = render(
          <ThemeProvider>
            <Modal
              header={{
                title: "Title",
                rightSection:
                  <div>
                    <div>The right section</div>
                  </div>
              }}
              body={<div>Body</div>}
              footer={<div>Footer</div>}
              size="medium"
              visible
              onClose={() => {}}
            />
          </ThemeProvider>
        )
        const dialogContainer = container.parentElement!.querySelector(".rc-dialog-wrap")
        expect(dialogContainer).toMatchSnapshot()
      })

      it("with a right panel", () => {
        const { container } = render(
          <ThemeProvider>
            <Modal
              header={{title: "Title"}}
              body={<div>Body</div>}
              footer={<div>Footer</div>}
              size="medium"
              visible
              onClose={() => {}}
              panel={{ position: "right", content: <div>Panel content</div>}}
            />
          </ThemeProvider>
        )
        const dialogContainer = container.parentElement!.querySelector(".rc-dialog-wrap")
        expect(dialogContainer).toMatchSnapshot()
      })

      it("with a left panel", () => {
        const { container } = render(
          <ThemeProvider>
            <Modal
              header={{title: "Title"}}
              body={<div>Body</div>}
              footer={<div>Footer</div>}
              size="medium"
              visible
              onClose={() => {}}
              panel={{ position: "left", content: <div>Panel content</div>}}
            />
          </ThemeProvider>
        )
        const dialogContainer = container.parentElement!.querySelector(".rc-dialog-wrap")
        expect(dialogContainer).toMatchSnapshot()
      })

      it("with a bottom panel", () => {
        const { container } = render(
          <ThemeProvider>
            <Modal
              header={{title: "Title"}}
              body={<div>Body</div>}
              footer={<div>Footer</div>}
              size="medium"
              visible
              onClose={() => {}}
              panel={{ position: "bottom", content: <div>Panel content</div>}}
            />
          </ThemeProvider>
        )
        const dialogContainer = container.parentElement!.querySelector(".rc-dialog-wrap")
        expect(dialogContainer).toMatchSnapshot()
      })
    })
  })

  it("should call the onClose handler when the close button is clicked", () => {
    const onCloseStub = jest.fn()
    const { container } = render(
      <ThemeProvider>
        <Modal
          header={{title: "Title"}}
          body={<div>Body</div>}
          footer={<div>Footer</div>}
          size="medium"
          visible
          onClose={onCloseStub}
        />
      </ThemeProvider>
    )

    const dialogContainer = container.parentElement!.querySelector(".rc-dialog-wrap")
    const closeButton = dialogContainer!.querySelector(".rc-dialog-close")
    fireEvent.click(closeButton!)
    expect(onCloseStub).toBeCalled()
  })
})
