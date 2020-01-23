import React from 'react'
import { FileProvider } from './hooks/FileProvider'
import StlList from './StlList.js'
import FileInputForm from './FileInputForm'

function App() {
    return (
        <FileProvider>
            <FileInputForm />
            <StlList />
        </FileProvider>
    )
}

export default App
