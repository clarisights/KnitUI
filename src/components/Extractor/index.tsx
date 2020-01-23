import React from "react"
import Expression, { EditorState, TreeNode } from "react-expression-builder"
import { functions, staticValues } from "./helpers"

const options = [...functions, ...staticValues]

const stringRegex = /"([^\\"]|\\")*"/

const onChangeFn = st => console.log("change", st)
const expressionRootClass = "root-class"
const expressionInputClass = "input-class"

const validationFn = val => {
  // mock api request
  const res = !isNaN(val) || stringRegex.test(val)
  // console.log(res)
  return res
}

export default function Extractor(props) {
  const EditorData = new EditorState()
  const rootNode = new TreeNode(null)
  EditorData.initRoot(rootNode)
  return (
    <Expression
      EditorData={EditorData}
      onChangeFn={onChangeFn}
      node={rootNode}
      expressionRootClass={expressionRootClass}
      expressionInputClass={expressionInputClass}
      options={options}
      placeholder="Enter your expression"
      validationFn={validationFn}
    />
  )
}
