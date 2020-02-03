import React, { useRef, useState, useEffect } from "react"
import Exp from "./Expression"
import DownSelect from "./DownSelect"
import { DropdownProps } from "./types"

const Drop = (props: DropdownProps) => {
  const {
    placeholder,
    EditorData,
    node,
    initialFocus = false,
    options,
    validationFn,
    onChangeFn,
    expressionRootClass,
    expressionInputClass,
  } = props

  const [value, setValue] = useState<string>("")
  const [exp, setExp] = useState<boolean>(false)
  const dropRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (dropRef.current && initialFocus) {
      dropRef.current.focus()
    }
  }, [dropRef.current])

  const fnKeys: string[] = options
    .filter(fn => fn.type === "function")
    .map(fn => fn.key)

  const getValueType = value => {
    if (fnKeys.includes(value.toLowerCase())) return "fn"
    const listOption = options.find(option => option.label === value)
    return listOption ? listOption.type : "string"
  }

  const getValueData = (type, value) => {
    if (type === "fn") {
      return options.find(f => f.key === value.toLowerCase())
    }
    return value
  }

  const handleValueChange = e => {
    const val = e.target.value
    const valueType = getValueType(val)
    const valueData = getValueData(valueType, val)
    setValue(val)
    node.setValue({ data: valueData, type: valueType })

    // In case the input is a function, scaffold it's params
    if (valueType === "fn") setExp(true)

    if (onChangeFn) onChangeFn(EditorData)
    // console.log(EditorData.buildExpression())
  }

  const getNextNode = () => {
    let currElement
    if (dropRef.current) {
      currElement = dropRef.current.parentElement
    }
    // if the present element has a next sibling, directly switch to next
    if (currElement.nextElementSibling)
      currElement = currElement.nextElementSibling
    // else keep going levels up till you find a next node
    // else {
    // 	currElement = currElement.parentNode
    // }
    // this is when you want to skip the top levels and only play in text fields
    else {
      while (!currElement.nextElementSibling)
        currElement = currElement.parentElement
      currElement = currElement.nextElementSibling
    }
    // while (rootClasses.includes(finalElement.dataset.type)) {
    // 	finalElement = finalElement.firstElementChild
    // }

    if (currElement.dataset.type !== "expression-root")
      currElement = currElement.firstElementChild

    return currElement
  }

  const getPrevNode = () => {
    let currElement
    if (dropRef.current) {
      currElement = dropRef.current.parentElement
    }
    // if the present element has a next sibling, directly switch to next
    if (currElement.previousElementSibling)
      currElement = currElement.previousElementSibling
    // else {
    // 	currElement = currElement.parentNode
    // }
    // else keep going levels up till you find a next node
    else {
      if (!currElement.previousElementSibling)
        currElement = currElement.parentElement
      // if (currElement.dataset.type === 'expression-root' && initialFocus)
      // 	return currElement
      // currElement = currElement.lastElementChild
    }
    // some transitions as per the element we arrive on
    while (currElement.dataset.type === "expression-root" && !initialFocus) {
      currElement = currElement.lastElementChild
    }
    if (currElement.dataset.type === "expression-input-root") {
      currElement = currElement.firstElementChild
    }
    // console.log(currElement)
    return currElement
  }

  const handleDir = e => {
    e.stopPropagation()
    const inputNode = dropRef.current!
    switch (e.keyCode) {
      case 39:
        // only when I'm at last caret position
        if (inputNode.selectionStart !== inputNode.value.length) return
        e.preventDefault()
        const nextNode = getNextNode()
        if (nextNode) nextNode.focus()
        return
      case 37:
        // only when at caret position is 0
        if (inputNode.selectionStart !== 0) return
        e.preventDefault()
        const prevNode = getPrevNode()
        if (prevNode) prevNode.focus()
        return
      default:
        return
    }
  }

  if (!exp) {
    // this is an approximation
    // let inputLen = `${(value
    // 	? value.length
    // 	: placeholder && placeholder.length) * 8}px`
    // if (dropRef.current) inputLen = dropRef.current.scrollWidth
    return (
      <DownSelect
        inputRef={dropRef}
        inputPlaceholder={placeholder}
        options={options}
        onKeyDown={e => handleDir(e)}
        inputValue={value}
        validationFn={validationFn}
        expressionInputClass={expressionInputClass}
        handleValueChange={handleValueChange}
      />
    )
  }
  return (
    <Exp
      EditorData={EditorData}
      options={options}
      setExp={setExp}
      setValue={setValue}
      node={node}
      onChangeFn={onChangeFn}
      validationFn={validationFn}
      expressionRootClass={expressionRootClass}
      expressionInputClass={expressionInputClass}
      fname={value}
    />
  )
}

export default Drop
