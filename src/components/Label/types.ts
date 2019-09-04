import {
  ColorPreset,
  CustomColor,
  BaseComponentProps,
  fontSizeType,
} from "../../common/types"
import React from "react"

export interface BaseLabelProps extends BaseComponentProps {
  /** Text to be rendered on the label */
  text: string
  /** The spaciousness in the label */
  expanded?: boolean
  /**
   * One of a set of predefined values that are representative of
   * the type of action
   */
  colorPreset?: ColorPreset
  /** Custom color to override presets */
  customColor?: CustomColor
  /** Override the default font colors */
  customFontColor?: CustomColor 
}

export interface InlineLabelProps extends BaseLabelProps {
  /** Font size of the text */
  fontSize?: fontSizeType
}

export interface LabelPropTypes extends BaseLabelProps {
  /** The amount of physical space occupied */
  size?: "small" | "medium" | "large"
  /** Whether the edges of the label should be rounded */
  rounded?: boolean
  /** Whether the label should have a distinct outline */
  outlined?: boolean
  /**
   * Icons to be rendered in the label. They can be on left,
   * a right or on both sides of the text
   * */
  icons?: { left?: string; right?: string }
  /** Label is focussed or being dragged */
  focus?: boolean
  /** If an inset color should be used. If provided, will add a small decoration on the label
   * with the given color. Also the background is set to a default which can be changed by
   * `customColor` but not through the `colorPreset`*/
  insetColor?: CustomColor
}

export type InlineLabelType = React.FC<InlineLabelProps>

export interface ILabel extends React.FC<LabelPropTypes> {
  Inline: InlineLabelType
}
