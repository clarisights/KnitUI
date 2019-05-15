import React, { useState, ReactNode } from "react"
import Container from "../components/Container"
import styled from "styled-components"

import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

import { StyleContext } from "../common/contexts"

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
  [propName: string]: any,
}

const withModalWrapper = (WrappedComponent) => {
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
    ...props
  }) => {
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
        `top: 1.8rem;`
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
          <WrappedComponent
            header={<Header {...header} />}
            body={<Main setBodyRef={setBodyRef}>{body}</Main>}
            footer={<Footer showBorder={showFooterBorder}>{footer}</Footer>}
            {...props}
          />
        </StyledContainer>
      </StyleContext.Provider>
    )
  }

  return ModalWrapper
}

export default withModalWrapper
