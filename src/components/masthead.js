import React from "react"
import styled from "styled-components"
import {Sitelogo, Searchicon} from "./icons"
import {media} from "../utils/mediatemplate"

const Masthead = styled.div`
  width: 100%;
  background-color: #542938;
  color: #ffffff;
  opacity: 0.9;
  padding: 0.5rem 0.5rem;
  display: grid;
  grid-template-columns: 255px 1fr 35px;
  h1 {
    display: inline;
  }
  box-shadow: 0 0 4px 0 #453e40;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  ${media.phone`
    position: relative;
    z-index: 0;
  `}
  ${media.tablet`
    position: relative;
    z-index: 0;
  `}
`

const Home = styled.div`
  a {
    text-decoration: none;
    color: inherit;
  };
  text-align: left;
`

const Nav = styled.div`
  text-align: left;
  padding-top: 1.2rem;
  padding-left: 2rem;
  ul {
    margin: 0;
    padding: 0;
    ${media.tablet`display:none`}
    ${media.phone`display:none`}
  };
  li {
    display: inline-block;
    margin: 0 0 0 1rem;
  };
  a {
    text-decoration: none;
    color: inherit;
  };
`

const Search = styled.div`
  text-align: right;
`

export default () => (
  <Masthead>
    <Home><a href="/"><Sitelogo /><h1> Chandraveena</h1></a></Home>
    <Nav>
      <ul>
        <li><a href="about.html">About</a></li>
        <li><a href="discography.html">Discography</a></li>
        <li><a href="blog.html">Blog</a></li>
      </ul>
    </Nav>
    <Search><Searchicon /></Search>
  </Masthead>
)
