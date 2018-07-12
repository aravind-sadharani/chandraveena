import React from "react"
import styled from "styled-components"

const Container = styled.div`
  margin: 1rem auto;
  width: calc(100% - 2rem);
  max-width: 800px;
  padding: 0.5rem 1rem;
  color: #453e40;
  background-color: #ffffff;
  border: 0;
  border-radius: 1rem;
  h1 {
    text-align: center;
  };
`

export default ({children}) => (
  <Container>{children}</Container>
)
