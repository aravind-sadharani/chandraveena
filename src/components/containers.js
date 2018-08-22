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

const Outer = ({children}) => (
  <Outerwrapper>{children}</Outerwrapper>
)

const Container = ({children}) => (
  <Wrapper>{children}</Wrapper>
)

const Noticebox = ({children}) => (
  <Noticewrapper>{children}</Noticewrapper>
)

export {Outer, Container, Noticebox}
