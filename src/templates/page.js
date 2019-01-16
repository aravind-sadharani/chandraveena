import React from "react"
import { graphql } from "gatsby"
import Layout from "../layouts/page"
import rehypeReact from "rehype-react"
import {Noticebox} from "../components/containers"
import {Button} from "../components/buttons"
import {YouTube} from "../components/videos"
import {YouTubeChannel} from "../components/videos"
import {BandCamp} from "../components/videos"
import {BlogIndex} from "../components/blogindex"
import {SiteMap} from "../components/sitemap"
import {SocialLinks, ContactForm} from "../components/contact"
import SEOMetaData from "../components/SEOMetaData"

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { "notice-box": Noticebox,
                "my-button": Button,
                "you-tube": YouTube,
                "you-tube-channel": YouTubeChannel,
                "blog-index": BlogIndex,
                "site-map": SiteMap,
                "social-links": SocialLinks,
                "contact-form": ContactForm,
                "band-camp": BandCamp
              },
}).Compiler

export default ({ location, data }) => {
  let post = data.markdownRemark
  let site = data.site.siteMetadata
  let type = post.fileAbsolutePath.includes("/src/blog/") ? "article" : "website"
  return (
    <Layout>
      <SEOMetaData
        username = {site.twitterUsername}
        url = {`${site.siteUrl}${location.pathname}`}
        type = {type}
        title = {`${site.title} | ${post.frontmatter.title}`}
        description = {post.frontmatter.description}
        image = {`${site.siteUrl}${post.frontmatter.image.childImageSharp.resize.src}`}
      />
      <h1>{post.frontmatter.title}</h1>
      {
        renderAst(post.htmlAst)
      }
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      fileAbsolutePath
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
    }
    site {
      siteMetadata {
        title
        siteUrl
        twitterUsername
      }
    }
  }
`
