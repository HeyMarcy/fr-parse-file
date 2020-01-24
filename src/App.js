import React from 'react'
import { FileProvider } from './hooks/FileProvider'
import StlList from './FileList/StlList.js'
import { FileInputCard } from './FileInput/FileInputCard'
import FileInputForm from './FileInput/FileInputForm'

import styled from '@emotion/styled'
import { GlobalCSS } from './global-css'

import { LogoIcon, LogoType } from './assets/svg-components/Logos'

function App() {
    return (
        <>
            <GlobalCSS />
            <FileProvider>
                <Wrapper>
                    <NavWrapper>
                        <Navbar>
                            <div className="flex">
                                <LogoIcon />
                                <LogoType />
                            </div>
                            <h4 className="fauxLink">Log In</h4>
                        </Navbar>
                    </NavWrapper>
                    <Main>
                        <MainWrapper>
                            <FileInputCard>
                                <FileInputForm />
                            </FileInputCard>
                            <StlList />
                        </MainWrapper>
                    </Main>
                    <FooterWrapper>
                        <Footer>
                            <h5 className="heading">Work with Marcy</h5>
                        </Footer>
                    </FooterWrapper>
                </Wrapper>
            </FileProvider>
        </>
    )
}

export default App

const Wrapper = styled.div`
    display: grid;
    grid-template-areas:
        'nav'
        'main'
        'footer';
    grid-template-rows: 80px 1fr 120px;
    height: 100vh;
    margin: 0;
`
const NavWrapper = styled.div`
    grid-area: nav;
    background-color: #ffffff;
    padding: 10px 0;
    border-bottom: solid 1px rgba(0, 0, 0, 0.1);
`
const Navbar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1024px;
    height: 50px;
    margin: 0 auto;
    padding: 0 30px;
    & svg {
        margin-right: 1rem;
    }
`
const Main = styled.div`
    grid-area: main;
    width: 100%;
    padding: 0;
    background: #fff;
    @media (min-width: 968px) {
        background: linear-gradient(
            90deg,
            #ffffff 30%,
            #00b2e0 35%,
            #00a8d9 65%,
            #007bbd 100%
        );
    }
`
const MainWrapper = styled.div`
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    height: 100%;
    @media (min-width: 967px) {
        max-width: 1024px;
    }
`

const FooterWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    grid-area: footer;
    background-color: #333;
`

const Footer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1024px;
    margin: 50px auto;
    padding: 0 30px;
    & .heading {
        margin: 0;
        font-size: 2rem;
        font-weight: 600;
        color: #ffffff;
    }
    & svg {
        margin-right: 1rem;
    }
`
