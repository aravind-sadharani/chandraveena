import React from "react"
import styled from "styled-components"
import logo from "../../images/menu-logo.svg"

const Inlinelogo = styled.img`
  margin: 0;
  display: inline-block;
  height: 2.8em;
  position: relative;
  top: 0.3em;
`

export default () => (
  <Inlinelogo src={logo} />
)
