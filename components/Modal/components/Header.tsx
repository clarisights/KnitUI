import React from 'react'
import styled from 'styled-components'
import Section from './Section'

const StyledDiv = styled(Section)`
  font-size: 20px;
  line-height: 30px;
  background: #F2F2F2
`

export default ({ title }) => <StyledDiv>{title}</StyledDiv>
