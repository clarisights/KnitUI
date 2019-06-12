import { ColorPreset, CustomColor } from "../../_utils/types"

export interface BaseLabelProps {
  /** Text to be rendered on the label */
  text: string
  /** The spaciousness in the label */
  expanded?: boolean
  /**
   * One of a set of predefined values that are representative of
   * the type of action
   */
  colorPreset?: ColorPreset
  /** Addons to be placed adjacent to the label text */
  customColor?: CustomColor
}
