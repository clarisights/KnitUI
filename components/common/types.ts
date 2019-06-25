export interface IStyled<PropType> {
  customProps: PropType
  theme: any
  [htmlProp: string]: any
}
