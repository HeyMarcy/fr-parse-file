import React from 'react'
import StlFile from './StlFile'
import { useFiles } from '../hooks/FileProvider'

export default function StlList() {
    const { files } = useFiles()
    console.log(files)
    return (
        <div>
            {files.length === 0 ? (
                <p>Add an ASCII formatted STL file.</p>
            ) : (
                files.map(file => <StlFile key={file.id} {...file} />)
            )}
        </div>
    )
}
