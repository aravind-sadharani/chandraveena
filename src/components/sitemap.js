import React from "react"
import {Link, graphql, StaticQuery} from "gatsby"
import styled from "styled-components"

const SiteMapContainer = styled.div`
  a {
    text-decoration: none;
    color: inherit;
    font-weight: 400;
  }
  h3 {
    display: inline-block;
  }
`

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
        <Link key={node.id} to={node.fields.slug}>
          <h3>{node.frontmatter.title}</h3>
          <br />
        </Link>
      ))
      let pageList = data.sitepages.edges.filter(({node}) =>
        ((node.fields.slug !== "/404/") && (node.fields.slug !== "/thanks/") && (node.fields.slug !== "/sitemap/"))
      )
      pageList = pageList.map(({node}) => (
        <Link key={node.id} to={node.fields.slug}>
          <h3>{node.frontmatter.title}</h3>
          <br />
        </Link>
      ))
      return (
        <SiteMapContainer>
          <h2>All Site Pages</h2>
          <hr />
          <Link to="/">
            <h3>Home</h3>
            <br />
          </Link>
          {pageList}
          <br />
          <br />
          <h2>All Blog Posts</h2>
          <hr />
          {blogList}
        </SiteMapContainer>
      )}
    }
  />
)

export {SiteMap}
