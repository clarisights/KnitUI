import React from "react"
import Breadcrumb from "../index"
import Icon from "../../Icon"
import ThemeProvider from "../../../common/styles/ThemeProvider"
import { render, cleanup, fireEvent } from "react-testing-library"
import "jest-styled-components"
import "jest-dom/extend-expect"

afterEach(cleanup)

const customStyle = {
  border: "2px solid red",
}

const customActiveStyle = {
  textDecoration: "underline",
  color: "#0F74BD",
}

const customChildStyle = {
  fontSize: "1.8rem",
}

describe("Breadcrumb", () => {
  describe("basic", () => {
    it("renders basic breadcrumb correctly", () => {
      const { asFragment } = render(
        <ThemeProvider>
          <Breadcrumb>
            <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
            <Breadcrumb.Item>Reports</Breadcrumb.Item>
            <Breadcrumb.Item>50467</Breadcrumb.Item>
          </Breadcrumb>
        </ThemeProvider>
      )
      expect(asFragment()).toMatchSnapshot()
    })

    it("renders with a link clearly", () => {
      const { asFragment } = render(
        <ThemeProvider>
          <Breadcrumb>
            <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
            <Breadcrumb.Item>Reports</Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="/dashboard/reports/50467">50467</a>
            </Breadcrumb.Item>
          </Breadcrumb>
        </ThemeProvider>
      )
      expect(asFragment()).toMatchSnapshot()
    })

    it("renders with a custom separator correctly", () => {
      const { asFragment } = render(
        <ThemeProvider>
          <Breadcrumb separator={"🐉"}>
            <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
            <Breadcrumb.Item>Reports</Breadcrumb.Item>
            <Breadcrumb.Item>50467</Breadcrumb.Item>
          </Breadcrumb>
        </ThemeProvider>
      )
      expect(asFragment()).toMatchSnapshot()
    })

    it("renders with custom parent style correctly", () => {
      const { asFragment } = render(
        <ThemeProvider>
          <Breadcrumb rootStyle={customStyle}>
            <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
            <Breadcrumb.Item>Reports</Breadcrumb.Item>
            <Breadcrumb.Item>50467</Breadcrumb.Item>
          </Breadcrumb>
        </ThemeProvider>
      )
      expect(asFragment()).toMatchSnapshot()
    })

    it("renders with custom child styles correctly", () => {
      const { asFragment } = render(
        <ThemeProvider>
          <Breadcrumb childStyle={customChildStyle}>
            <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
            <Breadcrumb.Item>Reports</Breadcrumb.Item>
            <Breadcrumb.Item>50467</Breadcrumb.Item>
          </Breadcrumb>
        </ThemeProvider>
      )
      expect(asFragment()).toMatchSnapshot()
    })
  })

  it("renders with custom active item styles correctly", () => {
    const { asFragment } = render(
      <ThemeProvider>
        <Breadcrumb childStyle={customActiveStyle}>
          <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          <Breadcrumb.Item>Reports</Breadcrumb.Item>
          <Breadcrumb.Item>50467</Breadcrumb.Item>
        </Breadcrumb>
      </ThemeProvider>
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it("renders with icon correctly", () => {
    const { asFragment } = render(
      <ThemeProvider>
        <Breadcrumb>
          <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          <Breadcrumb.Item>
            <Icon height="18px" width="18px" type="oAddCircle" />
            Reports
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="/dashboard/reports/50467">50467</a>
          </Breadcrumb.Item>
        </Breadcrumb>
      </ThemeProvider>
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it("renders no child correctly", () => {
    const { asFragment } = render(
      <ThemeProvider>
        <Breadcrumb />
      </ThemeProvider>
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it("renders a single correctly", () => {
    const { asFragment } = render(
      <ThemeProvider>
        <Breadcrumb>
          <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
        </Breadcrumb>
      </ThemeProvider>
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it("renders with a specified max width correctly", () => {
    const { asFragment } = render(
      <ThemeProvider>
        <Breadcrumb maxWidth="200px">
          <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          <Breadcrumb.Item>Reports</Breadcrumb.Item>
          <Breadcrumb.Item>50467</Breadcrumb.Item>
          <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          <Breadcrumb.Item>Reports</Breadcrumb.Item>
          <Breadcrumb.Item>50467</Breadcrumb.Item>
          <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          <Breadcrumb.Item>Reports</Breadcrumb.Item>
          <Breadcrumb.Item>50467</Breadcrumb.Item>
          <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          <Breadcrumb.Item>Reports</Breadcrumb.Item>
          <Breadcrumb.Item>50467</Breadcrumb.Item>
          <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          <Breadcrumb.Item>Reports</Breadcrumb.Item>
          <Breadcrumb.Item>50467</Breadcrumb.Item>
          <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          <Breadcrumb.Item>Reports</Breadcrumb.Item>
          <Breadcrumb.Item>50467</Breadcrumb.Item>
        </Breadcrumb>
      </ThemeProvider>
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it("renders with a truncated state correctly", () => {
    const { asFragment } = render(
      <ThemeProvider>
        <Breadcrumb truncateTo={2}>
          <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          <Breadcrumb.Item>Reports</Breadcrumb.Item>
          <Breadcrumb.Item>50467</Breadcrumb.Item>
          <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          <Breadcrumb.Item>Reports</Breadcrumb.Item>
          <Breadcrumb.Item>50467</Breadcrumb.Item>
          <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          <Breadcrumb.Item>Reports</Breadcrumb.Item>
          <Breadcrumb.Item>50467</Breadcrumb.Item>
          <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          <Breadcrumb.Item>Reports</Breadcrumb.Item>
          <Breadcrumb.Item>50467</Breadcrumb.Item>
        </Breadcrumb>
      </ThemeProvider>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})

it("should call the provided onClick function", () => {
  const onClick = jest.fn()
  const { getByText } = render(
    <ThemeProvider>
      <Breadcrumb>
        <Breadcrumb.Item onClick={onClick}>Dashboard</Breadcrumb.Item>
        <Breadcrumb.Item>Reports</Breadcrumb.Item>
        <Breadcrumb.Item>50467</Breadcrumb.Item>
      </Breadcrumb>
    </ThemeProvider>
  )
  fireEvent.click(getByText("Dashboard"))
  expect(onClick).toBeCalled()
  expect(onClick.mock.calls[0].length).toBe(1)
})
