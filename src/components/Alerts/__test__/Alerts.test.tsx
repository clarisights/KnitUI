import React from "react"
import {
  render,
  cleanup,
  fireEvent,
  act,
  getByTestId as _getByTestId,
  wait,
  queryAllByTestId as _queryAllByTestId,
  getAllByText as _getAllByText,
  waitForDomChange,
} from "react-testing-library"
import "jest-styled-components"
import "jest-dom/extend-expect"
import Alert from "../Alert"
import { AlertAPIInterface } from "../api"
import alerts from "../"
import AlertsWrapper from "../AlertsWrapper"
import console = require("console")

afterEach(cleanup)

// Alert Component
describe("Alert Component Tests", () => {
  const sizes = ["x-small", "small", "medium", "large"]

  describe("different sizes", () => {
    sizes.forEach(size => {
      test(`${size} alert render`, () => {
        const { queryByTestId, container } = render(
          <Alert content="Hello there" icon="" />
        )

        expect(container).toMatchSnapshot()
        expect(container).toHaveTextContent("Hello there")
      })
    })
  })

  test("onClose when passed from outside", () => {
    const onCloseFn = jest.fn()

    const { getByTestId, container } = render(
      <Alert content="Hello there" onClose={onCloseFn} />
    )

    const closeButton = getByTestId("alert-close")
    fireEvent.click(closeButton)
    expect(onCloseFn).toBeCalledTimes(1)
    expect(container).toHaveTextContent("Hello there")
  })

  test("By default onClose of Alert", async () => {
    const { getByTestId, queryAllByTestId, container } = render(
      <Alert content="Hello there" />
    )

    const closeButton = getByTestId("alert-close")
    fireEvent.click(closeButton)
    const alertComponent = getByTestId("alert-container")

    expect(alertComponent).toHaveClass("hide")
  })
})

describe("AlertWrapper Component Test", () => {
  const API: AlertAPIInterface = {
    add: alertProps => "",
    remove: key => false,
  }

  const refFn = alertWrapperInstance => {
    if (alertWrapperInstance) {
      API.add = alertWrapperInstance.add
      API.remove = alertWrapperInstance.remove
    }
  }

  test("Adding 3 alerts component to render", async () => {
    let containerN
    let getAllByTextN
    let queryAllByTestIdN

    act(() => {
      const { getAllByText, queryAllByTestId, container } = render(
        <AlertsWrapper ref={refFn} />
      )
      containerN = container
      getAllByTextN = getAllByText
      queryAllByTestIdN = queryAllByTestId

      API.add({
        type: "standard",
        content: "Hello there, this is alert component",
        multiLine: true,
        heading: "This is Heading",
        icon: "",
      })
    })
    act(() => {
      API.add({
        type: "error",
        content: "Hello there, this is alert component",
        icon: "",
        size: "x-small",
      })
    })
    act(() => {
      API.add({
        type: "success",
        content: "Hello there, this is alert component",
        icon: "",
        onClose: () => {},
        size: "large",
      })
    })

    await wait()

    // Using test-id
    expect(queryAllByTestIdN("alert-container")).toHaveLength(3)

    //As a user interaction, but when content is kept same in called api
    expect(getAllByTextN("Hello there, this is alert component")).toHaveLength(
      3
    )

    // Snapshot
    expect(containerN).toMatchSnapshot()
  })

  test("Remove 1 of 3 alerts component rendered", async () => {
    const keys: string[] = []
    let key
    let status = false
    let containerN

    act(() => {
      const { container } = render(<AlertsWrapper ref={refFn} />)
      containerN = container
      key = API.add({
        type: "standard",
        content: "Hello there, this is alert component",
        multiLine: true,
        heading: "This is Heading",
        icon: "",
      })
      keys.push(key)
    })
    act(() => {
      key = API.add({
        type: "error",
        content: "Hello there, this is alert component",
        icon: "",
        size: "x-small",
      })
      keys.push(key)
    })
    act(() => {
      key = API.add({
        type: "success",
        content: "Hello there, this is alert component",
        icon: "",
        onClose: () => {},
        size: "large",
      })
      keys.push(key)
    })

    // Remove Item from Wrapper
    act(() => {
      status = API.remove(keys[1])
    })
    // Assert for Remove API worked correctly
    expect(status).toBe(true)

    // Assert whether Item removed from DOM or not
    await wait(() => {
      const wrapper = _getByTestId(document.body, "alert-wrapper")
      expect(_queryAllByTestId(wrapper, "alert-container")).toHaveLength(2)
    })

    // Snapshot
    expect(containerN).toMatchSnapshot()
  })
})

describe("Custom class and Custom content", () => {
  test("React component as content", () => {
    const MyComponent = () => {
      return <p>Custom Compoenent</p>
    }
    act(() => {
      alerts.add({
        type: "standard",
        size: "small",
        placement: "topRight",
        autoDismiss: false,
        dismissDuration: 1500,
        heading: "Hi there", // only uncomment when multiLine props is true else throw an error, as suppose to
        multiLine: true,
        content: <MyComponent />,
        icon: "",
        onClose: () => {},
      })
    })
    expect(_getAllByText(document.body, "Custom Compoenent")).toHaveLength(1)
  })
  cleanup()

  test("custom class to content", async () => {
    act(() => {
      alerts.add({
        type: "standard",
        size: "small",
        placement: "topRight",
        autoDismiss: false,
        dismissDuration: 1500,
        heading: "Hi there", // only uncomment when multiLine props is true else throw an error, as suppose to
        multiLine: true,
        className: "clsName",
        content: "class name",
        icon: "",
        onClose: () => {},
      })
    })
    const wrapper = _getByTestId(document.body, "knit-ui-alerts")
    await waitForDomChange({ container: wrapper })
    expect(_queryAllByTestId(wrapper, "alert-container")[0]).toHaveClass(
      "clsName"
    )
  })

  test("prefix parameter class to content", async () => {
    act(() => {
      alerts.add({
        type: "standard",
        size: "small",
        placement: "topRight",
        autoDismiss: false,
        dismissDuration: 1500,
        heading: "Hi there", // only uncomment when multiLine props is true else throw an error, as suppose to
        multiLine: true,
        prefixClassName: "clsName",
        content: "class name",
        icon: "",
        onClose: () => {},
      })
    })
    const wrapper = _getByTestId(document.body, "knit-ui-alerts")
    await waitForDomChange({ container: wrapper })
    expect(_queryAllByTestId(wrapper, "alert-container")[0]).toHaveClass(
      "clsName-knit-alert"
    )
  })
})
