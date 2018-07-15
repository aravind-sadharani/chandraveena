import React from "react"
import styled from "styled-components"
import {media} from "../utils/mediatemplate"
import {Link} from "gatsby"
const author = "S. Balachander"
const designer = {
  "name": "Aravind Iyer",
  "url": "https://www.aravindiyer.com"
}

const Footer = styled.div`
  width: 100%;
  background-color: #453e40;
  color: #e1dbdd;
  font-size: 0.8em;
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

const Footercontent = styled.div`
  margin: 0 auto;
  max-width: 800px;
`

export default () => (
  <Footer>
    <Footercontent>
      <ul>
        <li><Link to="/contact/">Contact |&nbsp;</Link></li>
        <li><Link to="/terms/">Terms of Use |&nbsp;</Link></li>
        <li><Link to="/sitemap/">Sitemap</Link></li>
      </ul>
      <p>Copyright &copy; 2018 - <Link to="/">{author}</Link></p>
      <p>Designed and Developed by <a href={designer.url}>{designer.name}</a></p>
    </Footercontent>
  </Footer>
)
