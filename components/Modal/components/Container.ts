import Dialog from 'rc-dialog'
import styled from 'styled-components'
import 'rc-dialog/assets/index.css'

const Container = styled(Dialog)`
  .rc-dialog-body {
    padding: 0;
    height: calc(100vh - 14rem);
    min-height: 35rem;
  }
  .rc-dialog-content {
    border-radius: 4px;
  }
`

export default Container
