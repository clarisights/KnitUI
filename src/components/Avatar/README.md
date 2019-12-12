# Avatar

Avatar are useful to show information of user like user-profile, user-name. (it act as button, so according to usecase, valid to pass onClick or any html button attributes.)

## Usage

```javascript
import { Button } from "KnitUI"

<Avatar
  picture="www.url.com/image.jpg"
  name="username"
  size="30px"
  disabled={false}
  {...anyHtmlButtonProps}
/>)
```

### Props

| Prop name | Type       | Optional | Default     | Description                                                                                                       |
| --------- | ---------- | -------- | ----------- | ----------------------------------------------------------------------------------------------------------------- |
| picture   | string     | Yes      | `undefined` | url of the profile picture or any valid component for react img src attribute                                     |
| name      | string     | Yes      | `undefined` | user name which first letter will be shown, if no picture url is passed or falsy picture value                    |
| size      | string     | Yes      | `24px`      | Physical area occupied on the screen, any css valid length parameter, (resize the font accordingly if only in px) |
| disabled  | boolean    | Yes      | `false`     | Whether the Avatar should be interactive or not                                                                   |
| onClick   | Function   | Yes      | None        | A click handler to be executed on click of the button. Will receive the `event` as an argument                    |
| className | string     | Yes      | None        | CSS class name to be added                                                                                        |
| style     | CSS Object | Yes      | None        | CSS style to be added                                                                                             |
