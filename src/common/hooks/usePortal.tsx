import React, { useRef, useEffect } from "react"

function createRoot(id: string) {
  const elem = document.createElement("div")
  elem.setAttribute("id", id)
  elem.setAttribute("style", "position: absolute;z-index: 9000;")
  return elem
}

function addRootElement(rootElem) {
  if (document.body && document.body.lastElementChild) {
    document.body.insertBefore(
      rootElem,
      document.body.lastElementChild.nextElementSibling
    )
  }
}

function removeElem(elem: HTMLElement) {
  if (elem.parentNode) {
    elem.parentNode.removeChild(elem)
  }
}

export default function usePortal(id: string) {
  const elem = useRef(createRoot(id))
  useEffect(() => {
    addRootElement(elem.current)
    return () => removeElem(elem.current)
  }, [])
  return elem.current
}
