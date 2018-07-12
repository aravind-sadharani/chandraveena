import React from "react"
import styled from "styled-components"
import Sitelogo from "./sitelogo"
import Searchlogo from "./searchlogo"

const Masthead = styled.div`
  width: 100%;
  background-color: #542938;
  color: #ffffff;
  opacity: 0.9;
  padding: 0.5rem 0.5rem;
  display: grid;
  grid-template-columns: 1fr 35px;
  h1 {
    display: inline;
  }
`

export default () => (
  <Masthead>
    <div><Sitelogo /><h1> Chandraveena</h1></div>
    <div><Searchlogo /></div>
  </Masthead>
)
