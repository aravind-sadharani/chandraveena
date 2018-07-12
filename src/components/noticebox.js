import React from "react"
import styled from "styled-components"

const Noticebox = styled.div`
  margin: 1rem auto;
  width: calc(100% - 2rem);
  max-width: 800px;
  padding: 0.5rem 1rem;
  color: #453e40;
  background-color: #e1dbdd;
  border: 0;
  border-radius: 1rem;
  text-align: center;
`

export default ({children}) => (
  <Noticebox>{children}</Noticebox>
)
