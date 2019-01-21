import React from 'react'
import { InstantSearch, SearchBox, Hits, Highlight } from 'react-instantsearch-dom'
import algoliasearch from 'algoliasearch/lite'
import { Link } from 'gatsby'
import {SearchContainer, Container, Outer} from "../components/containers"
import Masthead from "../components/masthead"
import Footer from "../components/footer"

const searchClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_SEARCH_KEY
)

const Hit = ({hit}) => {
  return (
    <>
      <hr />
      <Link to={hit.fields.slug}><h2>{hit.frontmatter.title}</h2></Link>
      <Highlight hit={hit} attribute="value" tagName="mark" />
      <p><Link to={hit.fields.slug}>Read more</Link></p>
    </>
  )
}

const searchPage = () => (
  <Outer>
    <Masthead />
    <Container>
      <SearchContainer>
        <InstantSearch searchClient={searchClient} indexName="CHANDRAVEENA">
          <center>
            <SearchBox autoFocus />
          </center>
          <Hits hitComponent={Hit} />
        </InstantSearch>
      </SearchContainer>
    </Container>
    <Footer />
  </Outer>
)

export default searchPage
