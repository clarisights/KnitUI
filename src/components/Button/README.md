# Button

## Usage

```javascript
import { Button } from "KnitUI"

<Button
  label="Primary"
  type="primary"
/>)
```

### Props

| Prop name        | Type                                                                  | Optional | Default   | Description                                                                                                                             |
| ---------------- | --------------------------------------------------------------------- | -------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| label            | string                                                                | Yes      | None      | The text label to be shown on the button                                                                                                |
| type             | `primary` or `secondary`                                              | Yes      | `primary` | Indicates the importance of the button's actions                                                                                        |
| colorPreset      | string, one of `neutral`, `danger`, `success`, `warning` or `unsaved` | Yes      | `neutral` | One of a set of predefined values that are representative of the type of action                                                         |
| customColor      | `string` or `object`                                                  | Yes      | None      | A valid CSS color string or `{ color: CSSColorString, secondaryColor: CSSColorString }` object that overrides the default color presets |
| insetCustomColor | string                                                                | Yes      | `white`   | Override defaults, should be valid CSS string                                                                                           |
| ghost            | boolean                                                               | Yes      | `false`   | Inverted color scheme                                                                                                                   |
| size             | string, one of `small`, `medium` or `large`                           | Yes      | `medium`  | Physical area occupied on the screen                                                                                                    |
| disabeld         | boolean                                                               | Yes      | `false`   | Whether the button should be disabled                                                                                                   |
| bare             | boolean                                                               | Yes      | `false`   | Show only the text or icon, stripping the background                                                                                    |
| icon             | string                                                                | Yes      | None      | icon type to be rendered in the button                                                                                                  |
| insetLabel       | string                                                                | Yes      | None      | An inset value, typically used for showing notifications                                                                                |
| href             | string                                                                | Yes      | None      | A location to navigate to                                                                                                               |
| onClick          | Function                                                              | Yes      | None      | A click handler to be executed on click of the button. Will receive the `event` as an argument                                          |
| className        | string                                                                | Yes      | None      | CSS class name to be added                                                                                                              |
| style            | CSS Object                                                            | Yes      | None      | CSS style to be added                                                                                                                   |

# Button Group

Button Group is container which have buttons as it's child and group them together for specific style.

> **_Note:_** Button Group apply largest button's height to all buttons & consider ideal case that all button's are of default type or ghost, not mix of both of them, it works fine with having mix type but separator may have different width than in ideal case

### Usage

```javascript
import { ButtonGroup } from "KnitUI"

<ButtonGroup>
  <Button icon="oInfo" />
  <Button label="Dropdown" />
  <Button icon="oExpandMore" />
</ButtonGroup>)
```
