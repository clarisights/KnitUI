# Modal

Built on [rc-dialog](https://github.com/react-component/dialog)

## Usage

```javascript
import { Modal } from "KnitUI"
const { Header, Body, Footer, Panel } = Modal

const ModalWrapper = () => {
  const [modalVisible, setModalVisible] = useState(true)
  return (
    <Modal
      panel="left"
      visible={modalVisible}
      onClose={() => setModalVisible(false)}>
      <Body>
        <div>Body</div>
      </Body>
      <Footer>
        <div>footer</div>
      </Footer>
      <Panel>
        <div>Panel content</div>
      </Panel>
    </Modal>
  )
}
return <ModalWrapper />
```

### Props

| Prop name      | Type                                                 | Optional | Default                                     | Description                                                                     |
| -------------- | ---------------------------------------------------- | -------- | ------------------------------------------- | ------------------------------------------------------------------------------- |
| padding        | `{ vertical: string; horizontal: string }`           | Yes      | `{vertical: "2.1rem",horizontal: "2.8rem"}` | CSS paddings to be used for the contents                                        |
| getContainer   | Function                                             | Yes      | None                                        | A function that returns an HTML element under which the modal should be mounted |
| visible        | boolean                                              | Yes      | `false`                                     | Whether the modal should be visible                                             |
| onClose        | Function                                             | Yes      | None                                        | unction to be executed when the modal is dismissed                              |
| panel          | `{ position: "left" \| "right" \| "bottom" }`        | Yes      | None                                        | Addon panel that is attached to the modal                                       |
| destroyOnClose | boolean                                              | `false`  | to unmount child components on onClose      |
| className      | string                                               | Yes      | None                                        | CSS class name to be added                                                      |
| style          | CSS Object                                           | Yes      | None                                        | CSS style to be added                                                           |
| size           | `"small" | "medium" | "large" | "x-large" | "fluid"` | Yes      | `"medium"`                                  | width of the modal                                                              |

### Header.Props

| Prop name | Type    | Optional | Default | Description                                                                 |
| --------- | ------- | -------- | ------- | --------------------------------------------------------------------------- |
| noFill    | boolean | Yes      | false   | Does header have background color `Neutral10` or no background color filled |
