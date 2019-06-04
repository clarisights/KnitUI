import React, { useState, ReactNode } from "react"
import Container from "./components/Container"
import styled from "styled-components"
import { Header, Footer, Main } from "./components"
import {
  Modal,
  LeftPanelModal,
  RightPanelModal,
  BottomPanelModal,
} from "./variants/index"
import * as theme from "../styles/variables"
import { StyleContext } from "./common/contexts"
import Icon from "../Icon"

const sizeToWidth = {
  small: "49rem",
  medium: "63rem",
  large: "91rem",
  "x-large": "105rem",
}

export interface ModalWrapperProps {
  /** Contents to be rendered in the header section */
  header: { title: string; rightSection?: ReactNode }
  /** Contents to be rendered on in the body section */
  body: ReactNode
  /** Contents to be rendered on in the footer section */
  footer: ReactNode
  /** The padding values to be applied */
  padding?: { vertical: string; horizontal: string }
  /** Size values representing the amount of physical space occupied */
  size?: "small" | "medium" | "large" | "x-large"
  /** The DOM node under which the modal should reside */
  getContainer?: () => HTMLElement
  /** Controls the visibility of the modal */
  visible?: boolean
  /** Function to be executed when the modal is dismissed */
  onClose: () => void
  /** Addon panel that is attached to the modal */
  panel?: { position: "left" | "right" | "bottom"; content: ReactNode }
  /** to unmount child compenents on onClose */
  destroyOnClose?: boolean
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
    horizontal: "2.8rem",
  },
  getContainer = () => document.getElementsByTagName("body")[0],
  visible = false,
  onClose,
  panel,
  destroyOnClose = false,
}) => {
  /**
   * Renders the appopriate variant based on the availability of a
   * panel prop and its position.
   * @param modalProps
   */
  const ModalProxy = (modalProps: {
    header: ReactNode
    footer: ReactNode
    body: ReactNode
  }) => {
    if (!panel) {
      return <Modal {...modalProps} />
    }
    switch (panel.position) {
      case "left":
        return <LeftPanelModal {...modalProps} panelContent={panel.content} />
      case "right":
        return <RightPanelModal {...modalProps} panelContent={panel.content} />
      case "bottom":
        return <BottomPanelModal {...modalProps} panelContent={panel.content} />
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

  const appearDuration = 250
  const transitionName = `modal`
  const maskTransitionName = `modalMask`
  const constMaskDuration = 100
  const modalTransitionPath = `cubic-bezier(1, 0, 1, 1)`

  // Animations on leave are not working for rc-dialog, Related issues:
  // https://github.com/react-component/dialog/issues/78
  // https://github.com/facebook/react/issues/10826
  const StyledContainer = styled(Container)`
    width: ${sizeToWidth[size!]} !important;
    .rc-dialog-close {
      right: -1rem;
      top: -1rem;
      opacity: unset;
      padding: 0.15rem;
      line-height: 0;
      background-color: ${theme.shades.gray50};
      border-radius: 999px;
      svg {
          fill: ${theme.shades.gray90};
        }
      }
    }
    &.${transitionName}-appear {
      opacity: 0;
      transform: scale(0.9);
    }

    &.${transitionName}-appear.${transitionName}-appear-active {
      opacity: 1;
      transform: scale(1.0);
      transition: opacity ${appearDuration}ms ease-out, transform ${appearDuration}ms ${modalTransitionPath};
    }

    &.${transitionName}-leave {
      opacity: 1;
      transform: scale(1);
    }

    &.${transitionName}-leave.${transitionName}-leave-active {
      opacity: 0;
      transform: scale(0.9);
      transition: opacity ${appearDuration}ms ease-out, transform ${appearDuration}ms ${modalTransitionPath};
    }

    &.${maskTransitionName}-appear {
      opacity: 0;
    }

    &.${maskTransitionName}-appear.${maskTransitionName}-appear-active {
      opacity: 1;
      transition: opacity ${constMaskDuration}ms ease-out;
    }

    &.${maskTransitionName}-appear {
      opacity: 1;
    }

    &.${maskTransitionName}-appear.${maskTransitionName}-appear-active {
      opacity: 0;
      transition: opacity ${constMaskDuration}ms ease-out;
    }
  `

  return (
    <StyleContext.Provider value={{ padding }}>
      <StyledContainer
        getContainer={getContainer}
        visible={visible}
        onClose={onClose}
        closeIcon={<Icon type="oClear" />}
        destroyOnClose={destroyOnClose}
        transitionName={transitionName}
        maskTransitionName={maskTransitionName}>
        <ModalProxy
          header={<Header {...header} />}
          body={<Main setBodyRef={setBodyRef}>{body}</Main>}
          footer={<Footer showBorder={showFooterBorder}>{footer}</Footer>}
        />
      </StyledContainer>
    </StyleContext.Provider>
  )
}

export default ModalWrapper
