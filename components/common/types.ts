/**
 * styled-components will by default apply valid HTML props onto the DOM.
 * Refer: https://www.styled-components.com/docs/basics#passed-props
 * However in some cases we do use props only for some computation and we
 * would not want them to be applied on the DOM. To address this, we use
 * add all such props within another property called `customProps`.
 */
export interface IStyled<PropType> {
  customProps: PropType
  theme: any
  [htmlProp: string]: any
}
