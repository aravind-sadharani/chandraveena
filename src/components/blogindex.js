import React from "react"
import styled from "styled-components"
import {Link, graphql, StaticQuery} from "gatsby"
import {media} from "../utils/mediatemplate"
import Img from 'gatsby-image'

const BlogThumbNail = styled.div`
  Img {
    border-radius: 0.3rem;
  }
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
                image {
                  childImageSharp {
                    fluid(maxWidth: 300) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              },
              fields {
                slug
                readingTime {
                  text
                }
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
              <Img fluid={node.frontmatter.image.childImageSharp.fluid} />
            </BlogThumbNail>
            <BlogDescription>
              <h3>{node.frontmatter.title}</h3>
              <p><small><em>Posted on {node.frontmatter.date} • {node.fields.readingTime.text}</em></small></p>
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
