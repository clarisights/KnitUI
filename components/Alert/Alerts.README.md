# Alerts API

Alert can be accessible/render by Alert API, you can import alertAPI from `Alerts.tsx`.
The API have only one function `open`.

## Usage

```javascript
import alertAPI as AlertAPI from "./index"

alertAPI.open({
    type="warning",
    size="small",
    content="Hello There, this should the multiline content",
    autoDismiss=true,
    dismissDuration = 3000,
    heading = "This is heading of the multiline alert",
    multiline="true"
})
```

### Parameter of`.open()`

You can pass props value of Alert Component as object, which are mentioned in interface `AlertProps` in Alert.README markdown