# Button

## Usage

```javascript
import { Button } from "components"

<Button
  label="Primary"
  type="primary"
/>)
```

### Props

| Prop name   | Type       | Default   |  Description                      |
|-------------|------------|-----------|-----------------------------------|
| label       | string     | None      | The text label to be shown on the button|
| type        | `primary` or `secondary` | `primary` Indicates the importance of the button's actions
| colorPreset  | A predefined preset, i.e one of `neutral`, `danger`, `success`, `warning` or `unsaved` |
| customColor  | string    |  None   | A valid CSS color string that overrides the default color presets |
| insetCustomColor  | string    |  None   | A valid CSS color string that overrides the default color presets for the inset label |
| ghost      | boolean    |  `false`   | use an inverted color scheme |
| size       | string, one of `small`, `medium` or `large` | `medium` | qualitatively represents the physical area occupied on the screen |
| disabeld   | boolean | `false` | Whether the button should be disabled |
| bare   | boolean | `false` | Show only the text or icon, stripping the background |
| icon   | string  | None    |  icon type to be rendered in the button |
| insetLabel   | string  | None    |  An inset value, typically used for showing notifications |
| href   | string  | None    |  A location to navigate to |
| onClick   | Function  | None    | A click handler to be executed on click of the button. Will receive the `event` as an argument |

