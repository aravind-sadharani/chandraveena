import React from "react"
import styled from "styled-components"

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

export default YouTube
