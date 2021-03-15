import React from "react"
import styled from "styled-components"
import {Link} from "gatsby"
import {media} from "../utils/mediatemplate"

const SmallCaps = styled.small`
  text-transform: uppercase;
`

const LinkContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  ${media.phone`grid-template-columns: 1fr`}
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
        {prev &&
          <>
            <SmallCaps>Previous</SmallCaps><br />
            <Link to={`${prev.url}`}>◀︎ {prev.title}</Link>
          </>
        }
      </PrevContainer>
      <NextContainer>
        {next &&
          <>
            <SmallCaps>Next</SmallCaps><br />
            <Link to={`${next.url}`}>{next.title} ►</Link>
          </>
        }
      </NextContainer>
    </LinkContainer>
  </>
)

export default BlogLinks
