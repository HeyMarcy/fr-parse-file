import React from 'react'
import { Global, css } from '@emotion/core'
import { theme } from './assets/theme'

export const GlobalCSS = () => (
    <Global
        styles={css`
            * {
                box-sizing: border-box;
            }

            body,
            html {
                margin: 0;
                padding: 0;
                width: 100%;
                height: 100%;
                color: #333333;
                font-family: 'Libre Franklin', 'Helvetica Neue', Helvetica,
                    Arial, sans-serif;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
            }
            .flex {
                display: flex;
            }
            .flex-space-between {
                display: flex;
                justify-content: space-between;
            }
            .flex-baseline {
                display: flex;
                align-items: baseline;
            }
            .flex-center {
                display: flex;
                align-items: center;
            }
            .ml-auto {
                margin-left: auto;
            }
            .mr-5 {
                margin-right: 5px;
            }

            /* TYPOGRAPHY */
            .title {
                color: #495057;
                border-bottom: 1px solid #dee2e6;
                padding-bottom: 1rem;
                margin-bottom: 0;
                text-transform: uppercase;
                font-size: 2rem;
                font-weight: 600;
            }
            .p-large {
                font-size: 1.125rem;
            }
            .fauxLink {
                color: ${theme.linkColor};
                text-decoration: none;
                font-size: 16px;
                font-weight: 600;
                margin: 0;
                &:hover {
                    color: ${theme.altDark};
                }
            }
        `}
    />
)
