import React from "react"
import styled from "styled-components"
import {Link} from "gatsby"

const LinkContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
`

const PrevContainer = styled.div`
  text-align: left;
`

const NextContainer = styled.div`
  text-align: right;
`

const BlogLinks = ({prev, next}) => (
  <>
    <hr />
    <LinkContainer>
      <PrevContainer>
        {prev && <Link to={prev.fields.slug}>◀︎ Previous post: {prev.frontmatter.title}</Link>}
      </PrevContainer>
      <NextContainer>
        {next && <Link to={next.fields.slug}>Next post: {next.frontmatter.title} ►</Link>}
      </NextContainer>
    </LinkContainer>
  </>
)

export default BlogLinks
