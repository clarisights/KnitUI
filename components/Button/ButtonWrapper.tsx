import React from "react"
import { Icon } from "../Icon"
import * as theme from "../styles/variables"
import chroma from "chroma-js"
import { ButtonBase, ButtonInset } from "./styledComponents"

import { ColorPreset, IColorTheme } from "../_utils/types"

const { shades, typography, secondaryPalette } = theme

const DEFAULT_COLOR_THEME = "neutral"

const DEFAULT_INSET_BG_COLOR = shades.white
const DEFAULT_INSET_FONT_COLOR = shades.gray20

interface IButtonColorTheme extends IColorTheme {
  insetBackground?: string,
  insetFont?: string
}

interface ParsedColorTheme {
  background: any,
  font: any,
  insetBackground?: any,
  insetFont?: any
}

interface ButtonWrapperProps {
  /** The text label to be shown on the button */
  label?: string
  /** Indicates the importance of the button's actions */
  type?: "primary" | "secondary",
  /** Indicates the state of an action. Can be a preset string or an object
   * representing custom color theme that overrides the defaults,
   * The color theme should be passed in the form of an object containing two properties,
   * background and font and the values should be a valid hex string or
   * css rgb format.
   */
  colorTheme?: ColorPreset | IButtonColorTheme,
  /** Inverted color scheme */
  ghost?: boolean,
  /** Physical area occupied on the screen */
  size?: "small" | "medium" | "large",
  /** Whether the button should be disabled */
  disabled?: boolean,
  /** Only text/icon stripping the background */
  bare?: boolean,
  /** An icon type to be rendered in the button */
  icon?: string,
  /** An inset value, typically used for showing notifications */
  insetLabel?: string,
  /** A location to navigate to on click of the button */
  href?: string,
  /** An event handler to be called on click of the button */
  onClick?: (event) => void
}

const parseColorTheme = (colorTheme) => {
  let parsedColorTheme: ParsedColorTheme = { ...secondaryPalette[DEFAULT_COLOR_THEME] }
  // Get the color theme based on variant and override if explicitly provided
  if (typeof colorTheme === "string") {
    parsedColorTheme = { ...secondaryPalette[colorTheme!] }
  } else {
    colorTheme = colorTheme || secondaryPalette[DEFAULT_COLOR_THEME]
    if (colorTheme && chroma.valid(colorTheme.background) && chroma.valid(colorTheme.font)) {
      parsedColorTheme.background = chroma(colorTheme.background)
      parsedColorTheme.font = chroma(colorTheme.font)
    }
  }

  // Inset color schemes are optional and will be defaulted to a value if not supplied
  parsedColorTheme.insetBackground =
    (chroma.valid(colorTheme.insetBackground) && chroma(colorTheme.insetBackground))
    || DEFAULT_INSET_BG_COLOR
  parsedColorTheme.insetFont =
    (chroma.valid(colorTheme.insetFont) && chroma(colorTheme.insetFont))
    || DEFAULT_INSET_FONT_COLOR
  return parsedColorTheme
}

const ButtonWrapper: React.FC<ButtonWrapperProps> = ({
  label,
  type,
  ghost,
  size,
  disabled,
  href,
  onClick,
  icon,
  bare,
  insetLabel,
  colorTheme
}) => {
  const typographySize = size === "small" ? typography.size12 : typography.size14
  const baseFontSize = typographySize.fontSize
  const baseLineHeight = typographySize.lineHeight
  const insetFontSize = baseFontSize - theme.baseIncrementUnit
  const lowerTypographyUnit = typography[`size${insetFontSize * 10}`]
  const insetLineHeight = lowerTypographyUnit && lowerTypographyUnit.lineHeight || baseLineHeight
  const parsedColorTheme = parseColorTheme(colorTheme)

  return (
    <ButtonBase
      label={label}
      icon={icon}
      type={type!}
      ghost={ghost!}
      size={size!}
      disabled={disabled}
      onClick={(e) => (onClick && onClick(e) || href && (window.location.assign(href)))}
      bare={bare!}
      colorTheme={parsedColorTheme}
      fontSize={baseFontSize}
      lineHeight={baseLineHeight}
    >
      {icon ? <Icon type={icon} /> : null }
      {label}
      {insetLabel ?
        <ButtonInset
          label={insetLabel}
          backgroundColor={parsedColorTheme.insetBackground}
          fontColor={parsedColorTheme.insetFont}
          fontSize={`${insetFontSize}rem`}
          lineHeight={`${insetLineHeight}rem`}
        /> : null}
    </ButtonBase>
)}

ButtonWrapper.defaultProps = {
  type: "primary",
  colorTheme: DEFAULT_COLOR_THEME,
  ghost: false,
  disabled: false,
  size: "medium",
  bare: false,
}

export default ButtonWrapper
