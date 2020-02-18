import React, { useEffect } from "react"

function useOutsideClick(
  fn: (e: HTMLElement, ...args: any[]) => void,
  props: Array<any>
) {
  useEffect(() => {
    function onOutsideClick(e: Event) {
      fn(e.target as HTMLElement, ...props)
    }
    window.addEventListener("click", onOutsideClick)
    return () => {
      window.removeEventListener("click", onOutsideClick)
    }
  }, props)
}

export default useOutsideClick
