import React, { Component, RefObject } from "react"
import styled from "styled-components"
import Dialog from "rc-dialog"
import Icon from "../Icon"
import { OmniSearchProps } from "./types"

import "rc-dialog/assets/index.css"

const StyledDialog = styled(Dialog)`
  .rc-dialog-body {
    padding: 7px 0;
  }
`

const InputWrapper = styled.div`
  padding: 10px;
  display: flex;
  margin: 7px 14px;
  align-items: center;
  &:focus-within {
    border: 1px solid ${props => getColor(props, "Azure80")};
    box-shadow: 0px 0px 2px #0066ff;
    border-radius: 4px;
  }
`

const StyledInput = styled.input`
  width: 100%;
  border: none;
  font-size: 1.6rem;
  margin-left: 1rem;
  height: 2rem;
  &::placeholder {
    color: ${props => getColor(props, "Neutral45")};
  }
`

const getColor = (props:any, color: string) => {
  const { theme: { knitui } } = props
  return knitui.chromaPalette[color]
}

class OmniSearch extends Component<OmniSearchProps> {
  searchRef: RefObject<HTMLInputElement>
  constructor(props: OmniSearchProps) {
    super(props)
    this.searchRef = React.createRef<HTMLInputElement>()
  }

  focusSearch = () => this.searchRef.current && this.searchRef.current.focus()

  componentDidUpdate(prevProps: OmniSearchProps) {
    const { visible } = this.props
    if (visible && !prevProps.visible) {
      this.focusSearch()
    }
  }

  render() {
    const {
      visible,
      onClose,
      onChange,
      value = "",
      dropdown = null,
      placeholder = "Search for a report",
    } = this.props

    return (
      <StyledDialog visible={visible} onClose={onClose} closable={false}>
        <InputWrapper>
          <Icon type={"oSearch"} size={"1.8rem"} fill="#A6A6A6" />
          <StyledInput
            type="search"
            role="search"
            autoFocus
            value={value}
            onChange={onChange}
            onBlur={this.focusSearch}
            placeholder={placeholder}
            ref={this.searchRef}
          />
        </InputWrapper>
        {dropdown}
      </StyledDialog>
    )
  }
}

export default OmniSearch
