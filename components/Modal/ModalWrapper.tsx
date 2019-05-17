import React, { useState, ReactNode } from "react"
import Container from "./components/Container"
import styled from "styled-components"

import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import { Modal, LeftPanelModal, RightPanelModal, BottomPanelModal } from "./variants/index"

import { StyleContext } from "./common/contexts"

const sizeToWidth = {
  "small": "49rem",
  "medium": "63rem",
  "large": "91rem",
  "x-large": "105rem"
}

export interface ModalWrapperProps {
  /** Contents to be rendered in the header section */
  header: { title: string, rightSection?: ReactNode },
  /** Contents to be rendered on in the body section */
  body: ReactNode,
  /** Contents to be rendered on in the footer section */
  footer: ReactNode,
  /** The padding values to be applied */
  padding?: { vertical: string, horizontal: string },
  /** Size values representing the amount of physical space occupied */
  size?: "small" | "medium" | "large" | "x-large",
  /** The DOM node under which the modal should reside */
  getContainer?: () => HTMLElement,
  /** Controls the visibility of the modal */
  visible?: boolean,
  /** Function to be executed when the modal is dismissed */
  onClose: () => void,
  panel?: { position: "left" | "right" | "bottom", content: ReactNode }
  [propName: string]: any,
}

/**
 * The external interface for the modal
 */
const ModalWrapper: React.FC<ModalWrapperProps> = ({
  size = "medium",
  header,
  body,
  footer,
  padding = {
    vertical: "2.1rem",
    horizontal: "2.8rem"
  },
  getContainer = () => document.getElementsByTagName('body')[0],
  visible = true,
  onClose,
  panel,
  ...props
}) => {

  /**
   * Renders the appopriate variant based on the availability of a
   * panel prop and its position.
   * @param modalProps
   */
  const ModalProxy = (modalProps) => {
    if (!panel) {
      return <Modal {...modalProps} />
    }
    switch (panel.position) {
      case "left":
        return <LeftPanelModal {...modalProps} />
      case "right":
        return <RightPanelModal {...modalProps} />
      case "bottom":
        return <BottomPanelModal {...modalProps} />
      default:
        return <Modal {...modalProps} />
    }
  }

  const [showFooterBorder, setShowFooterBorder] = useState(false)
  const setBodyRef = (el: HTMLElement | null) => {
    if (el && el.scrollHeight > el.clientHeight) {
      setShowFooterBorder(true)
    }
  }

  const StyledContainer = styled(Container)`
    width: ${sizeToWidth[size!]} !important;
    .rc-dialog-close {
      ${header.rightSection ?
      `
        right: -1rem;
        top: -1rem;
      ` :
      `top: 2.5rem;`
      }
      opacity: unset;
      text-shadow: unset;
      color: ${scProps => scProps.theme.shades.gray90};
      background-color: ${scProps => scProps.theme.shades.gray50};
      border-radius: 11px;
      span {
        padding: 0px 0.5rem;
      }
    }
  `

  return (
    <StyleContext.Provider value={{padding}}>
      <StyledContainer
        getContainer={getContainer}
        visible={visible}
        onClose={onClose}
      >
        <ModalProxy
          header={<Header {...header} />}
          body={<Main setBodyRef={setBodyRef}>{body}</Main>}
          footer={<Footer showBorder={showFooterBorder}>{footer}</Footer>}
          {...props}
        />
      </StyledContainer>
    </StyleContext.Provider>
  )
}

export default ModalWrapper
