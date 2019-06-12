import React, { SyntheticEvent } from "react"
import Icon from "../Icon"
import * as theme from "../styles/variables"
import { ButtonBase, ButtonInset } from "./styledComponents"
import { parseColorTheme } from "../_utils"

import { InputColorTheme } from "../_utils/types"

const { shades, typography } = theme

const DEFAULT_COLOR_THEME = "neutral"

const DEFAULT_INSET_THEME = {
  background: shades.white,
  font: shades.gray20,
}

interface ButtonWrapperProps {
  /** The text label to be shown on the button */
  label?: string
  /** Indicates the importance of the button's actions */
  type?: "primary" | "secondary"
  /** Indicates the state of an action. Can be a preset string or an object
   * representing custom color theme that overrides the defaults,
   * The color theme should be passed in the form of an object containing two properties,
   * background and font and the values should be a valid hex string or
   * css rgb format.
   */
  colorTheme?: InputColorTheme
  /** Color theme for the inset */
  insetColorTheme?: InputColorTheme
  /** Inverted color scheme */
  ghost?: boolean
  /** Physical area occupied on the screen */
  size?: "small" | "medium" | "large"
  /** Whether the button should be disabled */
  disabled?: boolean
  /** Only text/icon stripping the background */
  bare?: boolean
  /** An icon type to be rendered in the button */
  icon?: string
  /** An inset value, typically used for showing notifications */
  insetLabel?: string
  /** A location to navigate to on click of the button */
  href?: string
  /** An event handler to be called on click of the button */
  onClick?: (event) => void
}

const ButtonWrapper: React.FC<ButtonWrapperProps> = ({
  label,
  type = "primary",
  ghost = false,
  size = "medium",
  disabled = false,
  href,
  onClick,
  icon,
  bare = false,
  insetLabel,
  colorTheme = DEFAULT_COLOR_THEME,
  insetColorTheme = DEFAULT_INSET_THEME,
}) => {
  const typographySize = size === "small" ? typography[12] : typography[14]
  const baseFontSize = typographySize.fontSize
  const baseLineHeight = typographySize.lineHeight
  const insetFontSize = baseFontSize - theme.baseIncrementUnit
  const lowerTypographyUnit = typography[`${insetFontSize * 10}`]
  const insetLineHeight =
    (lowerTypographyUnit && lowerTypographyUnit.lineHeight) || baseLineHeight
  const parsedColorTheme = parseColorTheme(colorTheme)
  const parsedInsetColorTheme = parseColorTheme(
    insetColorTheme,
    DEFAULT_INSET_THEME
  )

  return (
    <ButtonBase
      customProps={{
        label,
        icon,
        type,
        ghost,
        size,
        bare,
        colorTheme: parsedColorTheme,
        fontSize: baseFontSize,
        lineHeight: baseLineHeight,
      }}
      onClick={(e: SyntheticEvent) =>
        (onClick && onClick(e)) || (href && window.location.assign(href))
      }
      disabled={disabled}>
      {icon ? <Icon type={icon} /> : null}
      {label}
      {insetLabel ? (
        <ButtonInset
          customProps={{
            backgroundColor: parsedInsetColorTheme.background,
            fontColor: parsedInsetColorTheme.font,
            fontSize: `${insetFontSize}rem`,
            lineHeight: `${insetLineHeight}rem`,
          }}>
          {insetLabel}
        </ButtonInset>
      ) : null}
    </ButtonBase>
  )
}

export default ButtonWrapper
