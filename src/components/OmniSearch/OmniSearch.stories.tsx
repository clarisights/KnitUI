import React, { useState } from "react"
import { storiesOf } from "@storybook/react"
import styled from "styled-components"
import { OmniSearch, Button } from "../"
import { getThemeColor } from "../../common/_utils"
import { withKnobs } from "@storybook/addon-knobs"
import { oAccountCircle as UserProfileIcon } from "../Icon/Icons"
const Readme = require("./README.md")

const stories = storiesOf("Omni Search", module)
stories.addDecorator(withKnobs)

const ListItem = styled.div`
  width: 100%;
  padding: 0.7rem 1.4rem;
  font-size: 1.4rem;
  line-height: 2rem;

  &:hover {
    background: ${props => getThemeColor(props, "Neutral10")};
  }
`

const Container = styled.div`
  border: 1px solid lightgray;
  height: 360px;
  width: 100%;
  font-size: 1.4rem;
`

const OmniSearchWrapper = () => {
  const [visible, setVisible] = useState(true)
  const data = [
    "List Item 1",
    "List Item 2",
    "List Item 3",
    "List Item 4",
    "List Item 5",
  ]
  const [value, setValue] = useState("")
  const [filteredData, setFilteredData] = useState(data)

  const ListItems = filteredData.map(item => <ListItem>{item}</ListItem>)
  return (
    <div>
      <Container
        style={{
          marginBottom: 20,
          padding: 20,
        }}>
        <div
          onClick={() => {
            setVisible(true)
          }}>
          <Button label={"Spotlight"} />
        </div>
        <OmniSearch
          visible={visible}
          value={value}
          onChange={event => {
            const value = event.target.value
            const filteredData = data.filter(item => item.includes(value))
            setValue(value)
            setFilteredData(filteredData)
          }}
          onClose={() => {
            setVisible(!visible)
          }}
          dropdown={ListItems}></OmniSearch>
      </Container>
    </div>
  )
}

stories
  .addParameters({
    readme: {
      // Show readme before story
      codeTheme: "shades-of-purple",
      // Show readme at the addons panel
      sidebar: Readme,
    },
  })
  .add("basic", () => <OmniSearchWrapper />)
