import React, { useRef, useEffect } from "react"

function createRoot(id: string, zIndex?: string) {
  zIndex = zIndex || "9000"
  const elem = document.createElement("div")
  elem.setAttribute("id", id)
  elem.setAttribute("style", `position: absolute;z-index: ${zIndex};`)
  return elem
}

export function addRootElement(rootElem) {
  if (document.body && document.body.lastElementChild) {
    document.body.insertBefore(
      rootElem,
      document.body.lastElementChild.nextElementSibling
    )
  }
}

export function removeElem(elem: HTMLElement) {
  if (elem.parentNode) {
    elem.parentNode.removeChild(elem)
  }
}

export default function usePortal(id: string, zIndex?: string) {
  const elem = useRef(createRoot(id, zIndex))
  useEffect(() => {
    addRootElement(elem.current)
    return () => removeElem(elem.current)
  }, [])
  return elem.current
}
