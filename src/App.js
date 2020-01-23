import React from 'react'
import { FileProvider } from './hooks/FileProvider'
import StlList from './FileList/StlList.js'
import FileInputForm from './FileInput/FileInputForm'

function App() {
    return (
        <FileProvider>
            <FileInputForm />
            <StlList />
        </FileProvider>
    )
}

export default App
