import React, { useState } from "react"
import { storiesOf } from "@storybook/react"
import Modal, { Body, Footer, Header } from "./"
import { withKnobs, select, object } from "@storybook/addon-knobs"
import { Panel } from "./wrappers/Panel"

const Readme = require("./README.md")

const stories = storiesOf("Modal", module)
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
  .add("basic", () => {
    const ModalWrapper = () => {
      const [modalVisible, setModalVisible] = useState(true)
      return (
        <Modal
          size={select("Size", sizeOptions, "medium")}
          visible={modalVisible}
          onClose={() => setModalVisible(false)}>
          <Header>
            <div>hello</div>
          </Header>
          <Body>
            <div>Body</div>
          </Body>
          <Footer>
            <div>footer</div>
          </Footer>
        </Modal>
      )
    }
    return <ModalWrapper />
  })
  .add("with right panel", () => {
    const ModalWrapper = () => {
      const [modalVisible, setModalVisible] = useState(true)
      return (
        <Modal
          size={select("Size", sizeOptions, "medium")}
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          panel="right">
          <Header>header</Header>
          <Body>body</Body>
          <Footer>footer</Footer>
          <Panel>Panel Content</Panel>
        </Modal>
      )
    }
    return <ModalWrapper />
  })
  .add("with a right panel and overflowing panel and body", () => {
    const ModalWrapper = () => {
      const [modalVisible, setModalVisible] = useState(true)
      return (
        <Modal
          size={select("Size", sizeOptions, "medium")}
          visible={modalVisible}
          panel="right"
          onClose={() => setModalVisible(false)}>
          <Header>header</Header>
          <Body>
            <div style={{ height: "800px" }}>Body</div>
          </Body>
          <Footer>
            <div>footer</div>
          </Footer>
          <Panel>
            <div style={{ height: "1200px" }}>Panel content</div>
          </Panel>
        </Modal>
      )
    }
    return <ModalWrapper />
  })
  .add("with left panel", () => {
    const ModalWrapper = () => {
      const [modalVisible, setModalVisible] = useState(true)
      return (
        <Modal
          size={select("Size", sizeOptions, "medium")}
          visible={modalVisible}
          panel="left"
          onClose={() => setModalVisible(false)}>
          <Header>header</Header>
          <Body>
            <div style={{ height: "800px" }}>Body</div>
          </Body>
          <Footer>
            <div>footer</div>
          </Footer>
          <Panel>
            <div style={{ height: "1200px" }}>Panel content</div>
          </Panel>
        </Modal>
      )
    }
    return <ModalWrapper />
  })
  .add("with a bottom panel", () => {
    const ModalWrapper = () => {
      const [modalVisible, setModalVisible] = useState(true)
      return (
        <Modal
          size={select("Size", sizeOptions, "medium")}
          visible={modalVisible}
          panel="bottom"
          onClose={() => setModalVisible(false)}>
          <Header>Bottom panel modal</Header>
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
  })
  .add("with custom close button", () => {
    const ModalWrapper = () => {
      const [modalVisible, setModalVisible] = useState(true)
      return (
        <Modal
          size={select("Size", sizeOptions, "medium")}
          visible={modalVisible}
          onClose={() => setModalVisible(false)}>
          <Header>With custom close</Header>
          <Body>
            <div>Body</div>
          </Body>
          <Footer>
            <div>
              <button onClick={() => setModalVisible(false)}>Close</button>
            </div>
          </Footer>
        </Modal>
      )
    }
    return <ModalWrapper />
  })
  .add("with a button for openning the modal", () => {
    const ModalWrapper = () => {
      const [modalVisible, setModalVisible] = useState(false)
      return (
        <>
          <Modal
            size={select("Size", sizeOptions, "medium")}
            visible={modalVisible}
            onClose={() => setModalVisible(false)}>
            <Header>Open using button</Header>
            <Body>
              <div>Body</div>
            </Body>
            <Footer>
              <div>
                <button onClick={() => setModalVisible(false)}>Close</button>
              </div>
            </Footer>
          </Modal>
          <button onClick={() => setModalVisible(true)}>Open modal</button>
        </>
      )
    }
    return <ModalWrapper />
  })
  .add("with custom style", () => {
    const ModalWrapper = () => {
      const [modalVisible, setModalVisible] = useState(true)
      return (
        <>
          <Modal
            size={select("Size", sizeOptions, "medium")}
            visible={modalVisible}
            onClose={() => setModalVisible(false)}
            style={object("Style", { color: "red" })}
            className="custom-class">
            <Header>Custom style</Header>
            <Body>
              <div>Body</div>
            </Body>
            <Footer>
              <div>footer</div>
            </Footer>
          </Modal>
        </>
      )
    }
    return <ModalWrapper />
  })
  .add("with overriden padding", () => {
    const ModalWrapper = () => {
      const [modalVisible, setModalVisible] = useState(true)
      return (
        <Modal
          padding={{ horizontal: "0px", vertical: "0px " }}
          size={select("Size", sizeOptions, "medium")}
          visible={modalVisible}
          onClose={() => setModalVisible(false)}>
          <Header>Overridden padding</Header>
          <Body>
            <div>Body</div>
          </Body>
          <Footer>
            <div>footer</div>
          </Footer>
        </Modal>
      )
    }
    return <ModalWrapper />
  })
