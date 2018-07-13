import React from "react"
import {Pagecontainer} from "../components/containers"
import Masthead from "../components/masthead"
import Footer from "../components/footer"
import Mobilenav from "../components/mobilenavigation"

export default ({children}) => (
  <div>
    <Masthead />
    <Pagecontainer>
      {children}
    </Pagecontainer>
    <Footer />
    <Mobilenav />
  </div>
)
