import React from 'react'
import { ListItem, DeleteBtn } from '../assets/layout-components/Sidebar'
import { useFiles } from '../hooks/FileProvider'
import { CircleX } from '../assets/svg-components/CircleX'

import '../App.css'
export default function StlFile({
    id,
    name,
    faceCount,
    // area,
    // boundingBox,
    // units,
}) {
    const { removeFile } = useFiles()

    return (
        <ListItem className="list-item flex-space-between ">
            <div className="flex-baseline">
                <h3>{name}</h3>
                <p>
                    Face Count: <span className="strong">{faceCount}</span>
                </p>
            </div>
            <DeleteBtn onClick={() => removeFile(id)}>
                <CircleX />
                <p>Delete</p>
            </DeleteBtn>
        </ListItem>
    )
}
