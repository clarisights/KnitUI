import React, { useState } from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, select } from "@storybook/addon-knobs"
import { Trigger } from "."

const heightOptions = ["small", "medium", "large"]

storiesOf("Trigger", module)
  .addDecorator(withKnobs)
  .add("basic target render", () => (
    <div
      style={{
        width: 420,
      }}>
      <Trigger
        overlay={
          <div
            style={{
              width: 200,
              height: 200,
              background: "yellow",
            }}>
            hello
          </div>
        }>
        <button>hello</button>
      </Trigger>
    </div>
  ))
  .add("position based render", () =>
    React.createElement(() => {
      const [position, setPosition] = useState({})
      const [visible, onVisibleChange] = useState(false)
      const handleClick = e => {
        const { target } = e
        const rect = target.getBoundingClientRect()
        setPosition({
          top: rect.top,
          left: rect.left,
          width: rect.width,
          height: rect.height,
        })
        onVisibleChange(!visible)
      }
      console.log(visible, position)
      return (
        <div
          style={{
            width: 420,
          }}>
          <Trigger
            visible={visible}
            onVisibleChange={onVisibleChange}
            position={position}
            overlay={
              <div
                style={{
                  width: 200,
                  height: 200,
                  background: "yellow",
                }}>
                hello
              </div>
            }
          />
          <button onClick={handleClick}>hello</button>
        </div>
      )
    })
  )
  .add("basic target render with scroll block", () => (
    <div
      style={{
        width: 600,
        height: 400,
        border: "2px dashed blue",
        overflow: "auto",
      }}>
      <div
        style={{
          width: 420,
          height: 1200,
          border: "4px solid red",
          padding: 12,
        }}>
        <Trigger
          overlay={
            <div
              style={{
                background: "yellow",
                width: 200,
                height: 200,
                overflow: "auto",
              }}>
              <div
                style={{
                  height: 800,
                }}>
                hello
              </div>
            </div>
          }>
          <button>hello</button>
        </Trigger>
      </div>
    </div>
  ))
