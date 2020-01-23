import React from 'react'

export const CircleX = ({ width = '20px' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width={width}>
        <g
            fill="none"
            stroke="#007bbd"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="8"
        >
            <path d="M35.076 35.077l29.848 29.847M35.076 64.923l29.848-29.847" />
        </g>
        <circle
            cx="50"
            cy="50"
            r="39.083"
            fill="none"
            stroke="#007bbd"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="8"
        />
    </svg>
)
