import React from "react"
import styled from "styled-components"
import {media} from "../utils/mediatemplate"

const Mobilenav = styled.div`
  width: 100%;
  height: 60px;
  background-color: #e1dbdd;
  color: #453e40;
  padding: 0.5rem 0.5rem;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1;
  display: grid;
  grid-template-columns; 1fr 1fr 1fr 1fr;
  display: none;
  box-shadow: 0 0 4px 0 #453e40;
  ${media.desktop`display:none`}
  ${media.tablet`display:initial`}
  ${media.phone`display:initial`}
  ul {
    margin: 0;
    padding: 0;
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

export default () => (
  <Mobilenav>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="about.html">About</a></li>
      <li><a href="discography.html">Discography</a></li>
      <li><a href="blog.html">Blog</a></li>
    </ul>
  </Mobilenav>
)
