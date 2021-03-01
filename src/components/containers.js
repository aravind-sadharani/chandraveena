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
  audio {
    display: block;
    margin: 0 auto;
  };
  blockquote {
    text-align: center;
  };
`

const Noticewrapper = styled(Wrapper)`
  background-color: #e1dbdd;
  text-align: ${props => props.center ? "center" : "left"};
`

const Outer = ({children}) => (
  <Outerwrapper>{children}</Outerwrapper>
)

const Container = ({children}) => (
  <Wrapper>{children}</Wrapper>
)

const Noticebox = ({center, children}) => (
  <Noticewrapper center={center}>{children}</Noticewrapper>
)

export {Outer, Container, Noticebox}
