import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, text, number, object } from "@storybook/addon-knobs"
import Breadcrumb from "./index"
import Icon from "../Icon"
const Readme = require("./Breadcrumb.README.md")

const stories = storiesOf("Breadcrumb", module)
stories.addDecorator(withKnobs)

const customStyle = {
  border: "2px solid red",
}

const customItemStyle = {
  color: "black",
  border: "2px solid red",
}

const customActiveStyle = {
  textDecoration: "underline",
  color: "#0F74BD",
}

const customChildStyle = {
  fontSize: "1.8rem",
}

stories
  .addParameters({
    readme: {
      // Show readme before story
      codeTheme: "shades-of-purple",
      // Show readme at the addons panel
      sidebar: Readme,
    },
  })
  .add("Basic", () => (
    <Breadcrumb>
      <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
      <Breadcrumb.Item>Reports</Breadcrumb.Item>
      <Breadcrumb.Item>50467</Breadcrumb.Item>
    </Breadcrumb>
  ))
  .add("With link tag", () => (
    <Breadcrumb>
      <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
      <Breadcrumb.Item>Reports</Breadcrumb.Item>
      <Breadcrumb.Item>
        <a href="/dashboard/reports/50467">50467</a>
      </Breadcrumb.Item>
    </Breadcrumb>
  ))
  .add("With custom separator", () => (
    <Breadcrumb separator={text("Separator", "🐉")}>
      <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
      <Breadcrumb.Item>Reports</Breadcrumb.Item>
      <Breadcrumb.Item>50467</Breadcrumb.Item>
    </Breadcrumb>
  ))
  .add("With custom parent styles", () => (
    <Breadcrumb rootStyle={object("Parent Style", customStyle)}>
      <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
      <Breadcrumb.Item>Reports</Breadcrumb.Item>
      <Breadcrumb.Item>50467</Breadcrumb.Item>
    </Breadcrumb>
  ))
  .add("With custom child styles", () => (
    <Breadcrumb childStyle={object("Child Style", customChildStyle)}>
      <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
      <Breadcrumb.Item>Reports</Breadcrumb.Item>
      <Breadcrumb.Item>50467</Breadcrumb.Item>
    </Breadcrumb>
  ))
  .add("With custom styles on item", () => (
    <Breadcrumb>
      <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
      <Breadcrumb.Item style={object("Item Style", customItemStyle)}>
        Reports
      </Breadcrumb.Item>
      <Breadcrumb.Item>50467</Breadcrumb.Item>
    </Breadcrumb>
  ))
  .add("With custom styles on active item", () => (
    <Breadcrumb activeStyles={object("Active Item Style", customActiveStyle)}>
      <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
      <Breadcrumb.Item>Reports</Breadcrumb.Item>
      <Breadcrumb.Item>50467</Breadcrumb.Item>
    </Breadcrumb>
  ))
  .add("With icon", () => (
    <Breadcrumb>
      <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
      <Breadcrumb.Item>
        <Icon size="18px" type={text("Icon", "oAddCircle")} />
        Reports
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <a href="/dashboard/reports/50467">50467</a>
      </Breadcrumb.Item>
    </Breadcrumb>
  ))
  .add("With no childs", () => <Breadcrumb />)
  .add("With single child", () => (
    <Breadcrumb>
      <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
    </Breadcrumb>
  ))
  .add("With too many childs", () => (
    <Breadcrumb>
      <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
      <Breadcrumb.Item>Reports</Breadcrumb.Item>
      <Breadcrumb.Item>50467</Breadcrumb.Item>
      <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
      <Breadcrumb.Item>Reports</Breadcrumb.Item>
      <Breadcrumb.Item>50467</Breadcrumb.Item>
      <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
      <Breadcrumb.Item>Reports</Breadcrumb.Item>
      <Breadcrumb.Item>50467</Breadcrumb.Item>
      <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
      <Breadcrumb.Item>Reports</Breadcrumb.Item>
      <Breadcrumb.Item>50467</Breadcrumb.Item>
      <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
      <Breadcrumb.Item>Reports</Breadcrumb.Item>
      <Breadcrumb.Item>50467</Breadcrumb.Item>
      <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
      <Breadcrumb.Item>Reports</Breadcrumb.Item>
      <Breadcrumb.Item>50467</Breadcrumb.Item>
    </Breadcrumb>
  ))
  .add("With max width", () => (
    <Breadcrumb maxWidth="200px">
      <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
      <Breadcrumb.Item>Reports</Breadcrumb.Item>
      <Breadcrumb.Item>50467</Breadcrumb.Item>
      <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
      <Breadcrumb.Item>Reports</Breadcrumb.Item>
      <Breadcrumb.Item>50467</Breadcrumb.Item>
      <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
      <Breadcrumb.Item>Reports</Breadcrumb.Item>
      <Breadcrumb.Item>50467</Breadcrumb.Item>
      <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
      <Breadcrumb.Item>Reports</Breadcrumb.Item>
      <Breadcrumb.Item>50467</Breadcrumb.Item>
      <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
      <Breadcrumb.Item>Reports</Breadcrumb.Item>
      <Breadcrumb.Item>50467</Breadcrumb.Item>
      <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
      <Breadcrumb.Item>Reports</Breadcrumb.Item>
      <Breadcrumb.Item>50467</Breadcrumb.Item>
    </Breadcrumb>
  ))
  .add("Breadcrumb with truncated state", () => (
    <Breadcrumb truncateTo={number("Truncate To", 2)}>
      <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
      <Breadcrumb.Item>Reports</Breadcrumb.Item>
      <Breadcrumb.Item>50467</Breadcrumb.Item>
      <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
      <Breadcrumb.Item>Reports</Breadcrumb.Item>
      <Breadcrumb.Item>50467</Breadcrumb.Item>
      <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
      <Breadcrumb.Item>Reports</Breadcrumb.Item>
      <Breadcrumb.Item>50467</Breadcrumb.Item>
      <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
      <Breadcrumb.Item>Reports</Breadcrumb.Item>
      <Breadcrumb.Item>50467</Breadcrumb.Item>
    </Breadcrumb>
  ))
