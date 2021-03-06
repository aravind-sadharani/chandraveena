import React from "react"
import {Outer, Container} from "../components/containers"
import Pagebackground from "../components/pagebackground"
import Masthead from "../components/masthead"
import Cover from "../components/cover"
import Footer from "../components/footer"
import Mobilenav from "../components/mobilenavigation"
import "./global.css"

export default ({children}) => (
  <Outer>
    <Pagebackground />
    <Masthead />
    <Cover />
    <Container>
      {children}
    </Container>
    <Footer />
    <Mobilenav />
  </Outer>
)
