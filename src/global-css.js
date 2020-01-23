import React from 'react'
import { Global, css } from '@emotion/core'

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
                font-family: 'Helvetica', arial, sans-serif;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
            }

            body {
                margin: 40px;
            }

            a {
                color: blueviolet;
            }
        `}
    />
)
