import React, { useContext, SyntheticEvent } from "react"
import Icon from "../Icon"
import { ButtonBase, ButtonInset, ButtonContent } from "./components"
import { ThemeContext } from "styled-components"
import { parseCustomColor, parseColorPreset } from "../../common/_utils"
import { ButtonWrapperInterface, ButtonWrapperProps } from "./types"

const DEFAULT_COLOR_THEME = "neutral"

const insetPositions = {
  LEFT: "left",
  RIGHT: "right",
}

const ButtonWrapper: ButtonWrapperInterface<ButtonWrapperProps> = ({
  label,
  ghost = false,
  size = "medium",
  href,
  onClick,
  icon,
  bare = false,
  insetLabel,
  insetPosition = "right",
  colorPreset = DEFAULT_COLOR_THEME,
  customColor,
  insetCustomColor,
  customProps /** (define just to exclude from rest) In case Button is wrapped in StyledComponent with customProps passed down to manipulate style, 
  like when Button is used in other components. eg. Alerts, yet no need in Button Component itself*/,
  ...rest
}) => {
  const themeContext = useContext(ThemeContext)
  const { knitui } = themeContext

  // Typography
  const typographySize =
    size === "small" ? knitui.typography[12] : knitui.typography[14]
  const iconSize = size === "small" ? "1.4rem" : "1.8rem"
  const baseFontSize = typographySize.fontSize
  const baseLineHeight = typographySize.lineHeight
  const insetFontSize = baseFontSize - knitui.baseIncrementUnit
  const lowerTypographyUnit = knitui.typography[`${insetFontSize * 10}`]
  const insetLineHeight =
    (lowerTypographyUnit && lowerTypographyUnit.lineHeight) || baseLineHeight
  // Colors

  // Cannot be set as default arg since theme is not available in that context
  const DEFAULT_INSET_THEME = {
    background: knitui.chromaPalette.Neutral0,
    font: knitui.chromaPalette.Neutral80,
  }

  const insetColorTheme = insetCustomColor
    ? parseCustomColor(knitui, insetCustomColor)
    : DEFAULT_INSET_THEME
  const parsedColorTheme = customColor
    ? parseCustomColor(knitui, customColor)
    : parseColorPreset(knitui, colorPreset)
  return (
    <ButtonBase
      customProps={{
        label,
        icon,
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
      {...rest}>
      {insetLabel && insetPosition === insetPositions.LEFT && (
        <ButtonInset
          customProps={{
            insetPosition,
            size,
            backgroundColor: insetColorTheme.background,
            fontColor: insetColorTheme.font,
            fontSize: `${insetFontSize}rem`,
            lineHeight: `${insetLineHeight}rem`,
          }}>
          <span>{insetLabel}</span>
        </ButtonInset>
      )}
      <ButtonContent
        customProps={{
          label,
          icon,
          ghost,
          size,
          bare,
          colorTheme: parsedColorTheme,
          fontSize: baseFontSize,
          lineHeight: baseLineHeight,
        }}>
        {icon ? <Icon type={icon} size={iconSize} /> : null}
        {label}
      </ButtonContent>
      {insetLabel && insetPosition === insetPositions.RIGHT && (
        <ButtonInset
          customProps={{
            insetPosition,
            size,
            backgroundColor: insetColorTheme.background,
            fontColor: insetColorTheme.font,
            fontSize: `${insetFontSize}rem`,
            lineHeight: `${insetLineHeight}rem`,
          }}>
          <span>{insetLabel}</span>
        </ButtonInset>
      )}
    </ButtonBase>
  )
}

import ButtonGroup from "./ButtonGroup"
ButtonWrapper.Group = ButtonGroup
export default ButtonWrapper
