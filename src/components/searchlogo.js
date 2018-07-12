import React from "react"
import styled from "styled-components"
import logo from "../../images/search.svg"

const Searchlogo = styled.img`
  margin: 0;
  display: inline-block;
  height: 2em;
  position: relative;
  top: 1em;
`

export default () => (
  <Searchlogo src={logo} />
)
