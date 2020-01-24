import React from 'react'
import StlFile from './StlFile'
import { Sidebar, List } from '../assets/layout-components/Sidebar'
import { useFiles } from '../hooks/FileProvider'

export default function StlList() {
    const { files } = useFiles()
    return (
        <Sidebar>
            <List>
                {files.length === 0 ? (
                    <li>Add an ASCII format STL file.</li>
                ) : (
                    files.map(file => <StlFile key={file.id} {...file} />)
                )}
            </List>
        </Sidebar>
    )
}
