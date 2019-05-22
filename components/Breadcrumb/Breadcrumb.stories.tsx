import React from "react"
import { storiesOf } from "@storybook/react"
import Breadcrumb from './index';
import BreadcrumbItem from './BreadcrumbItem';

const sep = <span>🐉</span>;

storiesOf("Breadcrumb", module)
  .add("Basic Breadcrumb", () => (
    <Breadcrumb>
      <BreadcrumbItem>Dashboard</BreadcrumbItem>
      <BreadcrumbItem>Reports</BreadcrumbItem>
      <BreadcrumbItem >50467</BreadcrumbItem>
    </Breadcrumb>
  ))
  .add("Breadcrumb with link", () => (
    <Breadcrumb>
      <BreadcrumbItem>Dashboard</BreadcrumbItem>
      <BreadcrumbItem>Reports</BreadcrumbItem>
      <BreadcrumbItem href="/dashboard/reports/50467">50467</BreadcrumbItem>
    </Breadcrumb>
  )).add("Breadcrumb with separator", () => (
    <Breadcrumb separator={sep}>
      <BreadcrumbItem>Dashboard</BreadcrumbItem>
      <BreadcrumbItem>Reports</BreadcrumbItem>
      <BreadcrumbItem href="/dashboard/reports/50467">50467</BreadcrumbItem>
  </Breadcrumb>
  ));
