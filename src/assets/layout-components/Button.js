import { css } from '@emotion/core'
import styled from '@emotion/styled'

import { theme } from '../theme'

const Button = styled.button(
    props =>
        css`
            margin: 5px 0 5px 5px;
            border-radius: 50px;
            padding: 0.375rem 2.5rem;
            font-size: 16px;
            font-weight: 600;
            letter-spacing: 0.27px;
            text-transform: uppercase;
            color: #fff;
            background-color: ${theme.buttons.bgColor};
            border: 1px solid transparent;
            border-radius: 0.25rem;
            transition: color 0.15s ease-in-out,
                background-color 0.15s ease-in-out,
                border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

            &:hover {
                cursor: pointer;
                color: #fff;
                background-color: ${theme.altDark};
                border-color: ${theme.altDark};
            }

            &:focus {
                outline: 0;
                border-color: #fff;
                outline-offset: 1px;
                outline: 3px dotted rgba(43, 180, 230, 0.5);
                outline-offset: 1px;
            }

            &:disabled {
                opacity: 0.65;
                color: #fff;
                background-color: #06a7e2;
                border-color: #06a7e2;
            }
        `
)

export default Button
