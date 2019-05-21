import React from "react";
import { storiesOf } from "@storybook/react";
import { Switch } from "./index";

storiesOf("Switch", module)
  .add("Basic switch", () => <Switch />)
  .add("Small switch with default checked", () => (
    <Switch size="small" defaultChecked />
  ))
  .add("Default Switch with disabled", () => <Switch disabled />)
  .add("Default Switch with children", () => (
    <Switch checkedChildren="1" unCheckedChildren="0" />
  ))
  .add("Small Switch with children", () => (
    <Switch size="small" checkedChildren="1" unCheckedChildren="0" />
  ));
