import React from "react"
import styled from "styled-components"
import {media} from "../utils/mediatemplate"
import {Link} from "gatsby"
import {Inlineimg} from "./icons"
import designlogo from "../../images/aravind-logo.svg"
const author = "S. Balachander"
const designer = {
  "name": "Aravind Iyer",
  "url": "https://www.aravindiyer.com"
}

const ShortFooter = styled.div`
  width: 100%;
  background-color: #453e40;
  color: #e1dbdd;
  font-size: 0.8em;
  opacity: 0.9;
  padding: 0.5rem 0.5rem;
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
  margin-bottom: 0;
`

const TallFooter = styled(ShortFooter)`
  ${media.desktop`margin-bottom: 0`}
  ${media.tablet`margin-bottom: 60px`}
  ${media.phone`margin-bottom: 60px`}
`

const Footercontent = styled.div`
  margin: 0 auto;
  max-width: 800px;
`

export default ({search}) => {
  let Footer = search ? ShortFooter : TallFooter
  return (
    <Footer>
      <Footercontent>
        <ul>
          <li><Link to="/contact/">Contact |&nbsp;</Link></li>
          <li><Link to="/acknowledgments/">Acknowledgments |&nbsp;</Link></li>
          <li><Link to="/press/">Press Coverage |&nbsp;</Link></li>
          <li><Link to="/terms/">Site Terms</Link></li>
        </ul>
        <p>Licensed under <a rel="license" href="https://creativecommons.org/licenses/by-nc-nd/4.0/">(CC) BY-NC-ND</a> by <Link to="/">{author}</Link></p>
        <p>Designed and Developed by <a href={designer.url}>{designer.name} <Inlineimg src={designlogo}/></a></p>
      </Footercontent>
    </Footer>
  )
}
