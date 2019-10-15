# Modal

Built on [rc-dialog](https://github.com/react-component/dialog)

## Usage

```javascript
import { Modal } from "KnitUI"

const ModalWrapper = () => {
  const [modalVisible, setModalVisible] = useState(true)
  return (
    <Modal
      header={{ leftSection: "Title" }}
      body={<div>Body</div>}
      footer={<div>Footer</div>}
      visible={modalVisible}
      onClose={() => setModalVisible(false)}
    />
  )
}
return <ModalWrapper />
```

### Props

| Prop name      | Type                                                                                                                   | Optional | Default                                              | Description                                                                     |
| -------------- | ---------------------------------------------------------------------------------------------------------------------- | -------- | ---------------------------------------------------- | ------------------------------------------------------------------------------- |
| header         | `{ leftSection: { title: string, fontSize?: fontSizeType } \| ReactNode; rightSection?: ReactNode, noFill?: boolean }` | No       | `{ leftSection: { fontSize: 2rem }, noFill: false }` | Contents to be rendered in the header section                                   |
| body           | ReactNode                                                                                                              | Yes      | None                                                 | Contents to be rendered on in the body section                                  |
| foter          | ReactNode                                                                                                              | Yes      | None                                                 | Contents to be rendered on in the footer section                                |
| padding        | `{ vertical: string; horizontal: string }`                                                                             | Yes      | `{vertical: "2.1rem",horizontal: "2.8rem"}`          | CSS paddings to be used for the contents                                        |
| getContainer   | Function                                                                                                               | Yes      | None                                                 | A function that returns an HTML element under which the modal should be mounted |
| visible        | boolean                                                                                                                | Yes      | `false`                                              | Whether the modal should be visible                                             |
| onClose        | Function                                                                                                               | Yes      | None                                                 | unction to be executed when the modal is dismissed                              |
| panel          | `{ position: "left" \| "right" \| "bottom"; content: ReactNode }`                                                      | Yes      | None                                                 | Addon panel that is attached to the modal                                       |
| destroyOnClose | boolean                                                                                                                | `false`  | to unmount child compenents on onClose               |
| className      | string                                                                                                                 | Yes      | None                                                 | CSS class name to be added                                                      |
| style          | CSS Object                                                                                                             | Yes      | None                                                 | CSS style to be added                                                           |
