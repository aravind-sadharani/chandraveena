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
  top: -16.7%;
  left: 0;
  cursor: pointer;
`

const Playbutton = styled.div`
  width: 60px;
  height: 60px;
  background-color: #859e6b;
  box-shadow: 0 0 30px rgba( 0,0,0,0.6 );
  z-index: 1;
  border-radius: 60px;
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d( -50%, -50%, 0 );

  :before {
    content: "";
    border-style: solid;
    border-width: 12px 0 12px 24px;
    border-color: transparent transparent transparent #e1dbdd;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d( -43%, -50%, 0 );
  }

  :active {
    background-color: #542938;
  }
`

class YouTubeClass extends React.Component {
  constructor(props) {
    super(props)
    this.state = {loadVideo: false,}
  }

  load = () => this.setState({loadVideo: true,})

  componentDidUpdate(prevProps) {
    if(this.props.src !== prevProps.src)
      this.setState({loadVideo: false,})
  }

  render() {
    let src = this.props.src
    return (
      <VideoContainer onClick={this.load}>
        {this.state.loadVideo ?
          <iframe
            title={src}
            frameBorder="0"
            allowFullScreen=""
            src={`https://www.youtube.com/embed/${src}?rel=0&autoplay=1`}
          /> :
          <div>
            <Thumbnail alt="" src={`http://img.youtube.com/vi/${src}/sddefault.jpg`} />
            <Playbutton />
          </div>
        }
      </VideoContainer>
    )
  }
}

const YouTube = ({videoid}) => (
  <YouTubeClass src={videoid} />
)

export {YouTube}
