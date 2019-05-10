import Dialog from 'rc-dialog'
import styled from 'styled-components'
import 'rc-dialog/assets/index.css'

const StyledDialog = styled(Dialog)`
  .rc-dialog-body {
    padding: 0;
  }
  .rc-dialog-content {
    border-radius: 4px;
    overflow: hidden;
  }
`

export default StyledDialog