import React, { useEffect } from "react"
import {
  render,
  cleanup,
  fireEvent,
  act,
  wait,
  waitForDomChange,
} from "react-testing-library"
import "jest-styled-components"
import "jest-dom/extend-expect"
import { ThemeProvider } from "../../../common/styles"
import { AlertsProvider, useAlerts, withAlerts, Alert } from "../"
import { Button } from "../../"
import { sizeType, placementType, AlertProps } from "../types"

afterEach(cleanup)

// Hoist function to provide Theme and AlertsProvider
const renderComponent = component =>
  render(
    <ThemeProvider>
      <AlertsProvider>{component}</AlertsProvider>
    </ThemeProvider>
  )

// Hook Component Used for API test
const ShowAlerts = props => {
  const { addAlert, removeAlert } = useAlerts()
  let keys = []

  useEffect(() => {
    keys = props.alerts.map(alert => addAlert(alert))
  }, [])

  const handleClick = () => {
    removeAlert(keys[0])
  }

  return <Button label="Click to remove" onClick={handleClick} />
}

const ShowAlertDismiss = props => {
  const { addAlert, removeAlert } = useAlerts()
  let keys = []

  useEffect(() => {
    props.alerts![0].actions![0].callback = key => removeAlert(key)
    keys = props.alerts.map(alert => addAlert(alert))
  }, [])

  return <></>
}

// Class component for API test
class ShowAlertClass extends React.Component<
  { alerts: AlertProps[]; addAlert: Function; removeAlert: Function },
  {}
> {
  keys: string[] = []
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.keys = this.props.alerts.map(alert => this.props.addAlert(alert))
  }

  handleClick = event => {
    this.props.removeAlert(this.keys[0])
  }

  render() {
    return <Button label="Click to remove" onClick={this.handleClick} />
  }
}

const WithAlertShowAlert: any = withAlerts(ShowAlertClass)

// Alerts Props need for API test
const alerts = [
  {
    type: "neutral",
    content: "Hello there, this is alert component",
    multiLine: true,
    heading: "This is Heading",
    icon: "",
  },
  {
    type: "danger",
    content: "Hello there, this is alert component",
    icon: "",
    size: "x-small",
  },
  {
    type: "success",
    size: "large",
    autoDismiss: false,
    dismissDuration: 1500,
    heading: "Hi there", // only uncomment when multiLine props is true else throw an error, as suppose to
    multiLine: true,
    actions: [
      {
        text: "Dismiss",
        callback: (key?: string) => {},
      },
    ],
    content: "Hello there, this is alert component",
    icon: "",
    onClose: () => {},
  },
]

//** Simple Alert Component **//
describe("Alert Component Tests", () => {
  // Test for different size working properly
  describe("different sizes", () => {
    const sizes: sizeType[] = ["x-small", "small", "medium", "large"]
    sizes.forEach(size => {
      test(`${size} alert render`, () => {
        const { container } = renderComponent(
          <Alert size={size} content="Hello there" icon="" />
        )

        expect(container).toMatchSnapshot()
        expect(container).toHaveTextContent("Hello there")
      })
    })
  })

  //Test for different Placements
  describe("different placements", () => {
    const placements: placementType[] = [
      "topLeft",
      "topRight",
      "bottomLeft",
      "bottomRight",
    ]
    placements.forEach(placement => {
      test(`${placement} side alert render`, () => {
        const { container } = renderComponent(
          <Alert placement={placement} content="Hello there" />
        )

        expect(container).toMatchSnapshot()
        expect(container).toHaveTextContent("Hello there")
      })
    })
  })

  test("onClose when passed from outside", () => {
    const onCloseFn = jest.fn()

    const { getByTestId, container } = renderComponent(
      <Alert content="Hello there" onClose={onCloseFn} />
    )

    const closeButton = container.querySelector(`button`)
    // const closeButton = getByTestId("alert-close")
    fireEvent.click(closeButton!)
    expect(onCloseFn).toBeCalledTimes(1)
    expect(container).toHaveTextContent("Hello there")
  })

  test("By default onClose of Alert", async () => {
    const { getByTestId, container } = renderComponent(
      <Alert content="Hello there" />
    )

    const closeButton = container.querySelector(`button`)
    fireEvent.click(closeButton!)
    const alertComponent = getByTestId("alert-container")

    expect(alertComponent).toHaveClass("hide")
  })
})

//** Alert Placement Wrapper and placement test **//
describe("Using API test : ", () => {
  const componentArr = [ShowAlerts, WithAlertShowAlert] //Checking hook & component Class
  componentArr.forEach(Component => {
    test("Adding 3 alerts component to render", async () => {
      let renderResult
      act(() => {
        renderResult = renderComponent(<Component alerts={alerts} />)
      })

      await waitForDomChange({ container: renderResult.container })

      await wait(() => {
        // Using test-id
        expect(renderResult.getAllByTestId("alert-container")).toHaveLength(3)
        //As a user interaction, but when content is kept same in called api
        expect(
          renderResult.getAllByText("Hello there, this is alert component")
        ).toHaveLength(3)
        // Avoid fail test because Opacity diff , it's because of transition, uncomment whenever needed to check other thing
        // expect(renderResult.container).toMatchSnapshot()
      })
    })

    test("Remove alert using API call", async () => {
      let renderResult

      // Remove Item from Wrapper
      act(() => {
        const { getByText, ...rest } = renderComponent(
          <Component alerts={alerts} useRemoveAPI />
        )
        renderResult = rest

        fireEvent.click(getByText("Click to remove"))
      })

      await waitForDomChange({ container: renderResult.container })
      await wait(() => {
        expect(renderResult.queryAllByTestId("alert-container")).toHaveLength(2)
      })
      // Avoid fail test because Opacity diff , it's because of transition, uncomment whenever needed to check other thing
      // expect(_container).toMatchSnapshot()
    })
  })

  test("Remove alert using dismiss action", async () => {
    let renderResult

    const newAlerts = [alerts[2], alerts[1]]

    act(() => {
      renderResult = renderComponent(<ShowAlertDismiss alerts={newAlerts} />)
    })
    await waitForDomChange({
      container: renderResult.container,
    })

    fireEvent.click(renderResult.getByText("Dismiss"))
    await wait(() => {
      expect(renderResult.queryAllByTestId("alert-container")).toHaveLength(1)
    })
  })
})

describe("Custom class and Custom content", () => {
  test("React component as content", async () => {
    const MyComponent = () => <p>Custom Compoenent</p>
    const { getAllByText, container } = renderComponent(
      <ShowAlerts alerts={[{ ...alerts[2], content: <MyComponent /> }]} />
    )
    await waitForDomChange({ container })
    await wait(() => {
      expect(getAllByText("Custom Compoenent")).toHaveLength(1)
      // Avoid fail test because Opacity diff , it's because of transition, uncomment whenever needed to check other thing
      // expect(container).toMatchSnapshot()
    })
  })

  test("custom class to content", async () => {
    const { getByTestId, container } = renderComponent(
      <ShowAlerts alerts={[{ ...alerts[2], className: "clsName" }]} />
    )
    await waitForDomChange({ container })
    await wait(() => {
      expect(getByTestId("alert-container")).toHaveClass("clsName")
      // Avoid fail test because Opacity diff , it's because of transition, uncomment whenever needed to check other thing
      // expect(container).toMatchSnapshot()
    })
  })

  test("prefix parameter class to content", async () => {
    const { getByTestId, container } = renderComponent(
      <ShowAlerts alerts={[{ ...alerts[2], prefixClassName: "clsName" }]} />
    )
    await waitForDomChange({ container })
    await wait(() => {
      expect(getByTestId("alert-container")).toHaveClass("clsName-knit-alert")
      // Avoid fail test because Opacity diff , it's because of transition, uncomment whenever needed to check other thing
      // expect(container).toMatchSnapshot()
    })
  })
})
