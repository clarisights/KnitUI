import React, { ReactNode } from 'react'

import { ColorPreset, IColorTheme } from "../_utils/types"

interface LabelPropTypes {
  /** Text to be rendered on the label */
  text: string
  /** Thee spaciousness in the label */
  type?: "compact" | "expanded",
  /** The amount of physical space occupied */
  size?: "small" | "medium" | "large",
  /** Whether the edges of the label should be rounded */
  rounded?: boolean,
  /** Whether the label should have a distinct outline */
  outlined?: boolean,
  /** Whether it should be inlined */
  inline?: boolean,
  /** Defines the colors for the background and font */
  colorTheme?: ColorPreset | IColorTheme
  /** Addons to be placed adjacent to the label text */
  addons?: { left?: ReactNode, right?: ReactNode}
}

const Label: React.FC<LabelPropTypes> = ({
  type = "compact",
  size = "medium",
  rounded = false,
  outlined = false,
  inline = false,
  colorTheme = "neutral",
  addons = null
}) => {
  return <div>Label</div>
}

export default Label
