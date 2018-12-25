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

const Thumbnail = styled.img`
   width: 100%;
   position: absolute;
   top: -16.67%;
   left: 0;
   cursor: pointer;
 `

class YouTubeClass extends React.Component {
   constructor(props) {
     super(props)
     this.state = {showThumb: true}
   }

   hideThumb = () => this.setState({showThumb: false})

   render() {
     let src = this.props.src
     let start = this.props.starttime
     let end = this.props.endtime
     return (
       <VideoContainer>
        <iframe
          title={src}
          frameBorder="0"
          allowFullScreen=""
          src={`https://www.youtube.com/embed/${src}?start=${start}&end=${end};rel=0`}
          onLoad={this.hideThumb}
        />
        { this.state.showThumb ?
          <Thumbnail alt="" src={`https://img.youtube.com/vi/${src}/hqdefault.jpg`} />
          : null
        }
       </VideoContainer>
     )
  }
}

const YouTube = ({videoid, starttime, endtime}) => (
  <YouTubeClass src={videoid} starttime={starttime} endtime={endtime} />
)

const VideoItemContainer = styled.div`
  margin: 0 1rem 0 0;
  display: inline-block;
  width: 60vw;
  max-width: 300px;
  p {
    margin: 0 auto 1rem;
    text-align: center;
    overflow: hidden;
  }
`

const VideoChannelContainer = styled.div`
  white-space: nowrap;
  overflow-x: scroll;
  overflow-y: hidden;
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
      let videoList = data.allYoutubeVideo.edges.map(({node}) => (
        <VideoItemContainer key={node.id}>
          <YouTube videoid={node.videoId} />
          <p>{node.title.substr(0,30)+"..."}</p>
        </VideoItemContainer>
      ))
      return (
        <VideoChannelContainer>
          {videoList}
        </VideoChannelContainer>
      )}
    }
  />
)

const BandCampContainer = styled.div`
  margin: 0 auto;
  max-width: 700px;
  iframe {
    border: 0;
    width: 100%;
    height: 120px;
  }
`

const BandCamp = ({albumid, albumname, albumtitle}) => (
  <BandCampContainer>
    <iframe
      title={albumname}
      src={`https://bandcamp.com/EmbeddedPlayer/album=${albumid}/size=large/bgcol=ffffff/linkcol=859e6b/tracklist=false/artwork=small/transparent=true/`}
      seamless>
      <a href={`http://dhrupad.bandcamp.com/album/${albumname}`}>{albumtitle}</a>
    </iframe>
  </BandCampContainer>
)

export {YouTube, YouTubeChannel, BandCamp}
