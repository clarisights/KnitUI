import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, select } from "@storybook/addon-knobs"
import Shimmer from "./index"
const Readme = require("./README.md")

const heightOptions = ["small", "medium", "large"]

storiesOf("Shimmer", module)
  .addDecorator(withKnobs)
  .addParameters({
    readme: {
      // Show readme before story
      codeTheme: "shades-of-purple",
      // Show readme at the addons panel
      sidebar: Readme,
    },
  })
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
        animationOverrides={{
          animationDelay: "0ms",
        }}
        height={select("Size", heightOptions, "medium")}
      />
      <Shimmer
        style={{
          opacity: 0.75,
          margin: "14px 0",
        }}
        animationOverrides={{
          animationDelay: "50ms",
        }}
        height={select("Size", heightOptions, "medium")}
      />{" "}
      <Shimmer
        style={{
          opacity: 0.5,
          margin: "14px 0",
        }}
        animationOverrides={{
          animationDelay: "100ms",
        }}
        height={select("Size", heightOptions, "medium")}
      />{" "}
      <Shimmer
        style={{
          opacity: 0.25,
          margin: "14px 0",
        }}
        animationOverrides={{
          animationDelay: "150ms",
        }}
        height={select("Size", heightOptions, "medium")}
      />
    </div>
  ))
