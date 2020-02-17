import React, { Component } from 'react'
import Helmet from "react-helmet"
import {Container, Outer} from "./containers"
import Masthead from "./masthead"
import Footer from "./footer"
import styled from "styled-components"

const Searchwrapper = styled.div`
  table {
    margin-bottom: 0;
  };
  button {
    padding: 6px 20px 0px 20px;
    border-radius: 3px;
  };
  .gsc-input-box {
    border-radius: 0;
    padding: 0;
  };
  .gsib_b {
    padding-top: 0;
    padding-bottom: 0;
  };
`

class LocalSearch extends Component {
  render() {
    return (
      <Outer>
        <Helmet>
          <script async src="https://cse.google.com/cse.js?cx=014117222396928509438:tvkphh9meod"></script>
          </Helmet>
        <Masthead />
        <Container>
          <Searchwrapper>
            <div className="gcse-search"></div>
          </Searchwrapper>
        </Container>
        <Footer search/>
      </Outer>
    )
  }
}

export default LocalSearch
