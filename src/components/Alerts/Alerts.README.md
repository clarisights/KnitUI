# Alerts

Alert can be accessible/render by Alert API, you can import alertAPI from `Alerts.tsx`.
The API have two functions `add` & `remove`

## Usage

```javascript
import alerts from "KnitUI"

string key = alerts.add({
    type="warning",
    size="small",
    content="Hello There, this should the multiline content",
    autoDismiss=true,
    dismissDuration = 3000,
    heading = "This is heading of the multiline alert",
    multiline="true"
})

alerts.remove(key)
```

### Parameter of`.add()`

You can pass props value of Alert Component as object, which are mentioned in interface `AlertProps`

# Alert

Individual Alert Component can be called from `Alert` does not support placement.

```javascript
import { Alert } from "KnitUI"
```

### Props (interface `AlertProps`)

| Prop name       | Type           | Default                                                  | Description                                                                                                                                                                                                                                   |
| --------------- | -------------- | -------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type            | `alertType`    | `standard | warning | error | message`                   | Indicates type of the alert and set some default theme according to that.                                                                                                                                                                     |
| size            | `sizeType`     | `x-small | small | medium | large`                       | Width of the alert message occupied on the screen                                                                                                                                                                                             |
| content         | string         | -                                                        | Content of the Alert Component                                                                                                                                                                                                                |
| autoDismiss     | boolean        | `false`                                                  | if `true`, auto dismiss the alert after `dismissDuraiton` millisecond                                                                                                                                                                         |
| dismissDuration | number         | `5000`                                                   | if `autoDismiss` is `true`, it representation duration it will be visible on screen after pop-up                                                                                                                                              |
| multiline       | boolean        | `false`                                                  | If alert component have multiline message                                                                                                                                                                                                     |
| heading         | string         | `false`                                                  | if `multiline`, alert will show heading passed as string in alert                                                                                                                                                                             |
| icon            | string         | -                                                        | icon type to be rendered in the alert                                                                                                                                                                                                         |
| image           | string         | -                                                        | Image url to be shown as icon in alert                                                                                                                                                                                                        |
| actions         | `actionType[]` | `type actionType = { text: string, callback: Function }` | Array of actions will be shown on alert as buttons                                                                                                                                                                                            |
| onClose         | Function       | None                                                     | A click handler to be executed on closing of the alert. Will receive the `event` as an argument                                                                                                                                               |
| className       | string         | None                                                     | add class to main alert wrapper to provide custom class                                                                                                                                                                                       |
| prefixClassName | string         | None                                                     | create set of classes which add to each part of alert with provided prefix, classes are -> -knit-alert, -knit-alert-icon, -knit-alert-close, -knit-alert-content, -knit-alert-action-wrapper, -knit-alert-action, -knit-alert-content-wrapper |
