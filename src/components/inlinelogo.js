import React from "react"
import styled from "styled-components"
import logo from "../../images/menu-logo.svg"

const Inlinelogo = styled.img`
  margin: 0;
  display: inline-block;
  height: 1.2em;
  position: relative;
  top: 0.15em;
`

export default () => (
  <Inlinelogo src={logo} />
)
