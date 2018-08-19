import React from "react"
import styled from "styled-components"
import {graphql, StaticQuery} from "gatsby"
import {media} from "../utils/mediatemplate"

const VideoContainer = styled.div`
  padding-bottom: 56.25%;
  position: relative;
  height: 0px;
  overflow: hidden;
  border-radius: 0.3rem;
  iframe {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
  }
`

const YouTube = ({videoid, starttime, endtime}) => (
  <VideoContainer>
    <iframe
      title={videoid}
      frameBorder="0"
      allowFullScreen=""
      src={`https://www.youtube.com/embed/${videoid}?start=${starttime}&end=${endtime};rel=0`}
    />
  </VideoContainer>
)

const VideoThumbNail = styled.div`
`

const VideoDescription = styled.div`
  margin: 0 0 0 2rem;
  ${media.phone`margin: 1rem 0 0`}
`

const VideoItemContainer = styled.div`
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

const YouTubeChannel = () => (
  <StaticQuery
    query = {graphql`
      query {
        allYoutubeVideo {
          edges {
            node {
              id
              title
              description
              videoId
              publishedAt(formatString: "DD MMMM, YYYY")
              privacyStatus
            }
          }
        }
      }
    `}
    render = {data => {
      let videoList = data.allYoutubeVideo.edges.map(obj => (
        <VideoItemContainer key={obj.node.id}>
          <VideoThumbNail>
            <YouTube videoid={obj.node.videoId} />
          </VideoThumbNail>
          <VideoDescription>
            <h3>{obj.node.title}</h3>
            <p><em>Last updated {obj.node.publishedAt}</em></p>
            <p>{obj.node.description}</p>
          </VideoDescription>
          <hr />
        </VideoItemContainer>
      ))
      return (
        <div>
          {videoList}
        </div>
      )}
    }
  />
)

export {YouTube, YouTubeChannel}
