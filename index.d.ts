import { ReactInstance } from "react";

import { ButtonWrapperProps } from "./components/Button/types"
import { IIconProps } from "./components/Icon/Icon"
import { IInputProps } from "./components/Input/Input"
import { SwitchProps } from "./components/Switch/Switch"
import { BreadcrumbProps, BreadcrumbItemProps } from "./components/Breadcrumb/types"
import { LabelPropTypes, InlineLabelProps } from "./components/Label/types"
import { ModalWrapperProps } from "./components/Modal/ModalWrapper"


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