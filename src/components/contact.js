import React from "react"
import TwitterIcon from "../../images/twitter.svg"
import YouTubeIcon from "../../images/youtube.svg"
import FacebookIcon from "../../images/facebook.svg"
import BandcampIcon from "../../images/bandcamp.svg"
import {Inlineimg} from "./icons"
import styled from "styled-components"

const SocialSpan = styled.span`
  a {
    text-decoration: none;
    color: inherit;
    font-weight: 400;
  }
`

const SocialList = styled.ul`
  list-style: none;
`

const TwitterSpan = styled(SocialSpan)`
  color: #1da1f2;
`

const YouTubeSpan = styled(SocialSpan)`
  color: #ff0000;
`

const FacebookSpan = styled(SocialSpan)`
  color: #3B5998;
`

const BandcampSpan = styled(SocialSpan)`
  color: #408294;
`

const SocialLinks = () => (
  <SocialList>
    <li>
      <TwitterSpan>
        <a href="https://www.twitter.com">
          <Inlineimg src={TwitterIcon} /> &nbsp; Twitter
        </a>
      </TwitterSpan>
    </li>
    <li>
      <YouTubeSpan>
        <a href="https://www.youtube.com">
          <Inlineimg src={YouTubeIcon} /> &nbsp; YouTube
        </a>
      </YouTubeSpan>
    </li>
    <li>
      <FacebookSpan>
        <a href="https://www.facebook.com">
          <Inlineimg src={FacebookIcon} /> &nbsp; Facebook
        </a>
      </FacebookSpan>
    </li>
    <li>
      <BandcampSpan>
        <a href="https://www.bandcamp.com">
          <Inlineimg src={BandcampIcon} /> &nbsp; Bandcamp
        </a>
      </BandcampSpan>
    </li>
  </SocialList>
)

export {SocialLinks}
