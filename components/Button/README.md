# Button

## Usage

```javascript
import { Button } from "./index"

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
| colorTheme  | Either a predefined preset, i.e one of `neutral`, `danger`, `success`, `warning` or `unsaved` or an object of the form `{ "font" : "#000000", "background: "#ffffff", "insetFont: "#eeeeee", "insetBackground: "#3333333" }` | `neutral` | Indicates the state of an action. Can be a preset string or an object representing custom color theme that overrides the defaults, The color theme should be passed in the form of an object containing two properties, background and font and the values should be a valid hex string or css rgb format |
| ghost      | boolean    |  `false`   | use an inverted color scheme |
| size       | string, one of `small`, `medium` or `large` | `medium` | qualitatively represents the physical area occupied on the screen |
| disabeld   | boolean | `false` | Whether the button should be disabled |
| bare   | boolean | `false` | Show only the text or icon, stripping the background |
| icon   | string  | None    |  icon type to be rendered in the button |
| insetLabel   | string  | None    |  An inset value, typically used for showing notifications |
| href   | string  | None    |  A location to navigate to |
| onClick   | Function  | None    | A click handler to be executed on click of the button. Will receive the `event` as an argument |

