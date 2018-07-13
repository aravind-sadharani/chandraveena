import React from "react"
import styled from "styled-components"
import sitelogo from "../../images/menu-logo.svg"
import searchicon from "../../images/search.svg"

const Siteimg = styled.img`
  margin: 0;
  display: inline-block;
  height: 2.5em;
  position: relative;
  top: 0.3em;
`

const Searchimg = styled.img`
  margin: 0;
  display: inline-block;
  height: 1.65em;
  position: relative;
  top: 1em;
`

const Searchicon = () => (
  <Searchimg src={searchicon} />
)

const Sitelogo = () => (
  <Siteimg src={sitelogo} />
)

export {Sitelogo, Searchicon}
