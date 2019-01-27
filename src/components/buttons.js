import React from "react"
import styled from "styled-components"
import {Link} from "gatsby"

const UnlinkedButton = styled.button`
  display: inline-block;
  border-radius: 0.3rem;
  padding: 0.5rem 1rem;
  margin: 0.5rem 0.5rem;
  background: ${props => props.background ? props.background : `#859e6b`};
  text-align: center;
  text-decoration: none;
  color: #ffffff;
  border: 0;
  font-size: 1.1em;
  font-weight: 400;
  box-shadow: 0 0 2px 0 #453e40;
  cursor: pointer;
`

const UnlinkedCta = styled(UnlinkedButton)`
  padding: 0.3rem 0;
  margin: 0;
  width: 9rem;
  background: #542938;
  color: #e1dbdd;
`

const Button = ({to,children,background}) => (
  <Link to={to}><UnlinkedButton background={background}>{children}</UnlinkedButton></Link>
)

const Cta = ({to,children}) => (
  <Link to={to}><UnlinkedCta>{children}</UnlinkedCta></Link>
)

export {UnlinkedButton, Button, Cta}
