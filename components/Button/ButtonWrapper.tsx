import React, { useContext, SyntheticEvent } from "react"
import Icon from "../Icon"
import { ButtonBase, ButtonInset } from "./components"
import { ThemeContext } from "styled-components"
import { parseCustomColor, parseColorPreset } from "../_utils"
import { ButtonWrapperProps } from "./types"

const DEFAULT_COLOR_THEME = "neutral"

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
  className,
  style,
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
      disabled={disabled}
      className={className}
      style={style}>
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

export default ButtonWrapper
