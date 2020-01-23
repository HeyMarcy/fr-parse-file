import styled from '@emotion/styled'
import { theme } from '../theme'

const P = styled('p')`
    margin: 0 0 20px 0;
    font-size: 16px;
    color: ${theme.textColor};
    line-height: 20px;

    a {
        color: #c0ff33;

        &:hover {
            color: hotpink;
        }
    }
`

export default P
