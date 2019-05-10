import Dialog from 'rc-dialog'
import styled from 'styled-components'
import 'rc-dialog/assets/index.css'

const Container = styled(Dialog)`
  .rc-dialog-body {
    padding: 0;
  }
  .rc-dialog-content {
    border-radius: 4px;
    overflow: hidden;
  }
  overflow: hidden;
`

export default Container
