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
`

export default () => (
  <Mobilenav>
  </Mobilenav>
)
