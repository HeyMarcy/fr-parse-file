import React from 'react'
import styled from '@emotion/styled'

export const FileInputCard = ({ children }) => {
    return (
        <Card>
            <h2 className="title">Get a Quote</h2>
            <p className="mb40">
                Check the folder <q>STLFiles</q>for sample files.
            </p>
            <div>{children}</div>
        </Card>
    )
}

const Card = styled.div`
    background-color: #fff;

    display: flex;
    flex-direction: column;
    margin: 0 auto;

    padding: 0 30px 2.5rem 30px;
    & p {
        margin-bottom: 1.5rem;
    }
    @media (min-width: 967px) {
        padding: 0 2.25rem 0 0;
    }
`
