import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../layouts/page"
import SEOMetaData from "../components/SEOMetaData"
import styled from "styled-components"
import {media} from "../utils/mediatemplate"
import Img from 'gatsby-image'
import {UnlinkedInlineButton} from "../components/buttons"
import coverImage from "../../images/Favicon.png"
import BlogLinks from "../components/bloglinks"

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

export default ( { location, data, pageContext } ) => {
  let site = data.site.siteMetadata
  const {currentPage, numPages} = pageContext
  let title = "S. Balachander's Music Blog"
  let intro = (
    <p>
      Welcome to my blog! Start at the <Link to="/blog/intro-to-blog/"><UnlinkedInlineButton>Introductory Post</UnlinkedInlineButton></Link> if you are new, or browse the latest posts below.
    </p>
  )
  let subtitle = currentPage === 1 ? "Latest Articles" : currentPage === numPages ? "Last Page" : `Page ${currentPage}`
  let description = currentPage === 1 ? "I am S. Balachander, an Indian classical musician and a performing artist of Chandraveena. As an Indian Classical musician, with a long association with music, I have had been privileged to have undertaken a journey with many interesting experiences and stories. Welcome to my blog - a collection of my ideas, thoughts and understanding about music, its origins, my teachers, my instruments and many more topics. Read on to find out more!" : null
  let prevLink = currentPage !== 1 ? { url: `/blog/${currentPage - 1 === 1 ? "" : (currentPage-1).toString()}`, title: `Page ${currentPage-1}` } : null
  let nextLink = currentPage !== numPages ? { url: `/blog/${currentPage+1}`, title: `Page ${currentPage+1}` } : null
  let blogList = data.allMarkdownRemark.edges.map(({node}) => (
    <Link key={node.id} style={{textDecoration: `none`, color: `inherit`, fontWeight: `400`}} to={node.fields.slug}>
      <hr />
      <BlogItemContainer>
        <BlogThumbNail>
          {node.frontmatter.image !== null ? <Img fluid={node.frontmatter.image.childImageSharp.fluid} /> : null}
        </BlogThumbNail>
        <BlogDescription>
          <h3>{node.frontmatter.title}</h3>
          <p><small><em>Posted on {node.frontmatter.date} • {node.fields.readingTime.text}</em></small></p>
          <p>{node.excerpt}</p>
        </BlogDescription>
      </BlogItemContainer>
    </Link>
  ))
  return (
    <Layout>
      <SEOMetaData
        username = {site.twitterUsername}
        url = {`${site.siteUrl}${location.pathname}`}
        type = "website"
        title = {title}
        image = {`${site.siteUrl}${coverImage}`}
        description = {description}
        fbappID = {site.fbAppID}
      />
      <h1>{title}</h1>
      {currentPage === 1 && intro}
      <h2>{subtitle}</h2>
      {blogList}
      <BlogLinks prev={prevLink} next={nextLink} />
    </Layout>
  )
}

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/src/blog/" } }
      sort: { fields: [frontmatter___date, frontmatter___title], order: [DESC, DESC] }
      limit: $limit
      skip: $skip
    ) {
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
    site {
      siteMetadata {
        title
        siteUrl
        twitterUsername
        fbAppID
      }
    }
  }
`
