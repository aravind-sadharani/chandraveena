const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const {createPage} = actions
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark(sort: { fields: [frontmatter___date, frontmatter___title], order: [ASC, ASC] }) {
          edges {
            node {
              fileAbsolutePath
              frontmatter {
                title
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      let posts = result.data.allMarkdownRemark.edges
      posts.forEach(({ node }, index) => {
        let prev, next = null
        if(node.fileAbsolutePath.includes("/src/blog/")) {
          prev = index === 0 ? null : posts[index-1].node
          if(prev && !prev.fileAbsolutePath.includes("/src/blog/"))
            prev = null
          next = index == posts.length - 1 ? null: posts[index+1].node
          if(next && !next.fileAbsolutePath.includes("/src/blog/"))
            next = null
        }
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/page.js`),
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            slug: node.fields.slug,
            prev,
            next,
          },
        })
      })
      let postsPerPage = 4
      let numPages = Math.ceil(posts.filter(({node}) => node.fileAbsolutePath.includes("/src/blog/")).length/postsPerPage)
      Array.from({length: numPages}).forEach((_,i) => {
        createPage({
          path: i === 0 ? `/blog/` : `/blog/${i+1}`,
          component: path.resolve(`./src/templates/blogindex.js`),
          context: {
            limit: postsPerPage,
            skip: i*postsPerPage,
            numPages,
            currentPage: i+1,
          },
        })
      })
      resolve()
    })
  })
}
