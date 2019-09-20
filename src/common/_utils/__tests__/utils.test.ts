import { getFontColor, parseColorPreset, parseCustomColor } from "../index"
import { palette, generateTheme } from "../../../"
const { knitui: theme } = generateTheme(palette)
const chromaPalette = theme.chromaPalette
const { Neutral0, Neutral90 } = chromaPalette

describe("_utils", () => {
  describe("getFontColor", () => {
    it("font is white for black background", () => {
      const fontColor = getFontColor(theme, chromaPalette.Neutral90)
      expect(fontColor.toString()).toBe(Neutral0.toString())
    })

    it("font is black for white background", () => {
      const fontColor = getFontColor(theme, chromaPalette.Neutral0)
      expect(fontColor.toString()).toBe(Neutral90.toString())
    })

    it("font is white for neutral background", () => {
      const fontColor = getFontColor(theme, chromaPalette.Blue100)
      expect(fontColor.toString()).toBe(Neutral0.toString())
    })

    it("font is white for success background", () => {
      const fontColor = getFontColor(theme, chromaPalette.Neutral90)
      expect(fontColor.toString()).toBe(Neutral0.toString())
    })

    it("font is white for error background", () => {
      const fontColor = getFontColor(theme, chromaPalette.Green80)
      expect(fontColor.toString()).toBe(Neutral0.toString())
    })

    it("font is white for unsaved background", () => {
      const fontColor = getFontColor(theme, chromaPalette.Magenta80)
      expect(fontColor.toString()).toBe(Neutral0.toString())
    })

    it("font is black for warning background", () => {
      const fontColor = getFontColor(theme, chromaPalette.Yellow80)
      expect(fontColor.toString()).toBe(Neutral90.toString())
    })
  })

  describe("parseCustomColor", () => {
    it("should return an object with parsed colors", () => {
      const backgroundColor = "#000000"
      const fontColor = "#ffffff"
      const parsed = parseCustomColor(theme, backgroundColor)
      expect(parsed.background.toString()).toBe(backgroundColor)
      expect(parsed.font.toString()).toBe(fontColor)
    })
  })

  describe("parseColorPreset", () => {
    it("should return an object with parsed colors", () => {
      const parsed = parseColorPreset(theme, "neutral")
      expect(parsed.background.toString()).toBe("#002966")
      expect(parsed.font.toString()).toBe("#ffffff")
    })
  })
})
