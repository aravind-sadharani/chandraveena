import React, { Component } from 'react'
import Helmet from "react-helmet"

// Search component
class LocalSearch extends Component {
  render() {
    return (
      <>
        <Helmet>
          <script async src="https://cse.google.com/cse.js?cx=014117222396928509438:tvkphh9meod"></script>
        </Helmet>
        <div className="gcse-search"></div>
      </>
    )
  }
}

export default LocalSearch
