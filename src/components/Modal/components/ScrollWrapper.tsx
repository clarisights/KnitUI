import React, { Children, useState } from "react"
import { Footer, Main } from "."

export default function ScrollWrapper(props: any) {
  const { padding, children } = props
  const childrenArray = Children.toArray(children)
  const [showFooterBorder, setShowFooterBorder] = useState(false)
  const setBodyRef = (el: HTMLElement | null) => {
    if (el && el.scrollHeight > el.clientHeight) {
      setShowFooterBorder(true)
    }
  }

  return (
    <>
      <Main ref={setBodyRef} customProps={{ padding }}>
        {childrenArray[0]}
      </Main>
      <Footer customProps={{ showBorder: showFooterBorder }}>
        {childrenArray[1]}
      </Footer>
    </>
  )
}
