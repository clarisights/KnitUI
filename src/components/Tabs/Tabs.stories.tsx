import React, { useState } from "react"
import { storiesOf } from "@storybook/react"
import { Tabs } from "./"
import { withKnobs, select, object } from "@storybook/addon-knobs"

const Readme = require("./README.md")

const stories = storiesOf("Tabs", module)
stories.addDecorator(withKnobs)

const sizeOptions = ["small", "medium", "large", "x-large"]

const { TabPanel } = Tabs

stories
  .addParameters({
    readme: {
      // Show readme before story
      codeTheme: "shades-of-purple",
      // Show readme at the addons panel
      sidebar: Readme,
    },
  })
  .add("basic", () => {
    return (
      <div
        style={{
          padding: "12px",
          border: "1px solid lightgray",
          height: "360px",
          width: "800px",
          fontSize: 14,
        }}>
        <Tabs>
          <TabPanel tab="Tab 1" tabKey="tab-1">
            tab 1 content here
          </TabPanel>
          <TabPanel tab="Tab 2" tabKey="tab-2">
            tab 2 content here
          </TabPanel>
          <TabPanel tab="Tab 3" tabKey="tab-3">
            tab 3 content here
          </TabPanel>
        </Tabs>
      </div>
    )
  })
