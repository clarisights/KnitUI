<!-- STORY -->

# OmniSearch

### Usage

```javascript
import { OmniSearch } from "KnitUI"

const OmniSearchWrapper = () => {
  const [visible, setVisible] = useState(true)
  const data = ["List Item 1", "List Item 2", "List Item 3"]
  const [value, setValue] = useState("")
  const [filteredData, setFilteredData] = useState(data)

  const ListItems = filteredData.map(item => <ListItem>{item}</ListItem>)
  return (
    <div>
      <Container
        style={{
          marginBottom: 20,
          padding: 20,
        }}>
        <div
          onClick={() => {
            setVisible(true)
          }}>
          <Button label={"Spotlight"} />
        </div>
        <OmniSearch
          visible={visible}
          value={value}
          onChange={event => {
            const value = event.target.value
            const filteredData = data.filter(item => item.includes(value))
            setValue(value)
            setFilteredData(filteredData)
          }}
          onClose={() => {
            setVisible(!visible)
          }}
          dropdown={ListItems}></OmniSearch>
      </Container>
    </div>
  )
}
```

### Props

| Prop name | Type      | Optional | Default | Description                                        |
| --------- | --------- | -------- | ------- | -------------------------------------------------- |
| visible   | boolean   | No       | None    | Toggles the visibility of the spotlight OmniSearch |
| value     | string    | No       | None    | This is a value of the input                       |
| onChange  | function  | No       | None    | The onChange function supplied to controlled input |
| onClose   | function  | No       | None    | Fires when the spotlight dialog is being closed    |
| dropdown  | ReactNode | Yes      | None    | content to be shown in the list                    |

**Note: Default HTML attributes of the input element are supported.**
