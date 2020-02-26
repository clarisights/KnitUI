<!-- STORY -->

# Input

### Usage

```javascript
import { Input } from "KnitUI"

const InputWrapper = () => {
  const [value, setValue] = useState("")

  return (
    <div
      style={{
        width: 240,
      }}>
      <Input
        onChange={e => setValue(e.target.value)}
        placeholder="basic usage"
      />
    </div>
  )
}
```

### Props

| Prop name      | Type                                                          | Optional | Default   | Description                                                                 |
| -------------- | ------------------------------------------------------------- | -------- | --------- | --------------------------------------------------------------------------- |
| placeholder    | string                                                        | Yes      | None      | This is a placeholder description                                           |
| value          | string                                                        | Yes      | None      | This is a value of the input                                                |
| state          | "success" \| "warning" \| "error"                             | Yes      | None      | To enable state of input (success, warning or error)                        |
| label          | string \| ReactNode                                           | Yes      | None      | content to be shown above the input as a label                              |
| notification   | string \| ReactNode                                           | Yes      | None      | content to be shown below the input as a notification                       |
| onChange       | Function                                                      | Yes      | None      | onChange handler                                                            |
| addonAfter     | string \| ReactNode                                           | Yes      | None      | to show after input                                                         |
| addonBefore    | string \| ReactNode                                           | Yes      | None      | to show before input                                                        |
| inputSize      | "default" \| "small" \| "lage"                                | Yes      | "default" | the size of the inputbutton                                                 |
| type           | "default" \| "search" \| "number" \| "password" \| "textarea" | Yes      | "default" | Type of input field to be displayed (Native HTML input types not supported) |
| disabled       | boolean                                                       | Yes      | None      | To disable the input                                                        |
| textareaResize | "both" \| "horizontal" \| "vertical" \| "none"                | Yes      | "both"    | To limit the resize for textarea                                            |

**Note: Default HTML attributes of the input element are supported.**
