import React from "react"
import { storiesOf } from "@storybook/react"
import Breadcrumb from './index';
import BreadcrumbItem from './BreadcrumbItem';


storiesOf("Breadcrumb", module).add("Basic Breadcrumb", () => (
  <Breadcrumb crumbs={['hey', 'lol', 'damn']} />
))
