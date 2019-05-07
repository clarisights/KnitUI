import React from "react"
import { Button } from "../index"
import {render, cleanup} from 'react-testing-library';
import 'jest-styled-components'
import 'jest-dom/extend-expect'


afterEach(cleanup)

describe("Button", () => {
  const sizes = ["small", "medium", "large"]
  sizes.forEach(size => {
    describe(`with size ${size}`, () => {
      it("renders a primary variant with a label correctly", () => {
        const { asFragment } = render(
          <Button label="button" size={size} />,
        )
        expect(asFragment()).toMatchSnapshot()
      })
    
      it("renders a secondary variant with a label correctly", () => {
        const { asFragment } = render(
          <Button label="button" type="secondary" size={size} />,
        )
        expect(asFragment()).toMatchSnapshot()
      })
    
      it("renders a ghost ghost correctly", () => {
        const { asFragment } = render(<Button label="button" size={size} ghost/>)
        expect(asFragment()).toMatchSnapshot()
      })
    
      it("renders with inset correctly", () => {
        const { asFragment } = render(<Button label="button" size={size} insetLabel={"10"}/>)
        expect(asFragment()).toMatchSnapshot()
      })
    
      it("renders with an icon correctly", () => {
        const { asFragment } = render(<Button label="button" size={size} icon="Info"/>)
        expect(asFragment()).toMatchSnapshot()
      })
    
      it("renders with text and an icon correctly", () => {
        const { asFragment } = render(<Button label="button" size={size} icon="Info"/>)
        expect(asFragment()).toMatchSnapshot()
      })
    
      it("renders with text, icon and inset correctly", () => {
        const { asFragment } = render(<Button label="button" size={size} icon="Info" insetLabel={"10"}/>)
        expect(asFragment()).toMatchSnapshot()
      })

      it("renders with text, icon and inset correctly", () => {
        const { asFragment } = render(<Button label="button" size={size} icon="Info" insetLabel={"10"}/>)
        expect(asFragment()).toMatchSnapshot()
      })
    })
  })
})
