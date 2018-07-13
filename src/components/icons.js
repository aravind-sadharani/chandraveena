import React from "react"
import styled from "styled-components"
import sitelogo from "../../images/menu-logo.svg"
import searchicon from "../../images/search.svg"

const Inlineimg = styled.img`
  margin: 0;
  display: inline-block;
  height: 1em;
  position: relative;
  top: 0.1em;
`

const Siteimg = styled(Inlineimg)`
  height: 2.5em;
  top: 0.3em;
`

const Searchimg = styled(Inlineimg)`
  height: 1.65em;
  top: 1em;
`

const Searchicon = () => (
  <Searchimg src={searchicon} />
)

const Sitelogo = () => (
  <Siteimg src={sitelogo} />
)

export {Sitelogo, Searchicon, Inlineimg}
