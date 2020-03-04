# Option

## Usage

```javascript
import { Option } from "KnitUI"

// render
return (
  <Option.Group title="SOME ITEMS">
    <Option onClick={(e, val) => alert(val)} value="Option 1">
      {/* Give an align prop to to set position, same API as Icon component otherwise */}
      <Option.Icon type="oClose" align="right" />
      {/* Add a description prop to text to add additional context */}
      <Option.Text description="Option Description">Option 1</Option.Text>
    </Option>
    <Option onClick={(e, val) => alert(val)} value="Option 2">
      {/* Same API as the Avatar component */}
      <Option.Avatar name="anshuman-kun" />
      <Option.Text description="Option Description">Option 2</Option.Text>
    </Option>
    <Option value="Option 3" selected>
      <Option.Text description="Option Description">Option 3</Option.Text>
      <Option.Tag text="Aa" align="right" />
    </Option>
  </Option.Group>
)

// If you don't pass any children to option then it will render Option.Text with the option value as text
```

# SubComponents

```js
// Same API as the original components
```

- Option.Icon
- Option.Avatar
- Option.Tag
- Option.Text
- Option.Group

### Option Props

| Prop name | Type           | Optional | Default | Description                                         |
| --------- | -------------- | -------- | ------- | --------------------------------------------------- |
| disabled  | boolean        | Yes      | `false` | Disable an option                                   |
| selected  | boolean        | Yes      | `false` | Mark an option as selected                          |
| onClick   | function       | Yes      | None    | Gives the event and option value in the parameters  |
| style     | CSSStyleObject | Yes      | None    | A style object to override default styled of option |
| className | string         | Yes      | None    | CSS class name to be added                          |

### Option.Group Props

| Prop name | Type      | Optional | Default                        | Description                |
| --------- | --------- | -------- | ------------------------------ | -------------------------- |
| title     | string    | Yes      | `` | Title of the option group |
| children  | ReactNode | Yes      | null                           | Options to render as child |

### Option.Text Props

| Prop name   | Type                | Optional | Default                               | Description                                           |
| ----------- | ------------------- | -------- | ------------------------------------- | ----------------------------------------------------- |
| description | string              | Yes      | `` | Add a description to option text |
| children    | string \| ReactNode | No       | null                                  | Option text or ReactNode to render as child of option |
