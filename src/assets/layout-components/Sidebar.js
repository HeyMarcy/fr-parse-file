import { css } from '@emotion/core'
import styled from '@emotion/styled'

import { theme } from '../theme'

export const Sidebar = styled.div(
    props =>
        css`
            display: flex;
            flex-direction: column;
            padding: 2rem;
            color: #868e96;
            background: transparent;
            @media (max-width: 967px) {
                width: 100%;
                background: linear-gradient(
                    90deg,
                    #00b2e0 35%,
                    #00a8d9 65%,
                    #007bbd 100%
                );
            }
        `
)
export const List = styled.ul(
    props =>
        css`
            list-style: none;
            margin: 0;
            padding-inline-start: 0;
        `
)
export const ListItem = styled.li(
    props =>
        css`
            display: flex;
            padding: 1.5rem;
            margin: auto;
            margin-bottom: 1.5rem;
            border: 1px solid #ced4da;
            border-radius: 4px;
            background-color: #f8f9fa;
            width: 100%;
            max-width: 560px;
            & h3 {
                font-size: 1.5rem;
                margin: 0 1.5rem 0 0;
            }
        `
)

export const DeleteBtn = styled.ul(
    props =>
        css`
            color: ${theme.linkColor};
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 0.85rem;
        `
)
