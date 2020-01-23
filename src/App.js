import React, { useState } from 'react'
import './App.css'
import FileInputForm from './FileInputForm'
import stlData from './stl-data.json'
import { v4 } from 'uuid'

function App() {
    const [files, setFiles] = useState(stlData)
    return (
        <div className="App">
            <FileInputForm
                onNewFile={ascii => {
                    const newFiles = [
                        ...files,
                        {
                            id: v4(),
                            rating: 0,
                            ascii,
                        },
                    ]
                    setFiles(newFiles)
                }}
            />
        </div>
    )
}

export default App
