import styled from "styled-components"
import {Link} from "gatsby"

const Button = styled(Link)`
  display: inline-block;
  border-radius: 0.3rem;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: #859e6b;
  text-align: center;
  text-decoration: none;
  color: #ffffff;
  border: 0;
  font-size: 1.1em;
  font-weight: "700";
  box-shadow: 0 0 2px 0 #453e40;
`

const Cta = styled(Button)`
  padding: 0.3rem 0;
  margin: 0;
  width: 9rem;
  background: #542938;
  color: #e1dbdd;
`

export {Button, Cta}
