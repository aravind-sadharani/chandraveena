import React from "react"
import {Pagecontainer, Outer} from "../components/containers"
import Masthead from "../components/masthead"
import Footer from "../components/footer"
import Mobilenav from "../components/mobilenavigation"

export default ({children}) => (
  <Outer>
    <Masthead />
    <Pagecontainer>
      {children}
    </Pagecontainer>
    <Footer />
    <Mobilenav />
  </Outer>
)
