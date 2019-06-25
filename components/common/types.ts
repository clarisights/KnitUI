export interface IStyled<PropType> {
  customProps: {
    showBorder: PropType
  }
  theme: any
  [htmlProp: string]: any
}
