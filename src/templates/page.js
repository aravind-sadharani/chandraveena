import React from "react"
import { graphql } from "gatsby"
import Layout from "../layouts/page"
import rehypeReact from "rehype-react"
import {Noticebox} from "../components/containers"
import {Button} from "../components/buttons"
import {YouTube} from "../components/videos"
import {YouTubeChannel} from "../components/videos"
import {BlogIndex} from "../components/blogindex"
import {SiteMap} from "../components/sitemap"

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { "notice-box": Noticebox, "my-button": Button, "you-tube": YouTube, "you-tube-channel": YouTubeChannel, "blog-index": BlogIndex, "site-map": SiteMap },
}).Compiler

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
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
      frontmatter {
        title
      }
    }
  }
`
