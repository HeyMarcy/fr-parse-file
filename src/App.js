import React from 'react'
import { FileProvider } from './hooks/FileProvider'
import StlList from './FileList/StlList.js'
import FileInputForm from './FileInput/FileInputForm'
import styled from '@emotion/styled'

function App() {
    return (
        <FileProvider>
            <Wrapper>
                <Navbar></Navbar>
                <Main>
                    <FileInputForm />
                    <StlList />
                </Main>
                <Footer></Footer>
            </Wrapper>
        </FileProvider>
    )
}

export default App

const Wrapper = styled.div`
    display: grid;
    grid-template-areas:
        'header'
        'main'
        'footer';
    grid-template-rows: 80px 1fr 120px;
    height: 100vh;
    margin: 0;
`
const Navbar = styled.div`
    grid-area: header;
    background-color: #ffffff;
`
const Main = styled.div`
    grid-area: main;
`
const Footer = styled.div`
    grid-area: footer;
    background-color: #ffffff;
`
