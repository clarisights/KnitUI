import React, { useState } from "react"
import { storiesOf } from "@storybook/react"
import { Modal } from "./index"
import { withKnobs, select } from '@storybook/addon-knobs'

const Readme = require("./README.md")

const stories = storiesOf('Modal', module)
stories.addDecorator(withKnobs)

const sizeOptions = ["small", "medium", "large", "x-large"]

stories
  .addParameters({
    readme: {
      // Show readme before story
      codeTheme: "shades-of-purple",
      // Show readme at the addons panel
      sidebar: Readme,
    },
  })
  .add("simple modal", () => {
    const ModalWrapper = () => {
      const [ modalVisible, setModalVisible ] = useState(true)
      return (<Modal
        header={{title: "Title"}}
        body={<div>Body</div>}
        footer={<div>Footer</div>}
        size={select('Size', sizeOptions, "medium")}
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />)
    }
    return (<ModalWrapper />)
  })
  .add("with a right section in header", () => {
    const ModalWrapper = () => {
      const [ modalVisible, setModalVisible ] = useState(true)
      return (<Modal
        header={{
          title: "Title",
          rightSection:
            <div>
              <div>The right section</div>
            </div>
          }}
        body={<div>Body</div>}
        footer={<div>Footer</div>}
        size={select('Size', sizeOptions, "medium")}
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />)
    }
    return (<ModalWrapper />)
  })
  .add("with right panel", () => {
    const ModalWrapper = () => {
      const [ modalVisible, setModalVisible ] = useState(true)
      return (<Modal
        header={{title: "Right panel modal"}}
        body={<div>Body</div>}
        footer={<div>Footer</div>}
        size={select('Size', sizeOptions, "medium")}
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        panel={{ position: "right", content: <div>Panel content</div>}}
      />)
    }
    return (<ModalWrapper />)
  })
  .add("with left panel", () => {
    const ModalWrapper = () => {
      const [ modalVisible, setModalVisible ] = useState(true)
      return (<Modal
        header={{title: "Left panel content"}}
        body={<div>Body</div>}
        footer={<div>Footer</div>}
        size={select('Size', sizeOptions, "medium")}
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        panel={{ position: "left", content: <div>Panel content</div>}}
      />)
    }
    return (<ModalWrapper />)
  })
  .add("with bottom panel", () => {
    const ModalWrapper = () => {
      const [ modalVisible, setModalVisible ] = useState(true)
      return (<Modal
        header={{title: "Bottom panel modal"}}
        body={<div>Body</div>}
        footer={<div>Footer</div>}
        size={select('Size', sizeOptions, "medium")}
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        panel={{ position: "bottom", content: <div>Panel content</div>}}
      />)
    }
    return (<ModalWrapper />)
  })
  .add("with overflowing content", () => {
    const ModalWrapper = () => {
      const [ modalVisible, setModalVisible ] = useState(true)
      return (<Modal
        header={{title: "Right panel modal"}}
        body={<div style={{height: "1000px"}}>Body</div>}
        footer={<div>Footer</div>}
        size={select('Size', sizeOptions, "medium")}
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />)
    }
    return (<ModalWrapper />)
  })
  .add("with custom close button", () => {
    const ModalWrapper = () => {
      const [ modalVisible, setModalVisible ] = useState(true)
      return (<Modal
        header={{title: "Right panel modal"}}
        body={<div style={{height: "1000px"}}>Body</div>}
        footer={<div><button onClick={() => setModalVisible(false)}>Close</button></div>}
        size={select('Size', sizeOptions, "medium")}
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />)
    }
    return (<ModalWrapper />)
  })
  .add("with a button for openning the modal", () => {
    const ModalWrapper = () => {
      const [ modalVisible, setModalVisible ] = useState(false)
      return (
        <>
          <Modal
            header={{title: "Right panel modal"}}
            body={<div style={{height: "1000px"}}>Body</div>}
            footer={<div>Footer</div>}
            size={select('Size', sizeOptions, "medium")}
            visible={modalVisible}
            onClose={() => setModalVisible(false)}
          />
          <button onClick={() => setModalVisible(true)}>Open modal</button>
        </>
      )
    }
    return (<ModalWrapper />)
  })
