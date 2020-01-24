import React from 'react'
import Button from '../assets/layout-components/Button'
import { useInput, useFiles } from '../hooks/FileProvider'
import asciiParser from '../utils/ascii-parser.js'
import styled from '@emotion/styled'
import { theme } from '../assets/theme'

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
            <Textarea
                {...ascii}
                type="text"
                placeholder="Paste an ascii formatted file here."
                required
            />
            <Submit>
                <span className="muted">
                    Submit files to save them to your account.
                </span>
                <Button>Submit</Button>
            </Submit>
        </form>
    )
}

const Textarea = styled.textarea`
    border: 3px solid #eff0f1;
    border-radius: 4px;
    background-color: #f1f3f5;
    margin: 0 0 1.5rem 0;
    width: 100%;
    height: 200px;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
        border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    &:focus {
        outline: 0;
        background-color: #f8f9fa;
        border-color: #fff;
        outline: 3px dotted rgba(43, 180, 230, 0.5);
        outline-offset: 1px;
    }
    &::placeholder {
        color: ${theme.linkColor};
        font-size: 1.125rem;
        text-align: center;
        line-height: 180px;
    }
`
const Submit = styled.div`
    display: inline-grid;
    width: 100%;
    grid-template-columns: auto auto;
    align-items: center;
    justify-content: space-between;
    grid-gap: 3px;
    & .muted {
        font-size: 13px;
    }
`
