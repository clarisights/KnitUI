import React from "react"
import { storiesOf } from "@storybook/react"
import { Tabs, Button } from "../"
import { withKnobs } from "@storybook/addon-knobs"
const Readme = require("./README.md")

const stories = storiesOf("Tabs", module)
stories.addDecorator(withKnobs)

const sizeOptions = ["small", "medium", "large", "x-large"]

const { TabPanel } = Tabs

const TabPanels = [
  <TabPanel tab="Tab 1" tabKey="tab-1">
    tab 1 content here
  </TabPanel>,
  <TabPanel tab="Tab 2" tabKey="tab-2">
    tab 2 content here
  </TabPanel>,
  <TabPanel tab="Tab 3" tabKey="tab-3">
    tab 3 content here
  </TabPanel>,
  <TabPanel tab="Tab 4" tabKey="tab-4">
    tab 4 content here
  </TabPanel>,
  <TabPanel tab="Tab 5" tabKey="tab-5">
    tab 5 content here
  </TabPanel>,
  <TabPanel tab="Tab 6" tabKey="tab-6">
    tab 6 content here
  </TabPanel>,
  <TabPanel tab="Tab 7" tabKey="tab-7">
    tab 7 content here
  </TabPanel>,
  <TabPanel tab="Tab 8" tabKey="tab-8">
    tab 8 content here
  </TabPanel>,
  <TabPanel tab="Tab 9" tabKey="tab-9">
    tab 9 content here
  </TabPanel>,
  <TabPanel tab="Tab 10" tabKey="tab-10">
    tab 10 content here
  </TabPanel>,
  <TabPanel tab="Tab 11" tabKey="tab-11">
    tab 11 content here
  </TabPanel>,
  <TabPanel tab="Tab 12" tabKey="tab-12">
    tab 12 content here
  </TabPanel>,
  <TabPanel tab="Tab 13" tabKey="tab-13">
    tab 13 content here
  </TabPanel>,
  <TabPanel tab="Tab 14" tabKey="tab-14">
    tab 14 content here
  </TabPanel>,
  <TabPanel tab="Tab 15" tabKey="tab-15">
    tab 15 content here
  </TabPanel>,
  <TabPanel tab="Tab 16" tabKey="tab-16">
    tab 16 content here
  </TabPanel>,
  <TabPanel tab="Tab 17" tabKey="tab-17">
    tab 17 content here
  </TabPanel>,
  <TabPanel tab="Tab 18" tabKey="tab-18">
    tab 18 content here
  </TabPanel>,
  <TabPanel tab="Tab 19" tabKey="tab-19">
    tab 19 content here
  </TabPanel>,
  <TabPanel tab="Tab 20" tabKey="tab-20">
    tab 20 content here
  </TabPanel>,
]

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
      <div>
        <div
          style={{
            border: "1px solid lightgray",
            height: "360px",
            width: "100%",
            fontSize: 14,
            marginBottom: 20,
            padding: 20,
          }}>
          <Tabs onAddTab={() => alert("callback for create add")}>
            {TabPanels}
          </Tabs>
        </div>
        <div
          style={{
            border: "1px solid lightgray",
            height: "360px",
            width: "100%",
            fontSize: 14,
          }}>
          <Tabs onAddTab={() => alert("callback for create add")}>
            {TabPanels.slice(0, 8)}
          </Tabs>
        </div>
      </div>
    )
  })
  .add("Tab Panel hideTabContent", () => {
    return (
      <div
        style={{
          border: "1px solid lightgray",
          height: "360px",
          width: "800px",
          fontSize: 14,
        }}>
        <Tabs onAddTab={() => alert("callback for create add")} hideTabContent>
          {TabPanels.slice(0, 12)}
        </Tabs>
      </div>
    )
  })
  .add("Tab Panel with react component", () => (
    <div
      style={{
        border: "1px solid lightgray",
        height: "360px",
        width: "800px",
        fontSize: 14,
      }}>
      <Tabs onAddTab={() => alert("callback for create add")}>
        <TabPanel
          tab={
            <div style={{ height: "100%", width: "100px", display: "flex" }}>
              tab 1{" "}
              <Button
                icon="oFilterList"
                size="small"
                onClick={() => {
                  alert("Clicked on inside button")
                }}
              />
            </div>
          }
          tabKey="tab-1">
          <div>tab 1 content here</div>
        </TabPanel>
        {TabPanels.slice(1, 10)}
      </Tabs>
    </div>
  ))
  .add("Tabs with Drag Handle", () => (
    <div
      style={{
        border: "1px solid lightgray",
        height: "360px",
        width: "800px",
        fontSize: 14,
      }}>
      <Tabs onAddTab={() => alert("callback for create add")} useDragHandle>
        <TabPanel tab="Tab 1" tabKey="tab-1">
          <div>tab 1 content here</div>
        </TabPanel>
        {TabPanels.slice(1, TabPanels.length)}
      </Tabs>
    </div>
  ))
  .add("Tabs with sort disabled", () => (
    <div
      style={{
        border: "1px solid lightgray",
        height: "360px",
        width: "800px",
        fontSize: 14,
      }}>
      <Tabs
        onAddTab={() => alert("callback for create add")}
        sortDisabled
        useDragHandle>
        <TabPanel tab="Tab 1" tabKey="tab-1">
          <div>tab 1 content here</div>
        </TabPanel>
        {TabPanels.slice(1, TabPanels.length)}
      </Tabs>
    </div>
  ))
