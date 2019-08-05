# Alerts API

Alert can be accessible/render by Alert API, you can import alertAPI from `Alerts.tsx`.
The API have only one function `open`.

## Usage

```javascript
import alertAPI as AlertAPI from "./index"

alertAPI.open({
    type="warning",
    size="small",
    content="Hello There, this should the multiline content",
    autoDismiss=true,
    dismissDuration = 3000,
    heading = "This is heading of the multiline alert",
    multiline="true"
})
```

### Parameter of`.open()`

You can pass props value of Alert Component as object, which are mentioned in interface `AlertProps`

# Alert

Basic Alert Component to be called by AlertsAPI

### Props (interface `AlertProps`)

| Prop name       | Type           | Default    | Description                                                                                      |
| --------------- | -------------- | ---------- | ------------------------------------------------------------------------------------------------ |
| type            | `alertType`    | `standard` | Indicates type of the alert and set some default theme according to that.                        |
| size            | `sizeType`     | `small`    | Size of the alert message occupied on the screen                                                 |
| content         | string         | -          | Content of the Alert Component                                                                   |
| autoDismiss     | boolean        | `false`    | if `true`, auto dismiss the alert after `dismissDuraiton` millisecond                            |
| dismissDuration | number         | `5000`     | if `autoDismiss` is `true`, it representation duration it will be visible on screen after pop-up |
| multiline       | boolean        | `false`    | If alert component have multiline message                                                        |
| heading         | string         | `false`    | if `multiline`, alert will show heading passed as string in alert                                |
| icon            | string         | -          | icon type to be rendered in the alert                                                            |
| image           | string         | -          | Image url to be shown as icon in alert                                                           |
| actions         | `actionType[]` | -          | Array of actions will be shown on alert as buttons                                               |
| onClose         | Function       | None       | A click handler to be executed on closing of the alert. Will receive the `event` as an argument  |

### Custom types defined

<table>
  <tr>
    <th>Type</th>
    <th>Assignable Values</th>
  </tr>
  <tr>
    <td><code>alertType<code></td>
    <td>

      standard | warning | error | message

  </td>
  </tr>
  <tr>
    <td><code>sizeType<code></td>
    <td>

      x-small | small | medium | hard

  </td>
  </tr>
  <tr> 
    <td><code>actionType</code></td>
    <td>

      type actionType = {
        text: string,
        callback: Function
      }

  </td>
  </tr>
</table>
