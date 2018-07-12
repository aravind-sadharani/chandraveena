import React from "react"
import styled from "styled-components"

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
  border-top: 1px solid #453e40;
  display: grid;
  grid-template-columns; 1fr 1fr 1fr 1fr;
`

export default () => (
  <Mobilenav>
  </Mobilenav>
)
