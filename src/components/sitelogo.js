import React from "react"
import styled from "styled-components"
import logo from "../../images/menu-logo.svg"

const Sitelogo = styled.img`
  margin: 0;
  display: inline-block;
  height: 2.5em;
  position: relative;
  top: 0.3em;
`

export default () => (
  <Sitelogo src={logo} />
)
