# Label

## Usage

```javascript
import { Label } from "components"

<Label
  text="label"
/>)
```

### Props

| Prop name   | Type       | Default   |  Description                      |
|-------------|------------|-----------|-----------------------------------|
| text       | string     | None      | Text to be rendered on the label |
| expanded  | boolean | `false` | The spaciousness in the label |
| colorPreset  | A predefined preset, i.e one of `neutral`, `danger`, `success`, `warning` or `unsaved` | `neutral` | Determines the colors used indicating the nature of action |
| customColor  | string    |  None   | A valid CSS color string that overrides the default color presets |
| size       | string, one of `small`, `medium` or `large` | `medium` | qualitatively represents the physical area occupied on the screen |
| rounded  | boolean | `false` | Whether the label should have rounded edges |
| outlined  | boolean | `false` |  Whether the label be outlined |
| focus  | boolean | `false ` | Whether the label should be focused (typically used for highlighting or when dragging) |
| icons    | `[{left: string, right: string}]`  | None    |  icons to be rendered in the label. They can be on left, a right or on both sides of the text |


## Inline Label

```javascript
import { Label } from "components"

<Label.Inline
  text="label"
/>)
```

### Props

| Prop name   | Type       | Default   |  Description                      |
|-------------|------------|-----------|-----------------------------------|
| text       | string     | None      | Text to be rendered on the label |
| expanded  | boolean | `false` | The spaciousness in the label |
| colorPreset  | A predefined preset, i.e one of `neutral`, `danger`, `success`, `warning` or `unsaved` | `neutral` | Determines the colors used indicating the nature of action |
| customColor  | string    |  None   | A valid CSS color string that overrides the default color presets |
| fontSize  | number, n be one of `10,12,14,16,18,20`  | 12 | Size of text in the label