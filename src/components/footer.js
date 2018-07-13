import React from "react"
import styled from "styled-components"
import {media} from "../utils/mediatemplate"

const Footer = styled.div`
  width: 100%;
  background-color: #453e40;
  color: #e1dbdd;
  opacity: 0.9;
  padding: 0.5rem 0.5rem;
  margin-bottom: 0;
  ${media.desktop`margin-bottom: 0`}
  ${media.tablet`margin-bottom: 60px`}
  ${media.phone`margin-bottom: 60px`}
  ul {
    margin: 0;
    padding: 0;
  };
  p {
    margin: 0;
    padding: 0;
  };
  li {
    display: inline-block;
    margin: 0;
  };
  a {
    text-decoration: none;
    color: inherit;
  };
`

export default () => (
  <Footer>
    <ul>
      <li><a href="contact.html">Contact |&nbsp;</a></li>
      <li><a href="terms.html">Terms of Use |&nbsp;</a></li>
      <li><a href="sitemap.html">Sitemap</a></li>
    </ul>
    <p>Copyright &copy; 2018 - S. Balachander</p>
  </Footer>
)
