import styled from "styled-components"
import { IStyledModal, IStyledPanelModal } from "./types"

const getPanelBorder = (props: IStyledPanelModal) => {
  const {
    customProps: { location },
    theme: { knitui },
  } = props
  if (location === "right") {
    return `border-left: ${knitui.modalBorder};`
  }
  // Assume location to be "left" by default
  return `border-right: ${knitui.modalBorder};`
}

export const BaseLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: inherit;
`

export const Layout = styled.div<IStyledPanelModal>(
  props => `
  display: flex;
  flex-direction: row;
  align-items: stretch;
  flex: 1 1 auto;
  max-height: ${props.customProps.maxContentHeight};
  min-height: ${props.customProps.minContentHeight};
`
)

// Applies to left and right panels only
export const PanelSection = styled.div<IStyledPanelModal>(
  props => `
  width: 21rem;
  flex-shrink: 0;
  ${getPanelBorder(props)}
  overflow-y: auto;
`
)

export const Content = styled.div<IStyledModal>`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

export const VerticalLayoutContent = styled(Content)(
  props => `
  max-height: ${props.customProps.maxContentHeight};
  min-height: ${props.customProps.minContentHeight};
`
)
