import React from "react"
import {Container, Outer} from "../components/containers"
import Masthead from "../components/masthead"
import Footer from "../components/footer"
import Mobilenav from "../components/mobilenavigation"
import "./global.css"

export default ({children}) => (
  <Outer>
    <Masthead />
    <Container>
      {children}
    </Container>
    <Footer />
    <Mobilenav />
  </Outer>
)
