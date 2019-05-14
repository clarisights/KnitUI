import React, { useState, useEffect, ReactNode } from "react"
import Container from "../components/Container"
import styled from "styled-components"

import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

const sizeToWidth = {
  "small": "49rem",
  "medium": "63rem",
  "large": "91rem",
  "x-large": "105rem"
}

export interface ModalWrapperProps {
  header: { title: string, rightSection?: ReactNode },
  body: ReactNode,
  footer: ReactNode,
  padding?: { vertical: string, horizontal: string },
  size?: "small" | "medium" | "large" | "x-large",
  [propName: string]: any,
  getContainer?: () => HTMLElement
}

const withModalWrapper = (WrappedComponent) => {
  const ModalWrapper: React.FC<ModalWrapperProps> = ({
    size,
    header,
    body,
    footer,
    padding,
    getContainer,
    ...props
  }) => {
    const [visible, setVisible] = useState(true)
    const [showFooterBorder, setShowFooterBorder] = useState(false)

    const setBodyRef = (el: HTMLElement) => {
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
        color: #E5E5E5;
        background-color: #808080;
        border-radius: 11px;
        span {
          padding: 0px 0.5rem;
        }
      }
    `

    return (
      <StyledContainer
        getContainer={getContainer}
        visible={visible}
        onClose={() => setVisible(false)}
      >
        {/* footer={<Footer padding={padding!}>{footer}</Footer>} */}
        <WrappedComponent
          header={<Header {...header} />}
          body={<Main padding={padding!} setBodyRef={setBodyRef}>{body}</Main>}
          footer={<Footer padding={padding!} showBorder={showFooterBorder}>{footer}</Footer>}
          {...props}
        />
      </StyledContainer>
    )
  }

  ModalWrapper.defaultProps = {
    padding: {
      vertical: "2.1rem",
      horizontal: "2.8rem"
    },
    size: "medium",
    getContainer: () => document.getElementsByTagName('body')[0]
  }

  return ModalWrapper
}

export default withModalWrapper
