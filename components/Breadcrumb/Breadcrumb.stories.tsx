import React from "react"
import { storiesOf } from "@storybook/react"
import Breadcrumb from './index'

const sep = <span>🐉</span>;
const customStyle = {
  fontSize: '4rem',
  border: '2px solid red'
}

const customItemStyle = {
  border: '2px solid red'
}

storiesOf("Breadcrumb", module)
  .add("Basic Breadcrumb", () => (
    <Breadcrumb>
      <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
      <Breadcrumb.Item>Reports</Breadcrumb.Item>
      <Breadcrumb.Item>50467</Breadcrumb.Item>
    </Breadcrumb>
  ))
  .add("Breadcrumb with link", () => (
    <Breadcrumb>
      <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
      <Breadcrumb.Item>Reports</Breadcrumb.Item>
      <Breadcrumb.Item>
        <a href="/dashboard/reports/50467">50467</a>
      </Breadcrumb.Item>
    </Breadcrumb>
  ))
  .add("Breadcrumb with separator", () => (
    <Breadcrumb separator={sep}>
      <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
      <Breadcrumb.Item>Reports</Breadcrumb.Item>
      <Breadcrumb.Item href="/dashboard/reports/50467">50467</Breadcrumb.Item>
    </Breadcrumb>
  ))
  .add("Breadcrumb with custom styles", () => (
    <Breadcrumb style={customStyle}>
      <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
      <Breadcrumb.Item>Reports</Breadcrumb.Item>
      <Breadcrumb.Item href="/dashboard/reports/50467">50467</Breadcrumb.Item>
    </Breadcrumb>
  ))
  .add("Breadcrumb with custom styles on item", () => (
    <Breadcrumb>
      <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
      <Breadcrumb.Item style={customItemStyle}>Reports</Breadcrumb.Item>
      <Breadcrumb.Item href="/dashboard/reports/50467">50467</Breadcrumb.Item>
    </Breadcrumb>
  ))
  .add("Breadcrumb with no childs", () => <Breadcrumb />)
  .add("Breadcrumb with single child", () => (
    <Breadcrumb>
      <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
    </Breadcrumb>
  ))
  .add("Breadcrumb with too many childs", () => (
    <Breadcrumb>
      <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
      <Breadcrumb.Item>Reports</Breadcrumb.Item>
      <Breadcrumb.Item href="/dashboard/reports/50467">50467</Breadcrumb.Item>
      <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
      <Breadcrumb.Item>Reports</Breadcrumb.Item>
      <Breadcrumb.Item href="/dashboard/reports/50467">50467</Breadcrumb.Item>
      <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
      <Breadcrumb.Item>Reports</Breadcrumb.Item>
      <Breadcrumb.Item href="/dashboard/reports/50467">50467</Breadcrumb.Item>
      <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
      <Breadcrumb.Item>Reports</Breadcrumb.Item>
      <Breadcrumb.Item href="/dashboard/reports/50467">50467</Breadcrumb.Item>
      <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
      <Breadcrumb.Item>Reports</Breadcrumb.Item>
      <Breadcrumb.Item href="/dashboard/reports/50467">50467</Breadcrumb.Item>
      <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
      <Breadcrumb.Item>Reports</Breadcrumb.Item>
      <Breadcrumb.Item href="/dashboard/reports/50467">50467</Breadcrumb.Item>
    </Breadcrumb>
  ));
