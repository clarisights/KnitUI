import React from "react"
import DropDown from "./Dropdown"
import { EditorState, TreeNode } from "./DataStructure"
import styled from "styled-components"
import { getThemeColor } from "../../common/_utils"
import { ExtractorProps, EditorType, NodeType } from "./types"

const stringRegex = /"([^\\"]|\\")*"/

const expressionRootClass = "knit-ui_root-class"
const expressionInputClass = "knit-ui_input-class"

const validationFn = (val: any): boolean => {
  // mock api request
  const res = !isNaN(val) || stringRegex.test(val)
  // console.log(res)
  return res
}

const ExpressionWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  border: 1px solid ${props => getThemeColor(props, "Azure80")};
  box-sizing: border-box;
  &:focus {
    box-shadow: 0 0 0.2rem #0066ff;
  }
  border-radius: 0.4rem;
  height: 3.2rem;
  font-size: 1.4rem;
  line-height: 2rem;
  padding-left: 1.4rem;
  input {
    border: 0;
    outline: 0;
    color: ${props => getThemeColor(props, "Neutral90")};
    height: 2rem;
    border-radius: 0.4rem;
    margin: 0 0.6rem;
    background-color: inherit;
    padding: 0 0.4rem;
    font-size: 1.4rem;
    line-height: 2rem;
  }
  input[data-value-type="dimension"] {
    background-color: ${props => getThemeColor(props, "Sun10")};
  }
  input[data-valid="false"] {
    border-bottom: 0.1rem dashed ${props => getThemeColor(props, "Crimson80")};
    border-radius: 0.2rem;
    box-sizing: border-box;
  }
  input[data-valid="true"] {
    border-bottom: 0;
  }
  [data-type="expression-root"] {
    color: ${props => getThemeColor(props, "Green80")};
    box-sizing: border-box;
    padding: 0 0.4rem;
    &:focus {
      outline: 1px dashed ${props => getThemeColor(props, "Azure80")};
      box-sizing: border-box;
      background: rgba(209, 225, 250, 0.5);
    }
    &:not(:last-child):after {
      content: ",";
    }
  }
  [data-type="expression-input-root"] {
    &:not(:last-child):after {
      content: ",";
    }
    & > ul {
      margin-top: 1rem;
      border: 1px solid ${props => getThemeColor(props, "Neutral20")};
      box-shadow: 0px 2px 7px rgba(153, 153, 153, 0.3);
      border-radius: 4px;
      padding: 1.4rem 0;
      width: 28rem;
      position: absolute;
      li {
        font-size: 1.4rem;
        line-height: 2rem;
        display: flex;
        justify-content: space-between;
        padding: 0.7rem 1.4rem;
        &:hover {
          background-color: ${props => getThemeColor(props, "Neutral10")};
        }
        span {
          &:nth-child(2) {
            color: ${props => getThemeColor(props, "Neutral45")};
            font-style: italic;
          }
          &:first-child {
            color: ${props => getThemeColor(props, "Green80")};
          }
        }
      }
    }
  }
`

const Extractor: React.FC<ExtractorProps> = props => {
  const { onChangeFn, options } = props
  // initialize root node of the expression
  const rootNode: NodeType = new TreeNode(null)
  // initialize the editor state
  const EditorData: EditorType = new EditorState(rootNode)

  return (
    <ExpressionWrapper tabIndex={0}>
      <DropDown
        EditorData={EditorData}
        onChangeFn={onChangeFn}
        node={rootNode}
        expressionRootClass={expressionRootClass}
        expressionInputClass={expressionInputClass}
        options={options}
        placeholder="Enter your expression"
        validationFn={validationFn}
      />
    </ExpressionWrapper>
  )
}

export default Extractor
