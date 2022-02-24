import React from 'react'
import Page from '../layouts/page'
import styled from "styled-components"

const CardInformationContainer = styled.div`
    text-align: center;
    iframe {
        margin: 0;
        width: 100%;
        height: 3250px;
        overflow: hidden;
    }
`

const CardInformationPage = () => {
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'auto' })
    return (
        <Page>
            <CardInformationContainer>
                <h1>Form for Chandraveena Cards</h1>
                <p>Please fill in the required details below.</p>
                <iframe title='Chandraveena Card Information Form' src="https://docs.google.com/forms/d/e/1FAIpQLSdYD0UNSEJ9ZC1bLOZ3w8xznXt6wXyiPnsfEnXg1kMD2Kdzog/viewform?embedded=true" frameBorder="0" marginHeight="0" marginWidth="0" scrolling="no" onLoad={scrollToTop}>Loading…</iframe>
            </CardInformationContainer>
        </Page>
    )
}

export default CardInformationPage