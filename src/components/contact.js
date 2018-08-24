import React from "react"
import TwitterIcon from "../../images/twitter.svg"
import YouTubeIcon from "../../images/youtube.svg"
import FacebookIcon from "../../images/facebook.svg"
import BandcampIcon from "../../images/bandcamp.svg"
import {Inlineimg} from "./icons"
import styled from "styled-components"
import { navigate } from "gatsby"
import Recaptcha from "react-google-recaptcha"
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

const RECAPTCHA_KEY = process.env.GATSBY_SITE_RECAPTCHA_KEY

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

  handleRecaptcha = value => {
    this.setState({ "g-recaptcha-response": value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }

  render() {
    return (
      <FormContainer>
        <form
          name="contact-recaptcha"
          method="post"
          action="/thanks/"
          data-netlify="true"
          data-netlify-recaptcha="true"
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
            </label>
          </p>
          <p>
            <label>
              Message:<br />
              <textarea name="message" onChange={this.handleChange} />
            </label>
          </p>
          <Recaptcha
            ref="recaptcha"
            sitekey={RECAPTCHA_KEY}
            onChange={this.handleRecaptcha}
          />
          <ButtonContainer>
            <UnlinkedButton type="submit">Send</UnlinkedButton>
          </ButtonContainer>
        </form>
      </FormContainer>
    );
  }
}

export {SocialLinks, ContactForm}