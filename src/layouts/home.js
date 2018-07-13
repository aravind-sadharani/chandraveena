import React from "react"
import {Container} from "../components/containers"
import Pagebackground from "../components/pagebackground"
import Masthead from "../components/masthead"
import Cover from "../components/cover"
import Footer from "../components/footer"
import Mobilenav from "../components/mobilenavigation"

export default ({children}) => (
  <div>
    <Pagebackground />
    <Masthead />
    <Cover />
    <Container>
      {children}
    </Container>
    <Footer />
    <Mobilenav />
  </div>
)
