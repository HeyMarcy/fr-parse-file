import { oneOf } from 'prop-types'
import { css } from '@emotion/core'
import styled from '@emotion/styled'

import { theme } from '../theme'
const { buttons } = theme

const Button = styled('button')(
    props =>
        css`
            margin: 2px;
            border-radius: 50px;
            padding: 10px 20px;
            font-size: 16px;
            color: ${buttons[props.kind].color};
            background-color: ${buttons[props.kind].bgColor};
            border: 1px solid ${buttons[props.kind].borderColor};

            &:hover {
                cursor: pointer;
                color: ${buttons[props.kind].hover.color};
                background-color: ${buttons[props.kind].hover.bgColor};
                border: 1px solid ${buttons[props.kind].hover.borderColor};
            }
        `,
    props => {
        if (props.size === 'small') {
            return css`
                padding: 5px 12px;
                font-size: 13px;
            `
        }
    }
)

Button.propTypes = {
    kind: oneOf(['primary', 'ghost']),
    size: oneOf(['small']),
}

Button.defaultProps = {
    kind: 'primary',
    size: null,
}

export default Button
