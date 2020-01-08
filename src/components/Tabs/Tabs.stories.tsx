import React, { useState } from "react"
import { storiesOf } from "@storybook/react"
import { Tabs } from "./"
import { withKnobs, select, object } from "@storybook/addon-knobs"
import { Button } from "../"
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
          border: "1px solid lightgray",
          height: "360px",
          width: "800px",
          fontSize: 14,
        }}>
        <Tabs onAddTab={() => console.log("prasooj")}>
          <TabPanel tab="Tab 1" tabKey="tab-1">
            tab 1 content here
          </TabPanel>
          <TabPanel tab="Tab 2" tabKey="tab-2">
            tab 2 content here
          </TabPanel>
          <TabPanel tab="Tab 3" tabKey="tab-3">
            tab 3 content here
          </TabPanel>
          <TabPanel tab="Tab 4" tabKey="tab-4">
            tab 4 content here
          </TabPanel>
          <TabPanel tab="Tab 5" tabKey="tab-5">
            tab 5 content here
          </TabPanel>
          <TabPanel tab="Tab 31" tabKey="tab-31">
            tab 31 content here
          </TabPanel>
          <TabPanel tab="Tab 32" tabKey="tab-312">
            tab 32 content here
          </TabPanel>
          <TabPanel tab="Tab 3f" tabKey="tab-3f">
            tab 3f content here
          </TabPanel>
          <TabPanel tab="Tab f" tabKey="tab-3v">
            tab 3 content here
          </TabPanel>
          <TabPanel tab="Tab g" tabKey="tab-g">
            tab 3 content here
          </TabPanel>
          <TabPanel tab="Tab 12" tabKey="tab-15">
            tab 1 content here
          </TabPanel>
          <TabPanel tab="Tab 22" tabKey="tab-25">
            tab 2 content here
          </TabPanel>
          <TabPanel tab="Tab 32" tabKey="tab-35">
            tab 3 content here
          </TabPanel>
          <TabPanel tab="Tab 42" tabKey="tab-45">
            tab 4 content here
          </TabPanel>
          <TabPanel tab="Tab 52" tabKey="tab-55">
            tab 5 content here
          </TabPanel>
          <TabPanel tab="Tab 12" tabKey="tab-16">
            tab 1 content here
          </TabPanel>
          <TabPanel tab="Tab 22" tabKey="tab-26">
            tab 2 content here
          </TabPanel>
          <TabPanel tab="Tab 32" tabKey="tab-36">
            tab 3 content here
          </TabPanel>
          <TabPanel tab="Tab 42" tabKey="tab-46">
            tab 4 content here
          </TabPanel>
          <TabPanel tab="Tab 52" tabKey="tab-56">
            tab 5 content here
          </TabPanel>
        </Tabs>
      </div>
    )
  })
  .add("Tab Panel with react component", () => {
    return (
      <div
        style={{
          border: "1px solid lightgray",
          height: "360px",
          width: "800px",
          fontSize: 14,
        }}>
        <Tabs onAddTab={() => console.log("prasooj")}>
          <TabPanel
            tab={
              <div style={{ height: "100%", width: "100px", display: "flex" }}>
                tab 1{" "}
                <Button
                  icon="oFilterList"
                  size="small"
                  onClick={() => {
                    alert("Hello")
                  }}
                />
              </div>
            }
            tabKey="tab-1">
            <div>tab 1 content here</div>
          </TabPanel>
          <TabPanel tab="Tab 2" tabKey="tab-2">
            tab 2 content here
          </TabPanel>
          <TabPanel tab="Tab 3" tabKey="tab-3">
            tab 3 content here
          </TabPanel>
          <TabPanel tab="Tab 32" tabKey="tab-35">
            tab 3 content here
          </TabPanel>
          <TabPanel tab="Tab 42" tabKey="tab-45">
            tab 4 content here
          </TabPanel>
          <TabPanel tab="Tab 52" tabKey="tab-55">
            tab 5 content here
          </TabPanel>
          <TabPanel tab="Tab 12" tabKey="tab-16">
            tab 1 content here
          </TabPanel>
          <TabPanel tab="Tab 22" tabKey="tab-26">
            tab 2 content here
          </TabPanel>
          <TabPanel tab="Tab 32" tabKey="tab-36">
            tab 3 content here
          </TabPanel>
          <TabPanel tab="Tab 42" tabKey="tab-46">
            tab 4 content here
          </TabPanel>
          <TabPanel tab="Tab 52" tabKey="tab-56">
            tab 5 content here
          </TabPanel>
        </Tabs>
      </div>
    )
  })
