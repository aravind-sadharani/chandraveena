import React from 'react'
import { InstantSearch, SearchBox, Hits, Highlight } from 'react-instantsearch-dom'
import algoliasearch from 'algoliasearch/lite'
import Layout from "../layouts/page"
import { Link } from 'gatsby'
import {Noticebox} from "../components/containers"

const searchClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_SEARCH_KEY
)

const Hit = ({hit}) => {
  return (
    <>
    <Link to={hit.fields.slug}><h2>{hit.frontmatter.title}</h2></Link>
    <Highlight hit={hit} attribute="value" tagName="mark" />
    <p><Link to={hit.fields.slug}>Read more</Link></p>
    <hr />
    </>
  )
}

const searchPage = () => (
  <Layout>
    <h1>Search Page</h1>
    <InstantSearch
      searchClient={searchClient}
      indexName="CHANDRAVEENA"
    >
      <Noticebox>
        <br />
        <SearchBox autoFocus />
      </Noticebox>
      <h2>Results</h2>
      <Hits hitComponent={Hit} />
    </InstantSearch>
  </Layout>
)

export default searchPage
