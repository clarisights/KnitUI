# Label

## Usage

```javascript
import { Label } from "KnitUI"

<Label
  text="label"
/>)
```

### Props

| Prop name   | Type       | Optional | Default   |  Description                      |
|-------------|------------|----------|-----------|-----------------------------------|
| text       | string     |  No      | None | Text to be rendered on the label |
| expanded  | boolean | Yes | `false` | The spaciousness in the label |
| colorPreset  | string, one of `neutral`, `danger`, `success`, `warning` or `unsaved` | Yes | `neutral` | Determines the colors used indicating the nature of action |
| customColor  | string    | Yes |  None   | A valid CSS color string that overrides the default color presets |
| size       | string, one of `small`, `medium` or `large` | Yes | `medium` | qualitatively represents the physical area occupied on the screen |
| rounded  | boolean | Yes | `false` | Whether the label should have rounded edges |
| outlined  | boolean | Yes | `false` |  Whether the label be outlined |
| focus  | boolean | Yes | `false ` | Label is focussed or being dragge |
| icons    | `[{left: string, right: string}]`  | No | None    |  Icons to be rendered in the label. They can be on left, a right or on both sides of the text |


## Inline Label

```javascript
import { Label } from "KnitUI"

<Label.Inline
  text="label"
/>)
```

### Props

| Prop name   | Type       | Optional | Default   |  Description                      |
|-------------|------------|----------|-----------|-----------------------------------|
| text       | string     |  No      | None |Text to be rendered on the label |
| expanded  | boolean | Yes | `false` | The spaciousness in the label |
| colorPreset  | string, one of `neutral`, `danger`, `success`, `warning` or `unsaved` | Yes | `neutral` | Determines the colors used indicating the nature of action |
| customColor  | string    | Yes |  None   | A valid CSS color string that overrides the default color presets |
| fontSize  | number, n be one of `10,12,14,16,18,20`  | Yes | 12 | Size of text in the label