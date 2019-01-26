import React from "react"
import { graphql} from "gatsby"
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
import BlogLinks from "../components/bloglinks"

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

export default ({ location, data, pageContext }) => {
  let post = data.markdownRemark
  let site = data.site.siteMetadata
  let type = post.fileAbsolutePath.includes("/src/blog/") ? "article" : "website"
  const {prev, next} = pageContext
  console.log(pageContext)
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
        post.fileAbsolutePath.includes("/src/blog/") &&
        <center><p><small>
          Posted on {post.frontmatter.date} • {post.fields.readingTime.text}
        </small></p></center>
      }
      {
        renderAst(post.htmlAst)
      }
      <BlogLinks prev={prev} next={next} />
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
        date(formatString: "DD MMMM, YYYY")
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
        readingTime {
          text
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
