import React, { Component, RefObject } from "react"
import styled from "styled-components"
import Dialog from "rc-dialog"
import Input from "../Input"
import { OmniSearchProps } from "./types"

import "rc-dialog/assets/index.css"

const StyledDialog = styled(Dialog)`
  .rc-dialog-body {
    padding: 7px 0;
  }
`

const InputWrapper = styled.div`
  padding: 0.7rem 1.4rem;
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

const getColor = (props: any, color: string) => {
  const {
    theme: { knitui },
  } = props
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
          <Input
            type="search"
            role="search"
            autoFocus
            inputSize="large"
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
