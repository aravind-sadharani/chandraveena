const indexQuery = `{
  allMarkdownRemark {
    edges {
      node {
        objectID: id
        frontmatter {
          title
          description
          image {
            childImageSharp {
              resize(width: 320, height: 320) {
                src
              }
            }
          }
        }
        fields {
          slug
        }
        rawMarkdownBody
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
