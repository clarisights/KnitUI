# Alert

Basic Alert Component to be called by AlertsAPI

### Props

| Prop name   | Type       | Default   |  Description                      |
|-------------|------------|-----------|-----------------------------------|
| type        | `alertType`  | `standard` | Indicates type of the alert and set some default theme according to that.|
| size        | `sizeType `  | `small` | Size of the alert message occupied on the screen |
| content     | string     | -         | Content of the Alert Component |
| autoDismiss | boolean    |  `false`  | if `true`, auto dismiss the alert after `dismissDuraiton` millisecond|
| dismissDuration | number | `5000`    | if `autoDismiss` is `true`, it representation duration it will be visible on screen after pop-up |
| multiline   | boolean    | `false`   | If alert component have multiline message |
| heading     | string     | `false`   | if `multiline`, alert will show heading passed as string in alert |
| showIcon    | boolean    | `false`   | To render icon in alert |
| icon        | string     |    -      | icon type to be rendered in the alert |
| image       | string     |    -      | Image url to be shown as icon in alert |
| actions     | `actionType[]` |    -      | Array of actions will be shown on alert as buttons |
| onClose   | Function  | None    | A click handler to be executed on closing of the alert. Will receive the `event` as an argument |

### `alertType`

```javascript
standard | warning | error | message
```

### `sizeType`

```javascript
x-small | small | medium | hard
```

### `actionType`

```javascript
type actionType = {
  text: string,
  callback: Function
}
```
