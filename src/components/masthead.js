import React from "react"
import styled from "styled-components"
import {Sitelogo, Searchicon, Inlineimg} from "./icons"
import {media} from "../utils/mediatemplate"
import introicon from "../../images/Introduction.svg"
import abouticon from "../../images/About.svg"
import discoicon from "../../images/Discography.svg"
import blogicon from "../../images/Blog.svg"
import {Link} from "gatsby"
import Headroom from "react-headroom"
const title = "Chandraveena"

const Masthead = styled.div`
  width: 100%;
  background-color: #542938;
  color: #ffffff;
  opacity: 0.9;
  padding: 0.5rem 0.5rem;
  box-shadow: 0 0 4px 0 #453e40;
`

const Mastheadcontent = styled.div`
  margin: 0 auto;
  max-width: 800px;
  display: grid;
  grid-template-columns: 255px 1fr 35px;
  h1 {
    display: inline;
  }
`

const Home = styled.div`
  a {
    text-decoration: none;
    color: inherit;
  };
  text-align: left;
  grid-column: 1/2;
`

const Nav = styled.div`
  text-align: left;
  font-size: 1.1em;
  padding-top: 1.2rem;
  padding-left: 2rem;
  ul {
    margin: 0;
    padding: 0;
  };
  li {
    display: inline-block;
    margin: 0 0.5rem;
  };
  a {
    text-decoration: none;
    color: inherit;
  };
  ${media.tablet`display:none`}
  ${media.phone`display:none`}
`

const Search = styled.div`
  text-align: right;
  grid-column: 3/4;
`

export default () => (
  <Headroom>
    <Masthead>
      <Mastheadcontent>
        <Home><Link to="/"><Sitelogo /><h1> {title}</h1></Link></Home>
        <Nav>
          <ul>
            <li><Link to="/about/"><Inlineimg src={abouticon}/> About</Link></li>
            <li><Link to="/discography/"><Inlineimg src={discoicon}/> Discography</Link></li>
            <li><Link to="/blog/"><Inlineimg src={blogicon}/> Blog</Link></li>
            <li><Link to="/support/"><Inlineimg src={introicon}/> Support</Link></li>
          </ul>
        </Nav>
        <Search><Link to="/searchpage/"><Searchicon /></Link></Search>
      </Mastheadcontent>
    </Masthead>
  </Headroom>
)
