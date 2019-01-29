import React from "react"
import {ReactComponent as Twitter} from "../../images/twitter-brands.svg"
import {ReactComponent as Youtube} from "../../images/youtube-brands.svg"
import {ReactComponent as Facebook} from "../../images/facebook-brands.svg"
import {ReactComponent as Bandcamp} from "../../images/bandcamp-brands.svg"
import styled from "styled-components"
import { navigate, Link } from "gatsby"
import {UnlinkedButton} from "./buttons"

const SocialSpan = styled.span`
  a {
    text-decoration: none;
    color: inherit;
    font-weight: 400;
  }
`

const SocialList = styled.ul`
  list-style: none;
  svg {
    position: relative;
    top: 0.2em;
    height: 1.1em;
    width: 1.1em;
  }
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
        <a href="https://twitter.com/chandra_veena">
          <Twitter /> &nbsp; Twitter
        </a>
      </TwitterSpan>
    </li>
    <li>
      <YouTubeSpan>
        <a href="https://www.youtube.com/channel/UCxPyMV4LS9YBePXM0mV4hjg">
          <Youtube /> &nbsp; YouTube
        </a>
      </YouTubeSpan>
    </li>
    <li>
      <FacebookSpan>
        <a href="https://www.facebook.com/balachander.chandraveena/">
          <Facebook /> &nbsp; Facebook
        </a>
      </FacebookSpan>
    </li>
    <li>
      <BandcampSpan>
        <a href="https://chandraveena.bandcamp.com/">
          <Bandcamp /> &nbsp; Bandcamp
        </a>
      </BandcampSpan>
    </li>
  </SocialList>
)

const FormContainer = styled.div`
  margin: 1rem auto;
  width: calc(100% - 2rem);
  max-width: 800px;
  padding: 0.5rem 1rem;
  color: #453e40;
  background-color: #e1dbdd;
  border: 0;
  border-radius: 0.3rem;
  input, textarea {
    display: inline-block;
    width: 100%;
  }
`

const ButtonContainer = styled.div`
  text-align: center;
`

const Button = styled(UnlinkedButton)`
  opacity: ${props => props.disabled ? 0.5 : 1};
`

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/?no-cache=1", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => {
        navigate(form.getAttribute("action"))
      })
      .catch(error => alert(error))
  }

  render() {
    let {name, email, message} = this.state
    let isEnabled = name && email && message
    return (
      <FormContainer>
        <form
          name="Chandraveena Website"
          method="post"
          action="/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          <noscript>
            <p>This form won’t work with Javascript disabled</p>
          </noscript>
          <p>
            <label>
              Your name:<br />
              <input type="text" name="name" onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <label>
              Your email:<br />
              <input type="email" name="email" onChange={this.handleChange} />
              Read the <Link to="/terms/#privacy-policy">terms of use</Link> to know how your email is used.
            </label>
          </p>
          <p>
            <label>
              Message:<br />
              <textarea name="message" onChange={this.handleChange} />
            </label>
          </p>
          <ButtonContainer>
            <Button type="submit" disabled={!isEnabled}>Send</Button>
          </ButtonContainer>
        </form>
      </FormContainer>
    );
  }
}

export {SocialLinks, ContactForm}
