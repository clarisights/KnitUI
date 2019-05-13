import React, { ReactNode } from "react"
import withModalWrapper from "./withModalWrapper"

type sizeProps = "small" | "medium" | "large" | "x-large"
type paddingProps = { vertical: string, horizontal: string }

export interface ModalProps {
  header: { title: string, rightSection?: ReactNode },
  body: ReactNode,
  footer: ReactNode,
  padding?: { vertical: string, horizontal: string },
}

const Modal: React.FC<ModalProps> = ({
   header,
   body,
   footer,
  }) => {
  return (
    <>
      {header}
      {body}
      {footer}
    </>
  )
}

interface IDefaultProps {
  padding: paddingProps,
  size: sizeProps
}

export const defaultProps: IDefaultProps = {
  padding: {
    vertical: "2.1rem",
    horizontal: "2.8rem"
  },
  size: "medium"
}

Modal.defaultProps = defaultProps

export default withModalWrapper(Modal)
