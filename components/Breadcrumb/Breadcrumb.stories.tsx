import React from "react"
import { storiesOf } from "@storybook/react"
import Breadcrumb from './index'

const sep = <span>🐉</span>;

storiesOf("Breadcrumb", module)
  .add("Basic Breadcrumb", () => (
    <Breadcrumb>
      <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
      <Breadcrumb.Item>Reports</Breadcrumb.Item>
      <Breadcrumb.Item >50467</Breadcrumb.Item>
    </Breadcrumb>
  ))
  .add("Breadcrumb with link", () => (
    <Breadcrumb>
      <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
      <Breadcrumb.Item>Reports</Breadcrumb.Item>
      <Breadcrumb.Item href="/dashboard/reports/50467">50467</Breadcrumb.Item>
    </Breadcrumb>
  )).add("Breadcrumb with separator", () => (
    <Breadcrumb separator={sep}>
      <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
      <Breadcrumb.Item>Reports</Breadcrumb.Item>
      <Breadcrumb.Item href="/dashboard/reports/50467">50467</Breadcrumb.Item>
  </Breadcrumb>
  ));
