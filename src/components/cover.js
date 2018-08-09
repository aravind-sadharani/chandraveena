import React from "react"
import styled from "styled-components"
import logo from "../../images/logo.svg"
import {Cta} from "./buttons"
import {media} from "../utils/mediatemplate"

const Cover = styled.div`
  position: relative;
  margin: calc(2rem + 62px) auto 1rem;
  width: 65vw;
  max-width: 500px;
  height: 65vh;
  max-height: 500px;
  border-radius: 1rem;
  background-color: #859e6b;
  background-image: url(${logo});
  background-size: 50vmin;
  @media screen and (min-height: 769px) and (min-width: 769px) {
    background-size: 385px;
  }
  background-repeat: no-repeat;
  background-position: center;
  padding: 1rem;
  box-shadow: 0 0 4px 0 #453e40;
  h3 {
    color: #542938;
    font-weight: 400;
    padding: 0;
    margin: 0 0 0.2rem 0;
  }
  ${media.tablet`margin-top: 2rem`}
  ${media.phone`margin-top: 2rem`}
`

const Credits = styled.div`
`

const Caption = styled.div`
  text-align: right;
  position: absolute;
  bottom: 1rem;
  right: 1rem;
`

export default () => (
  <Cover>
    <Credits>
      <h3>Maarga Sangeet</h3>
      <h3>by S. Balachander</h3>
    </Credits>
    <Caption>
      <h3>A Musical Journey</h3>
      <Cta to="/intro/">Listen Now</Cta>
    </Caption>
  </Cover>
)
