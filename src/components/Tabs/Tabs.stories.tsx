import React from "react"
import { storiesOf } from "@storybook/react"
import styled from "styled-components"
import { Tabs, Button } from "../"
import { withKnobs } from "@storybook/addon-knobs"
const Readme = require("./README.md")

const stories = storiesOf("Tabs", module)
stories.addDecorator(withKnobs)

const sizeOptions = ["small", "medium", "large", "x-large"]

const { TabPanel } = Tabs

const TabPanels = [
  <TabPanel tab="Tab 1" key="tab-1" tabKey="tab-1">
    tab 1 content here
  </TabPanel>,
  <TabPanel tab="Tab 2" key="tab-2" tabKey="tab-2">
    tab 2 content here
  </TabPanel>,
  <TabPanel tab="Tab 3" key="tab-3" tabKey="tab-3">
    tab 3 content here
  </TabPanel>,
  <TabPanel tab="Tab 4" key="tab-4" tabKey="tab-4">
    tab 4 content here
  </TabPanel>,
  <TabPanel tab="Tab 5" key="tab-5" tabKey="tab-5">
    tab 5 content here
  </TabPanel>,
  <TabPanel tab="Tab 6" key="tab-6" tabKey="tab-6">
    tab 6 content here
  </TabPanel>,
  <TabPanel tab="Tab 7" key="tab-7" tabKey="tab-7">
    tab 7 content here
  </TabPanel>,
  <TabPanel tab="Tab 8" key="tab-8" tabKey="tab-8">
    tab 8 content here
  </TabPanel>,
  <TabPanel tab="Tab 9" key="tab-9" tabKey="tab-9">
    tab 9 content here
  </TabPanel>,
  <TabPanel tab="Tab 10" key="tab-10" tabKey="tab-10">
    tab 10 content here
  </TabPanel>,
  <TabPanel tab="Tab 11" key="tab-11" tabKey="tab-11">
    tab 11 content here
  </TabPanel>,
  <TabPanel tab="Tab 12" key="tab-12" tabKey="tab-12">
    tab 12 content here
  </TabPanel>,
  <TabPanel tab="Tab 13" key="tab-13" tabKey="tab-13">
    tab 13 content here
  </TabPanel>,
  <TabPanel tab="Tab 14" key="tab-14" tabKey="tab-14">
    tab 14 content here
  </TabPanel>,
  <TabPanel tab="Tab 15" key="tab-15" tabKey="tab-15">
    tab 15 content here
  </TabPanel>,
  <TabPanel tab="Tab 16" key="tab-16" tabKey="tab-16">
    tab 16 content here
  </TabPanel>,
  <TabPanel tab="Tab 17" key="tab-17" tabKey="tab-17">
    tab 17 content here
  </TabPanel>,
  <TabPanel tab="Tab 18" key="tab-18" tabKey="tab-18">
    tab 18 content here
  </TabPanel>,
  <TabPanel tab="Tab 19" key="tab-19" tabKey="tab-19">
    tab 19 content here
  </TabPanel>,
  <TabPanel tab="Tab 20" key="tab-20" tabKey="tab-20">
    tab 20 content here
  </TabPanel>,
]

const Container = styled.div`
  border: 1px solid lightgray;
  height: 360px;
  width: 100%;
  font-size: 1.4rem;
`

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
        <Container
          style={{
            marginBottom: 20,
            padding: 20,
          }}>
          <Tabs onAddTab={() => alert("callback for create add")}>
            {TabPanels}
          </Tabs>
        </Container>
        <Container>
          <Tabs onAddTab={() => alert("callback for create add")}>
            {TabPanels.slice(0, 8)}
          </Tabs>
        </Container>
      </div>
    )
  })
  .add("Tab Panel hideTabContent", () => {
    return (
      <Container>
        <Tabs onAddTab={() => alert("callback for create add")} hideTabContent>
          {TabPanels.slice(0, 12)}
        </Tabs>
      </Container>
    )
  })
  .add("Tab Panel with react component", () => (
    <Container>
      <Tabs onAddTab={() => alert("callback for create add")}>
        <TabPanel
          tab={
            <div style={{ height: "100%", width: "4.9rem", display: "flex" }}>
              <div style={{ paddingRight: "0.7rem" }}>tab 1 </div>
              <Button
                icon="oFilterList"
                size="small"
                bare={true}
                onClick={() => {
                  alert("Clicked on inside button")
                }}
              />
            </div>
          }
          key="tab-1"
          tabKey="tab-1">
          <div>tab 1 content here</div>
        </TabPanel>
        {TabPanels.slice(1, 10)}
      </Tabs>
    </Container>
  ))
  .add("Tabs with Drag Handle", () => (
    <Container>
      <Tabs onAddTab={() => alert("callback for create add")} useDragHandle>
        <TabPanel tab="Tab 1" key="tab-1" tabKey="tab-1">
          <div>tab 1 content here</div>
        </TabPanel>
        {TabPanels.slice(1, TabPanels.length)}
      </Tabs>
    </Container>
  ))
  .add("Tabs with readOnly mode", () => (
    <Container>
      <Tabs
        onAddTab={() => alert("callback for create add")}
        readOnly
        useDragHandle>
        <TabPanel tab="Tab 1" key="tab-1" tabKey="tab-1">
          <div>tab 1 content here</div>
        </TabPanel>
        {TabPanels.slice(1, TabPanels.length)}
      </Tabs>
    </Container>
  ))
  .add("Tabs with hide add button", () => (
    <Container>
      <Tabs
        onAddTab={() => alert("callback for create add")}
        hideAdd
        useDragHandle>
        <TabPanel tab="Tab 1" key="tab-1" tabKey="tab-1">
          <div>tab 1 content here</div>
        </TabPanel>
        {TabPanels.slice(1, TabPanels.length)}
      </Tabs>
    </Container>
  ))
  .add("Tabs with custom Button", () => (
    <Container>
      <Tabs
        onAddTab={() => alert("callback for create add")}
        addButtonElement={<button>Add Tab</button>}
        useDragHandle>
        <TabPanel tab="Tab 1" key="tab-1" tabKey="tab-1">
          <div>tab 1 content here</div>
        </TabPanel>
        {TabPanels.slice(1, TabPanels.length)}
      </Tabs>
    </Container>
  ))
