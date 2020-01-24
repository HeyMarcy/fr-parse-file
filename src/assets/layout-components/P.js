import styled from '@emotion/styled'
import { theme } from '../theme'

const P = styled('p')`
    margin: 0;
    font-size: 16px;
    color: ${theme.textColor};
    line-height: 20px;

    a {
        color: ${theme.linkColor};

        &:hover {
            background-color: ${theme.textColor};
            color: white;
        }
    }
`

export default P
