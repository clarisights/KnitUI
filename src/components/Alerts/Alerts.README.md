# Alerts

Alert can be accessible using `AlertsProvider`, `useAlerts`, `withAlerts`. These will give access to two functions `addAlert` & `removeAlert`

## Usage

You have to import `useAlerts` for Hooks component, and for class components wrap component with HOC `withAlerts`

```javascript
import {AlertsProvider, useAlerts, withAlerts} from "KnitUI"

// Provider must be included at a parent or root,
// you have to call it only once, better implementation will be add at root.
const App = () => {
    return <AlertsProvider><Component /></AlertsProvider>
}

// Hooks Component
const Component = (props: any) => {
    const { addAlert, removeAlert } = useAlerts()

    const PopUpAlert = ():string => {
        let key = addAlert({
            alertKey: "fc780390-235b-431f-8f29-53475a3747eb"
            type: "neutral",
            size: "medium",
            content: "Hello KnitUI",
            placement: "topRight",
            autoDismiss: false,
            dismissDuration: "500",
            heading: "Heading will be here",
            multiLine: "true",
            icon: "", 
            actions: [{text: "Action", callback: (key:string)=>alert('Action is called')}]
            onClose: (key) => { console.log(`Alert ${key} is closed`)},
            customColor: "#ff2d4e",
            onExit: (key:string) => {...}
            // className: "my_class",
            // prefixClassName: "my_pop"
        })
        return key
    }

    const removePoppedUpAlert = (key : string) => {
        //To remove added Alert
        removeAlert(key)
    }

    return (...)
}

// Class Component
class ClassComponent extends React.Component {

    constructor(props){
        super(props)
        ...
    }

    const PopUpAlert = ():string => {
        let key = this.props.addAlert(...)
        return key
    }

    const removePoppedUpAlert = (key : string) => {
        //To remove added Alert
        this.props.removeAlert(key)
    }
}

// withAlerts will add `addAlert` and `removeAlert` as props to wrapped class component
const Component = withAlerts(ClassComponent)
```

### Parameter of`.addAlert()`

alertProps : You can pass props value of Alert Component as object, which are mentioned in interface `AlertProps`

# Alert

Individual Alert Component can be called from `Alert` does not support placement.

```javascript
import { Alert } from "KnitUI"
```

### Props (interface `AlertProps`)

| Prop name       | Type           | Default                                                        | Description                                                                                                                                                                                                                                   |
| --------------- | -------------- | -------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| alertKey        | `string`       | Unique each time                                               | unique key should be passed if manually handling keys, else by default each time it generate unique key for each alert.                                                                                                                       |
| type            | `alertType`    | `neutral | unsaved | warning | success | danger`               | Indicates type of the alert and set some default theme according to that.                                                                                                                                                                     |
| size            | `sizeType`     | `x-small | small | medium | large`                             | Width of the alert message occupied on the screen                                                                                                                                                                                             |
| content         | string         | -                                                              | Content of the Alert Component                                                                                                                                                                                                                |
| autoDismiss     | boolean        | `false`                                                        | if `true`, auto dismiss the alert after `dismissDuraiton` millisecond                                                                                                                                                                         |
| dismissDuration | number         | `5000`                                                         | if `autoDismiss` is `true`, it representation duration it will be visible on screen after pop-up                                                                                                                                              |
| multiline       | boolean        | `false`                                                        | If alert component have multiline message                                                                                                                                                                                                     |
| heading         | string         | `false`                                                        | if `multiline`, alert will show heading passed as string in alert                                                                                                                                                                             |
| icon            | string         | -                                                              | icon type to be rendered in the alert                                                                                                                                                                                                         |
| image           | string         | -                                                              | Image url to be shown as icon in alert                                                                                                                                                                                                        |
| actions         | `actionType[]` | `type actionType = { text: string, callback: (key) => {...} }` | Array of actions will be shown on alert as buttons, alert's `key` is passed so user can remove alert from action.                                                                                                                             |
| onClose         | (key: string) = void      | -                                                              | A click handler to be executed on closing of the alert. Will receive the `key` of the alert as an argument                                                                                                                                               |
| onExit          | Function       | -                                                              | This function will be executed when Alert component will unmount. Function have received the `key` as an argument.eg. `(key) => {...}`                                                                                                        |
| className       | string         | -                                                              | add class to main alert wrapper to provide custom class                                                                                                                                                                                       |
| prefixClassName | string         | -                                                              | create set of classes which add to each part of alert with provided prefix, classes are -> -knit-alert, -knit-alert-icon, -knit-alert-close, -knit-alert-content, -knit-alert-action-wrapper, -knit-alert-action, -knit-alert-content-wrapper |
| customColor     | string         | -                                                              | custom color to be in background, using chroma along with it get font or general color                                                                                                                                                        |
