import React, { createContext, useContext, useState } from 'react'
import stlData from '../stl-data.json'
import { v4 } from 'uuid'

const FileContext = createContext()
export const useFiles = () => useContext(FileContext)

export const FileProvider = ({ children }) => {
    const [files, setFiles] = useState(stlData)

    const addFile = (name, faceCount, area, boundingBox, units) => {
        setFiles([
            ...files,
            {
                id: v4(),
                name,
                faceCount,
                area,
                boundingBox,
                units,
            },
        ])
    }

    const selectUnits = (id, units) => {
        setFiles()
        //set radio btn functionality
    }

    const removeFile = id => setFiles(files.filter(post => post.id !== id))

    return (
        <FileContext.Provider value={{ files, addFile, removeFile }}>
            {children}
        </FileContext.Provider>
    )
}
