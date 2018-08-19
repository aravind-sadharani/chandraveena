import React from "react"
import styled from "styled-components"
import {graphql, StaticQuery} from "gatsby"

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
  float: left;
  width: 40%;
`

const VideoDescription = styled.div`
  float: right;
  width: 55%;
  margin: 0 0 0 1rem;
`

const VideoItemContainer = styled.div`
  display: flex;
  margin: 0 0 1rem;
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
              publishedAt
              privacyStatus
            }
          }
        }
      }
    `}
    render = {data => {
      let videoList = data.allYoutubeVideo.edges.map(obj => (
        <VideoItemContainer key={obj.node.videoId}>
          <VideoThumbNail>
            <YouTube videoid={obj.node.videoId} />
          </VideoThumbNail>
          <VideoDescription>
            <h2>{obj.node.title}</h2>
            <p>{obj.node.description}</p>
          </VideoDescription>
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
