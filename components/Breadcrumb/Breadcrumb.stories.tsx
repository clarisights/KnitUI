import React from "react"
import { storiesOf } from "@storybook/react"
import Breadcrumb from "./index"
import { Icon } from "../Icon"

const sep = <span>🐉</span>
const customStyle = {
  border: "2px solid red",
}

const customItemStyle = {
  color: "black",
  border: "2px solid red",
}

const customActiveStyle = {
  textDecoration: "underline",
  color: "blue",
}

storiesOf("Breadcrumb", module)
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
    <Breadcrumb separator={sep}>
      <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
      <Breadcrumb.Item>Reports</Breadcrumb.Item>
      <Breadcrumb.Item>50467</Breadcrumb.Item>
    </Breadcrumb>
  ))
  .add("With custom parent styles", () => (
    <Breadcrumb style={customStyle}>
      <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
      <Breadcrumb.Item>Reports</Breadcrumb.Item>
      <Breadcrumb.Item>50467</Breadcrumb.Item>
    </Breadcrumb>
  ))
  .add("With custom styles on item", () => (
    <Breadcrumb>
      <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
      <Breadcrumb.Item style={customItemStyle}>Reports</Breadcrumb.Item>
      <Breadcrumb.Item>50467</Breadcrumb.Item>
    </Breadcrumb>
  ))
  .add("With custom styles on active item", () => (
    <Breadcrumb activeStyles={customActiveStyle}>
      <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
      <Breadcrumb.Item>Reports</Breadcrumb.Item>
      <Breadcrumb.Item>50467</Breadcrumb.Item>
    </Breadcrumb>
  ))
  .add("With icon", () => (
    <Breadcrumb>
      <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
      <Breadcrumb.Item>
        <Icon height="18px" width="18px" type="oAddCircle" />
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
    <Breadcrumb truncateTo={2}>
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
