import React from "react"
import {Link, graphql, StaticQuery} from "gatsby"

const SiteMap = () => (
  <StaticQuery
    query = {graphql`
      query {
        blogpages: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/src/blog/" } }, sort: { fields: [frontmatter___date], order: DESC }) {
          edges {
            node {
              id
              frontmatter {
                title
                date(formatString: "DD MMMM, YYYY")
              }
              fields {
                slug
              }
            }
          }
        }
        sitepages: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/pages/"}}) {
          edges {
            node {
              id
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
    `}
    render = {data => {
      let blogList = data.blogpages.edges.map(({node}) => (
        <Link key={node.id} style={{textDecoration: `none`, color: `inherit`, fontWeight: `400`}} to={node.fields.slug}>
          <h3>{node.frontmatter.title}</h3>
          <br />
        </Link>
      ))
      let pageList = data.sitepages.edges.map(({node}) => (
        <Link key={node.id} style={{textDecoration: `none`, color: `inherit`, fontWeight: `400`}} to={node.fields.slug}>
          <h3>{node.frontmatter.title}</h3>
          <br />
        </Link>
      ))
      return (
        <div>
          <h2>All Site Pages</h2>
          <hr />
          <Link style={{textDecoration: `none`, color: `inherit`, fontWeight: `400`}} to="/">
            <h3>Home</h3>
            <br />
          </Link>
          {pageList}
          <br />
          <br />
          <h2>All Blog Posts</h2>
          <hr />
          {blogList}
        </div>
      )}
    }
  />
)

export {SiteMap}
