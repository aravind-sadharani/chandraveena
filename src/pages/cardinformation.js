import React from 'react'
import Page from '../layouts/page'
import styled from "styled-components"

const CardInformationContainer = styled.div`
    padding: 20px 0;
    border-radius: 10px;
    background-color: #e1dbdd;
    text-align: center;
    iframe {
        width: 100%;
        height: 3155px;
        overflow: hidden;
    }
`

const CardInformationPage = () => (
    <Page>
        <CardInformationContainer>
            <h1>Form for Chandraveena Cards</h1>
            <p>Please fill the required details in the form below.</p>
            <iframe title='Chandraveena Card Information Form' src="https://docs.google.com/forms/d/e/1FAIpQLSdYD0UNSEJ9ZC1bLOZ3w8xznXt6wXyiPnsfEnXg1kMD2Kdzog/viewform?embedded=true" frameBorder="0" marginHeight="0" marginWidth="0" scrolling="no">Loading…</iframe>
        </CardInformationContainer>
    </Page>
)

export default CardInformationPage