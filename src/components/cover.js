import React from "react"
import styled from "styled-components"
import logo from "../../images/logo.svg"

const Cover = styled.div`
  position: relative;
  margin: 3rem auto 2rem;
  width: 65vw;
  max-width: 800px;
  height: 65vh;
  border-radius: 1rem;
  background-color: #859e6b;
  background-image: url(${logo});
  background-size: 45vmin;
  background-repeat: no-repeat;
  background-position: center;
  padding: 1rem;
  h3 {
    color: #542938;
    font-weight: 400;
    padding: 0;
    margin: 0;
  }
`

const Credits = styled.div`
`

const Caption = styled.div`
  text-align: right;
  position: absolute;
  bottom: 1rem;
  right: 1rem;
`

const Cta = styled.a`
  display: inline-block;
  border-radius: 0.3rem;
  padding: 0.3rem 0;
  margin: 0;
  width: 9rem;
  background: #542938;
  text-align: center;
  text-decoration: none;
  color: white;
  border: 0;
  font-size: 1.1em;
  font-weight: "700";
`

export default () => (
  <Cover>
    <Credits>
      <h3>Maarga Sangeet</h3>
      <h3>by S. Balachander</h3>
    </Credits>
    <Caption>
      <h3>Experience the music</h3>
      <Cta href="intro.html">Listen Now</Cta>
    </Caption>
  </Cover>
)
