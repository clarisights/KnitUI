import React, {
  Component,
  useState,
  useRef,
  useEffect,
  HTMLAttributes,
  RefObject,
} from "react"
import ReactDOM from "react-dom"
import { usePortal, useOutsideClick } from "../../common/hooks"
import { ITriggerProps } from "./types"

/**
 *
 * @param root element
 * @param child node element
 * check if child is present in parent
 */
export function contains(root: any, node: any) {
  while (node) {
    if (node === root) {
      return true
    }
    node = node.parentNode
  }
  return false
}

const getPosition = target => {
  if (target && target.top) {
    return target
  }
  if (target.getBoundingClientRect) {
    const rect = target.getBoundingClientRect()
    return {
      top: rect.top,
      left: rect.left,
      height: rect.height,
    }
  }
}

/**
 *
 * @param overlayElem overlay to render/ elem to align
 * @param target the elem which is clicked to render overlay
 * @param getPopUpContainer returns target's parent
 * @param portalElem portal's main div
 * align parent elemenet below the target
 */
const alignTarget = (overlayElem, target, getPopUpContainer, portalElem) => {
  const position = getPosition(target)
  const container = getPopUpContainer(target)
  if (overlayElem && container) {
    const rect = overlayElem.getBoundingClientRect()
    const containerRect = container.getBoundingClientRect()
    const right = position.left + rect.width
    if (right > containerRect.right) {
      portalElem.style.left = `${position.left -
        (right - containerRect.right)}px`
    } else {
      portalElem.style.left = `${position.left}px`
    }
    portalElem.style.top = `${position.top + position.height + 7}px`
  }
}

export default function Trigger(props: ITriggerProps) {
  const { children, overlay } = props
  const target = usePortal("trigger")
  const [visible, setVisible] = useState(false)
  function onOutsideClick(elem: HTMLElement, visible: boolean) {
    if (!contains(ref.current, elem) && visible) {
      setVisible(false)
    }
  }
  useOutsideClick(onOutsideClick, [visible])
  const ref = useRef(null)
  const triggerRef: RefObject<HTMLElement> = useRef(null)
  const newChildProps: HTMLAttributes<HTMLElement> & { key: string } = {
    key: "trigger",
  }
  const handleClick = () => {
    setVisible(!visible)
  }
  const getPopUpContainer = () =>
    triggerRef.current && triggerRef.current.parentElement
  useEffect(() => {
    if (visible) {
      alignTarget(ref.current, triggerRef.current, getPopUpContainer, target)
    }
  }, [visible])
  newChildProps.onClick = handleClick
  const childElement = React.Children.only(children) as React.ReactElement
  const triggerElem = React.cloneElement(childElement, {
    ref: triggerRef,
    ...newChildProps,
  })
  const popup = <div ref={ref}>{overlay}</div>
  const portal = visible ? ReactDOM.createPortal(popup, target) : null
  return (
    <>
      {triggerElem}
      {portal}
    </>
  )
}
