import React from "react"
import styled from "styled-components"

const Outerwrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Wrapper = styled.div`
  margin: 1rem auto;
  width: calc(100% - 2rem);
  max-width: 800px;
  padding: 0.5rem 1rem;
  color: #453e40;
  background-color: #ffffff;
  border: 0;
  border-radius: 0.3rem;
  h1 {
    text-align: center;
  };
  flex: 1;
  a {
    text-decoration: none;
    color: #859e6b;
    font-weight: 700;
  };
  .gatsby-resp-image-image, .gatsby-resp-image-background-image {
    border-radius: 0.3rem;
    box-shadow: 0 0 4px 0 #453e40;
  }
`

const Noticewrapper = styled(Wrapper)`
  background-color: #e1dbdd;
  text-align: center;
`

const Searchwrapper = styled.div`
  input {
    display: inline-block;
    width: 80%;
  };
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  };
  .ais-SearchBox-submit, .ais-SearchBox-reset {
    background: #859e6b;
    border: 0;
    border-radius: 0.2rem;
    margin: 0 0 0 0.2rem;
    padding: 0.2rem;
  };
  .ais-SearchBox-submitIcon {
    stroke: #ffffff;
    fill: #ffffff;
    height: 1.2em;
    width: 1.2em;
    position: relative;
    top: 0.2em;
  };
  .ais-SearchBox-resetIcon {
    stroke: #859e6b;
    fill: #ffffff;
    height: 1.2em;
    width: 1.2em;
    position: relative;
    top: 0.2em;
  };
`

const Outer = ({children}) => (
  <Outerwrapper>{children}</Outerwrapper>
)

const Container = ({children}) => (
  <Wrapper>{children}</Wrapper>
)

const Noticebox = ({children}) => (
  <Noticewrapper>{children}</Noticewrapper>
)

const SearchContainer = ({children}) => (
  <Searchwrapper>{children}</Searchwrapper>
)

export {Outer, Container, Noticebox, SearchContainer}
