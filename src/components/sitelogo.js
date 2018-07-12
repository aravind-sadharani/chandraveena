import React from "react"
import styled from "styled-components"
import logo from "../../images/menu-logo.svg"

const Sitelogo = styled.img`
  margin: 0;
  display: inline-block;
  height: 2.4em;
  position: relative;
  top: 0.25em;
`

export default () => (
  <Sitelogo src={logo} />
)
