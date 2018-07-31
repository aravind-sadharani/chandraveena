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
    this.state = {showThumb: true, showVideo: false}
  }

  hideThumb = () => this.setState({showThumb: false})
  showVideo = () => this.setState({showVideo: true})

  componentDidUpdate(prevProps) {
    if(this.props.src !== prevProps.src)
      this.setState({showThumb: true, showVideo: false})
  }

  render() {
    let src = this.props.src
    return (
      <VideoContainer>
        { this.state.showVideo ?
          <iframe
            title={src}
            frameBorder="0"
            allowFullScreen=""
            src={`https://www.youtube.com/embed/${src}?rel=0`}
            onLoad={this.hideThumb}
          /> :
          null
        }
        { this.state.showThumb ?
          <Thumbnail
            alt="" src={`https://img.youtube.com/vi/${src}/sddefault.jpg`}
            onLoad={this.showVideo}
          /> :
          null
        }
      </VideoContainer>
    )
  }
}

const YouTube = ({videoid}) => (
  <YouTubeClass src={videoid} />
)

export {YouTube}
