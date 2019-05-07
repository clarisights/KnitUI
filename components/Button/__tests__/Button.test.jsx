import React from "react"
import { Button } from "../index"
import {render, cleanup} from 'react-testing-library';
import 'jest-styled-components'
import 'jest-dom/extend-expect'


afterEach(cleanup)

describe("Button", () => {
  const sizes = ["small", "medium", "large"]

  // All tests are executes for each of the three sizes
  sizes.forEach(size => {
    describe(`with size ${size}`, () => {
      it("renders a primary variant with a label correctly", () => {
        const { asFragment } = render(
          <Button
            label="button"
            size={size}
            colorTheme={preset}
          />,)
        expect(asFragment()).toMatchSnapshot()
      })

      it("renders a ghost variant correctly", () => {
        const { asFragment } = render(
          <Button
            label="button"
            size={size}
            ghost
            colorTheme={preset}
          />)
        expect(asFragment()).toMatchSnapshot()
      })

      it("renders a bare variant correctly", () => {
        const { asFragment } = render(
          <Button
            label="button"
            size={size}
            bare
            colorTheme={preset}
          />)
        expect(asFragment()).toMatchSnapshot()
      })

      it("renders with an icon correctly", () => {
        const { asFragment } = render(
          <Button
            label="button"
            size={size}
            icon="Info"
            colorTheme={preset}
          />)
        expect(asFragment()).toMatchSnapshot()
      })

      it("renders with a bare icon correctly", () => {
        const { asFragment } = render(
          <Button
            label="button"
            size={size}
            icon="Info"
            colorTheme={preset}
            bare
          />)
        expect(asFragment()).toMatchSnapshot()
      })
    })
  
    it("renders with inset correctly", () => {
      const { asFragment } = render(
        <Button
          label="button"
          size={size}
          insetLabel={"10"}
        />)
      expect(asFragment()).toMatchSnapshot()
    })
  
    it("renders with text and an icon correctly", () => {
      const { asFragment } = render(
        <Button
          label="button"
          size={size}
          icon="Info"
        />)
      expect(asFragment()).toMatchSnapshot()
    })
  
    it("renders with text, icon and inset correctly", () => {
      const { asFragment } = render(
        <Button
          label="button"
          size={size}
          icon="Info"
          insetLabel={"10"}
        />)
      expect(asFragment()).toMatchSnapshot()
    })

    it("renders with a specified color preset corretly", () => {
      const { asFragment } = render(
        <Button
          label="button"
          colorTheme="danger"
        />)
      expect(asFragment()).toMatchSnapshot()
    })

    it("renders with a custom color theme correctly", () => {
      const { asFragment } = render(
        <Button
          label="button"
          colorTheme={{
            background: "#f142f4",
            font: "#f4f141",
            insetBackground: "#000000",
            insetFont: "#FFFFFF"
          }}
        />)
      expect(asFragment()).toMatchSnapshot()
    })
  })
})
