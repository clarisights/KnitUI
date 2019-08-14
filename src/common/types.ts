import { CSSObject } from "styled-components"

export type ColorPreset =
  | "neutral"
  | "danger"
  | "success"
  | "warning"
  | "unsaved"

export type CustomColor = string

export interface ParsedColorTheme {
  background: any
  font: any
}

export type fontSizeType = 10 | 12 | 14 | 16 | 18 | 20

export interface BaseComponentProps {
  /** CSS classname to be added */
  className?: string
  /** CSS styles to be adeed */
  style?: CSSObject
}

/**
 * styled-components will by default apply valid HTML props onto the DOM.
 * Refer: https://www.styled-components.com/docs/basics#passed-props
 * However in some cases we do use props only for some computation and we
 * would not want them to be applied on the DOM. To address this, we use
 * add all such props within another property called `customProps`.
 */
export interface IStyled<PropType> {
  customProps: PropType
  theme?: any
  [htmlProp: string]: any
}
