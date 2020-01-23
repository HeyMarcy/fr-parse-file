import React from 'react'
import { useFiles } from '../hooks/FileProvider'

export default function StlFile({
    id,
    name,
    faceCount,
    area,
    boundingBox,
    units,
}) {
    const { removeFile } = useFiles()

    return (
        <section>
            <h3>{name}</h3>
            <p>Count: {faceCount}</p>
            <p>Area: {area}</p>
            <p>Bounding Box: {boundingBox}</p>
            <p>units: {units}</p>

            <button onClick={() => removeFile(id)}>x</button>
        </section>
    )
}
