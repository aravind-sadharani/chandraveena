import React from "react"
import styled from "styled-components"
import {Link, graphql, StaticQuery} from "gatsby"
import {media} from "../utils/mediatemplate"

const BlogThumbNail = styled.div`
`

const BlogDescription = styled.div`
  margin: 0 0 0 2rem;
  ${media.phone`margin: 1rem 0 0`}
`

const BlogItemContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 2fr 3fr;
  ${media.phone`grid-template-columns: 1fr`}
  hr {
    display: block;
    margin: 1em auto 0;
    border: #453e40;
    grid-column: 1/3;
    ${media.phone`grid-column: 1`}
    width: 100%;
  }
`

const BlogIndex = () => (
  <StaticQuery
    query = {graphql`
      query {
        allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/src/blog/" } }, sort: { fields: [frontmatter___date], order: DESC }) {
          edges {
            node {
              id,
              frontmatter {
                title,
                date(formatString: "DD MMMM, YYYY")
              },
              fields {
                slug
              },
              excerpt
            }
          }
        }
      }
    `}
    render = {data => {
      let blogList = data.allMarkdownRemark.edges.map(({node}) => (
        <Link key={node.id} style={{textDecoration: `none`, color: `inherit`, fontWeight: `400`}} to={node.fields.slug}>
          <BlogItemContainer>
            <BlogThumbNail>
              <h1>Thumbnail</h1>
            </BlogThumbNail>
            <BlogDescription>
              <h3>{node.frontmatter.title}</h3>
              <p><em>Posted on {node.frontmatter.date}</em></p>
              <p>{node.excerpt}</p>
            </BlogDescription>
            <hr />
          </BlogItemContainer>
        </Link>
      ))
      return (
        <div>
          {blogList}
        </div>
      )}
    }
  />
)

export {BlogIndex}
