import { ReactInstance } from "react";

import { ButtonWrapperProps } from "./src/components/Button/types"
import { IIconProps } from "./src/components/Icon/Icon"
import { IInputProps } from "./src/components/Input/Input"
import { SwitchProps } from "./src/components/Switch/Switch"
import { IBreadCrumb } from "./src/components/Breadcrumb/types"
import { ILabel } from "./src/components/Label/types"
import { ModalWrapperProps } from "./src/components/Modal/ModalWrapper"


export const Button: React.FC<ButtonWrapperProps>

export const Icon: React.FC<IIconProps>

export const Input: React.FC<IInputProps>

export const Switch: React.FC<SwitchProps>

export const Breadcrumb: IBreadCrumb

export const Label: ILabel

export const Modal: React.FC<ModalWrapperProps>

export const ThemeProvider: React.FC