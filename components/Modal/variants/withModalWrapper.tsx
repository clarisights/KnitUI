import React, { useState, ReactNode } from "react"
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
  size?: "small" | "medium" | "large" | "x-large"
}

const withModalWrapper = (WrappedComponent) => {
  const ModalWrapper: React.FC<ModalWrapperProps> = ({
    size,
    header,
    body,
    footer,
    padding,
    ...props
  }) => {
    const [visible, setVisible] = useState(true)

    const StyledContainer = styled(Container)`
      width: ${sizeToWidth[size!]} !important;
    `

    return (
      <StyledContainer
        getContainer={() => document.getElementsByTagName('body')[0]}
        visible={visible}
        onClose={() => setVisible(false)}
      >
        <WrappedComponent
          header={<Header {...header} />}
          body={<Main padding={padding}>{body}</Main>}
          footer={<Footer padding={padding}>{footer}</Footer>}
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
    size: "medium"
  }

  return ModalWrapper
}

export default withModalWrapper
