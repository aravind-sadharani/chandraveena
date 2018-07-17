import React from "react"
import styled from "styled-components"

const VideoContainer = styled.div`
  padding-bottom: 56.25%;
  position: relative;
  height: 0px;
  overflow: hidden;
  iframe {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
  }
`

const YouTube = ({videoid}) => {
  let youtubeurl = `https://www.youtube.com/embed/${videoid}`
  let youtubetitle = `YouTube Embed ${videoid}`
  return (
  <VideoContainer id={youtubetitle}>
    <iframe title={youtubetitle} src={youtubeurl} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
  </VideoContainer>
  )
}

export {YouTube}
