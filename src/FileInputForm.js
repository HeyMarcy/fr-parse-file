import React, { useState } from 'react'
import asciiParser from '../utils/ascii-parser.js'

export default function FileInputForm({ onNewFile = f => f }) {
    const [ascii, setAscii] = useState('')

    const submit = e => {
        e.preventDefault()
        const ascii = ascii.current.value
        onNewFile(ascii)
        ascii.current.value = ''
    }
    return (
        <form onSubmit={submit}>
            <textarea
                value={ascii}
                onChange={e => setAscii(e.target.value)}
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
