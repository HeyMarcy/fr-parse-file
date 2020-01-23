import React, { useState } from 'react'
import asciiParser from './utils/ascii-parser.js'

export const useInput = initialValue => {
    const [value, setValue] = useState(initialValue)
    return [
        { value, onChange: e => setValue(e.target.value) },
        () => setValue(initialValue),
    ]
}

export default function FileInputForm({ onNewFile = f => f }) {
    const [ascii, resetAscii] = useInput('')

    const submit = e => {
        e.preventDefault()
        onNewFile(ascii.value)
        resetAscii('')
    }
    return (
        <form onSubmit={submit}>
            <textarea
                {...ascii}
                className="textarea"
                type="text"
                placeholder="Paste ASCII format file"
                required
            />
            <div>
                <button className="btn">Submit</button>
            </div>
        </form>
    )
}
