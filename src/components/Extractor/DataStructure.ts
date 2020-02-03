import { NodeType } from "./types"

export class TreeNode {
  value: null
  children: NodeType[]
  constructor(value) {
    this.value = value
    this.children = []
  }

  addChild(node: NodeType) {
    this.children.push(node)
  }

  setValue(val) {
    this.value = val
  }

  clearChildren() {
    this.children = []
  }
}

export class EditorState {
  root: NodeType

  constructor(node) {
    this.root = node
  }

  buildExpression = (node: NodeType = this.root): string => {
    let str = ""
    if (node.value.type !== "fn") return node.value.data
    node.children.forEach((child, idx) => {
      str += this.buildExpression(child)
      str += idx === node.children.length - 1 ? "" : ", "
    })
    return `${node.value.data.label} (${str})`
  }
}
