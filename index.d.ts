import { ReactInstance } from "react";

import { ButtonWrapperProps } from "./src/components/Button/types"
import { IIconProps } from "./src/components/Icon/Icon"
import { IInputProps } from "./src/components/Input/Input"
import { SwitchProps } from "./src/components/Switch/Switch"
import { BreadcrumbProps, BreadcrumbItemProps } from "./src/components/Breadcrumb/types"
import { LabelPropTypes, InlineLabelProps } from "./src/components/Label/types"
import { ModalWrapperProps } from "./src/components/Modal/ModalWrapper"


export function Button(props: ButtonWrapperProps): ReactInstance;

export function Icon(props: IIconProps): ReactInstance;

export function Input(props: IInputProps): ReactInstance;

export function Switch(props: SwitchProps): ReactInstance;

export function Breadcrumb(props: BreadcrumbProps): ReactInstance

/**
 * Using namespaces to support syntax like `Breadcrumb.Item`
 */
export namespace Breadcrumb {
  export function Item(props: BreadcrumbItemProps): ReactInstance
}

export function Label(props: LabelPropTypes): ReactInstance

export namespace Label {
  export function Inline(props: InlineLabelProps): ReactInstance
}

export function Modal(props: ModalWrapperProps): ReactInstance