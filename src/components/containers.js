import React from "react"
import styled from "styled-components"
import {media} from "../utils/mediatemplate"

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
`

const Noticewrapper = styled(Wrapper)`
  background-color: #e1dbdd;
  text-align: center;
`

const Pagewrapper = styled(Wrapper)`
  margin: calc(1rem + 62px) auto 1rem;
  ${media.tablet`margin-top: 1rem`}
  ${media.phone`margin-top: 1rem`}
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

const Pagecontainer = ({children}) => (
  <Pagewrapper>{children}</Pagewrapper>
)

export {Outer, Container, Noticebox, Pagecontainer}
