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
| className | string | Yes | None | CSS class name to be added |
| style | CSS Object | Yes | None | CSS style to be added |
| insetColor | string | Yes | None | If provided, will add a small decoration on the label with the given color. Also the background is set to a default which can be changed by `customColor` but not through the `colorPreset` |
| customFontColor | string | Yes | None | Overrides the default font colors |

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
| fontSize  | number, n be one of `10,12,14,16,18,20`  | Yes | 12 | Size of text in the label |
| className | string | Yes | None | CSS class name to be added |
| style | CSS Object | Yes | None | CSS style to be added |
| insetColor | string | Yes | None | If provided, will add a small decoration on the label with the given color. Also the background is set to a default which can be changed by `customColor` but not through the `colorPreset` |
| customFontColor | string | Yes | None | Overrides the default font colors |
