import React from "react"
import styled from "styled-components"
import {media} from "../utils/mediatemplate"
import {Blockimg} from "./icons"
import siteicon from "../../images/SiteBlock.svg"
import abouticon from "../../images/AboutBlock.svg"
import discoicon from "../../images/DiscographyBlock.svg"
import blogicon from "../../images/BlogBlock.svg"
import {Link} from "gatsby"

const Mobilenav = styled.div`
  width: 100%;
  height: 60px;
  background-color: #e1dbdd;
  color: #453e40;
  padding: 0.2rem 0.5rem;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1;
  display: none;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-items: center;
  box-shadow: 0 0 4px 0 #453e40;
  ${media.desktop`display: none`}
  ${media.tablet`display: grid`}
  ${media.phone`display: grid`}
  a {
    text-decoration: none;
    color: inherit;
  };
  font-size: 0.8em;
  text-align: center;
`

export default () => (
  <Mobilenav>
    <div><Link to="/"><Blockimg src={siteicon} />Home</Link></div>
    <div><Link to="/about/"><Blockimg src={abouticon} />About</Link></div>
    <div><Link to="/discography/"><Blockimg src={discoicon} />Discography</Link></div>
    <div><Link to="/blog/"><Blockimg src={blogicon} />Blog</Link></div>
  </Mobilenav>
)
