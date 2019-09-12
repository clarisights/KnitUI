<!-- STORY -->

# Input

### Usage

```javascript
import { Input } from "KnitUI"

const InputWrapper = () => {
  const [ value, setValue ] = useState("")

  return (
    <div
      style={{
        width: 240,
      }}>
      <Input onChange={(e) => setValue(e.target.value)} placeholder="basic usage" />
    </div>
  )
}
```

### Props

| Prop name   | Type               | Optional | Default   |  Description                      |
|-------------|--------------------|----------|-----------|-----------------------------------|
| placeholder | string             | Yes      | None      | This is a placeholder description |
| value       | string             | Yes      | None      | This is a value of the input |
| error       | boolean            | Yes      | None      | To enable error state |
| success     | boolean            | Yes      | None      | To enable success state|
| label       | string | ReactNode | Yes      | None      | content to be shown above the input as a label|
| notification| string | ReactNode | Yes      | None      | content to be shown below the input as a notification|
| onChange    | Function           | No       | None      | onChange handler|
| addonAfter  | string | ReactNode | Yes      | None      | to show after input|
| addonBefore | string | ReactNode | Yes      | None      | to show before input|
| inputSize   | "default"|"small"|"lage" | Yes      | "default"      | the size of the inputbutton|


**Note: Default HTML attributes of the input element are supported.**