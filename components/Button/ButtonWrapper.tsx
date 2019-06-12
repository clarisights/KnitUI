import React, { useContext, SyntheticEvent } from "react"
import BaseComponent from "../BaseComponent"
import Icon from "../Icon"
import { ButtonBase, ButtonInset } from "./styledComponents"
import { ThemeContext } from "styled-components"
import { parseCustomColor, parseColorPreset } from "../_utils"
import { ColorPreset, CustomColor } from "../_utils/types"

const DEFAULT_COLOR_THEME = "neutral"

interface ButtonWrapperProps {
  /** The text label to be shown on the button */
  label?: string
  /** Indicates the importance of the button's actions */
  type?: "primary" | "secondary"
  /**
   * One of a set of predefined values that are representative of
   * the type of action
   */
  colorPreset?: ColorPreset
  /** Override preset colors, should be valid CSS string */
  customColor?: CustomColor
  /** Override defaults, should be valid CSS string */
  insetCustomColor?: CustomColor
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
  onClick?: (event: SyntheticEvent) => void
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
  colorPreset = DEFAULT_COLOR_THEME,
  customColor,
  insetCustomColor,
}) => {
  const themeContext = useContext(ThemeContext)
  const { shades, typography } = themeContext

  // Typography
  const typographySize = size === "small" ? typography[12] : typography[14]
  const baseFontSize = typographySize.fontSize
  const baseLineHeight = typographySize.lineHeight
  const insetFontSize = baseFontSize - themeContext.baseIncrementUnit
  const lowerTypographyUnit = typography[`${insetFontSize * 10}`]
  const insetLineHeight =
    (lowerTypographyUnit && lowerTypographyUnit.lineHeight) || baseLineHeight

  // Colors

  // Cannot be set as default arg since theme is not available in that context
  const DEFAULT_INSET_THEME = {
    background: shades.white,
    font: shades.gray20,
  }

  const insetColorTheme = insetCustomColor
    ? parseCustomColor(insetCustomColor)
    : DEFAULT_INSET_THEME
  const parsedColorTheme = customColor
    ? parseCustomColor(customColor)
    : parseColorPreset(colorPreset)

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
            backgroundColor: insetColorTheme.background,
            fontColor: insetColorTheme.font,
            fontSize: `${insetFontSize}rem`,
            lineHeight: `${insetLineHeight}rem`,
          }}>
          {insetLabel}
        </ButtonInset>
      ) : null}
    </ButtonBase>
  )
}

export default BaseComponent(ButtonWrapper)
