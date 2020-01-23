import React from 'react'
import { useInput, useFiles } from '../hooks/FileProvider'
import asciiParser from '../utils/ascii-parser.js'

export default function AddFileDataForm() {
    const [ascii, setAscii] = useInput('')
    const { addFile } = useFiles()
    const newFileObj = str => {
        const parsedFile = asciiParser(str)
        addFile(parsedFile.name, parsedFile.faceCount)
    }
    const submit = e => {
        e.preventDefault()
        setAscii()
        return newFileObj(ascii.value)
    }

    return (
        <form onSubmit={submit}>
            <textarea
                {...ascii}
                className="textarea"
                type="text"
                placeholder="Your file"
                required
            />
            <div>
                <button className="btn">Submit</button>
            </div>
        </form>
    )
}
