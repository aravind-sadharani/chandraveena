const indexQuery = `{
  allMarkdownRemark {
    edges {
      node {
        objectID: id
        frontmatter {
          title
          description
        }
        fields {
          slug
        }
      }
    }
  }
}`

const queries = [
  {
    query: indexQuery,
    transformer: ({ data }) => data.allMarkdownRemark.edges.map(({ node }) => node), // optional
    indexName: 'CHANDRAVEENA', // overrides main index name, optional
  },
]

module.exports = queries
