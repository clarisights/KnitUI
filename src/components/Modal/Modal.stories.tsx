import React, { useState } from "react"
import { storiesOf } from "@storybook/react"
import Modal from "./"
import { withKnobs, select, object } from "@storybook/addon-knobs"
import styled from "styled-components"

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
          header={{ title: "Title" }}
          body={<div>Body</div>}
          footer={<div>Footer</div>}
          size={select("Size", sizeOptions, "medium")}
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
        />
      )
    }
    return <ModalWrapper />
  })
  .add("with a header without a fill", () => {
    const ModalWrapper = () => {
      const [modalVisible, setModalVisible] = useState(true)
      return (
        <Modal
          header={{ title: "Title", noFill: true }}
          body={<div>Body</div>}
          footer={<div>Footer</div>}
          size={select("Size", sizeOptions, "medium")}
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
        />
      )
    }
    return <ModalWrapper />
  })
  .add("with a custom sized header", () => {
    const ModalWrapper = () => {
      const [modalVisible, setModalVisible] = useState(true)
      return (
        <Modal
          header={{ title: "Title", fontSize: 12 }}
          body={<div>Body</div>}
          footer={<div>Footer</div>}
          size={select("Size", sizeOptions, "medium")}
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
        />
      )
    }
    return <ModalWrapper />
  })
  .add("with a right section in header", () => {
    const ModalWrapper = () => {
      const [modalVisible, setModalVisible] = useState(true)
      return (
        <Modal
          header={{
            title: "Title",
            rightSection: (<div>The right section</div>),
          }}
          body={<div>Body</div>}
          footer={<div>Footer</div>}
          size={select("Size", sizeOptions, "medium")}
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
        />
      )
    }
    return <ModalWrapper />
  })
  .add("with overflowing content", () => {
    const ModalWrapper = () => {
      const [modalVisible, setModalVisible] = useState(true)
      return (
        <Modal
          header={{ title: "Overflowing" }}
          body={<div style={{ height: "1000px" }}>Body</div>}
          footer={<div>Footer</div>}
          size={select("Size", sizeOptions, "medium")}
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
        />
      )
    }
    return <ModalWrapper />
  })
  .add("with right panel", () => {
    const ModalWrapper = () => {
      const [modalVisible, setModalVisible] = useState(true)
      return (
        <Modal
          header={{ title: "Right panel modal" }}
          body={<div>Body</div>}
          footer={<div>Footer</div>}
          size={select("Size", sizeOptions, "medium")}
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          panel={{ position: "right", content: <div>Panel content</div> }}
        />
      )
    }
    return <ModalWrapper />
  })
  .add("with a right panel and overflowing panel and body", () => {
    const ModalWrapper = () => {
      const [modalVisible, setModalVisible] = useState(true)
      return (
        <Modal
          header={{ title: "Overflowing" }}
          body={<div style={{ height: "800px" }}>Body</div>}
          footer={<div>Footer</div>}
          size={select("Size", sizeOptions, "medium")}
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          panel={{ position: "right", content: <div style={{ height: "1200px" }}>Panel content</div> }}
        />
      )
    }
    return <ModalWrapper />
  })
  .add("with left panel", () => {
    const ModalWrapper = () => {
      const [modalVisible, setModalVisible] = useState(true)
      return (
        <Modal
          header={{ title: "Left panel content" }}
          body={<div>Body</div>}
          footer={<div>Footer</div>}
          size={select("Size", sizeOptions, "medium")}
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          panel={{ position: "left", content: <div>Panel content</div> }}
        />
      )
    }
    return <ModalWrapper />
  })
  .add("with left panel and overflowing panel and body", () => {
    const ModalWrapper = () => {
      const [modalVisible, setModalVisible] = useState(true)
      return (
        <Modal
          header={{ title: "Overflowing" }}
          body={<div style={{ height: "800px" }}>Body</div>}
          footer={<div>Footer</div>}
          size={select("Size", sizeOptions, "medium")}
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          panel={{ position: "left", content: <div style={{ height: "1200px" }}>Panel content</div> }}
        />
      )
    }
    return <ModalWrapper />
  })
  .add("with a bottom panel", () => {
    const ModalWrapper = () => {
      const [modalVisible, setModalVisible] = useState(true)
      return (
        <Modal
          header={{ title: "Bottom panel modal" }}
          body={<div>Body</div>}
          footer={<div>Footer</div>}
          size={select("Size", sizeOptions, "medium")}
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          panel={{ position: "bottom", content: <div>Panel content</div> }}
        />
      )
    }
    return <ModalWrapper />
  })
  .add("with a bottom panel overflowing body", () => {
    const ModalWrapper = () => {
      const [modalVisible, setModalVisible] = useState(true)
      return (
        <Modal
          header={{ title: "Overflowing" }}
          body={<div style={{ height: "800px" }}>Body</div>}
          footer={<div>Footer</div>}
          size={select("Size", sizeOptions, "medium")}
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          panel={{ position: "bottom", content: <div>Panel content</div> }}
        />
      )
    }
    return <ModalWrapper />
  })
  .add("with custom close button", () => {
    const ModalWrapper = () => {
      const [modalVisible, setModalVisible] = useState(true)
      return (
        <Modal
          header={{ title: "With custom close" }}
          body={<div>Body</div>}
          footer={
            <div>
              <button onClick={() => setModalVisible(false)}>Close</button>
            </div>
          }
          size={select("Size", sizeOptions, "medium")}
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
        />
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
            header={{ title: "Right panel modal" }}
            body={<div>Body</div>}
            footer={<div>Footer</div>}
            size={select("Size", sizeOptions, "medium")}
            visible={modalVisible}
            onClose={() => setModalVisible(false)}
          />
          <button onClick={() => setModalVisible(true)}>Open modal</button>
        </>
      )
    }
    return <ModalWrapper />
  })
  .add("with custom style", () => {
    const ModalWrapper = () => {
      const [modalVisible, setModalVisible] = useState(false)
      return (
        <>
          <Modal
            header={{ title: "Custom style" }}
            body={<div>Body</div>}
            footer={<div>Footer</div>}
            size={select("Size", sizeOptions, "medium")}
            visible={modalVisible}
            onClose={() => setModalVisible(false)}
            style={object("Style", { color: "red" })}
            className="custom-class"
          />
          <button onClick={() => setModalVisible(true)}>Open modal</button>
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
          header={{ title: "Overridden padding" }}
          padding={{ horizontal: "0px", vertical: "0px "}}
          body={<div>Body</div>}
          footer={<div>Footer</div>}
          size={select("Size", sizeOptions, "medium")}
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
        />
      )
    }
    return <ModalWrapper />
  })
