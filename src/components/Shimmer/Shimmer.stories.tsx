import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, select } from "@storybook/addon-knobs"
import Shimmer from "./index"

const heightOptions = ["small", "medium", "large"]

storiesOf("Shimmer", module)
  .addDecorator(withKnobs)
  .add("basic", () => (
    <div
      style={{
        width: 420,
      }}>
      <Shimmer height={select("Size", heightOptions, "medium")} />
    </div>
  ))
  .add("multiple shimmers", () => (
    <div
      style={{
        width: 420,
      }}>
      <Shimmer
        style={{
          opacity: 1,
          margin: "14px 0",
        }}
        height={select("Size", heightOptions, "medium")}
      />
      <Shimmer
        style={{
          opacity: 0.75,
          margin: "14px 0",
        }}
        height={select("Size", heightOptions, "medium")}
      />{" "}
      <Shimmer
        style={{
          opacity: 0.5,
          margin: "14px 0",
        }}
        height={select("Size", heightOptions, "medium")}
      />{" "}
      <Shimmer
        style={{
          opacity: 0.25,
          margin: "14px 0",
        }}
        height={select("Size", heightOptions, "medium")}
      />
    </div>
  ))
