import React from "react"
import TwitterIcon from "../../images/twitter-white.svg"
import FacebookIcon from "../../images/facebook-white.svg"
import WhatsappIcon from "../../images/whatsapp-brands.svg"
import {UnlinkedButton} from "./buttons"
import {Inlineimg} from "./icons"
import styled from "styled-components"
import {media} from "../utils/mediatemplate"

const TwitterButton = ({to,children}) => (
  <a href={to}><UnlinkedButton children={children} background="#1da1f2" /></a>
)

const FacebookButton = ({to,children}) => (
  <a href={to}><UnlinkedButton children={children} background="#3B5998" /></a>
)

const WhatsappButton = ({to,children}) => (
  <a href={to}><UnlinkedButton children={children} background="#128c7e" /></a>
)

const SocialShareWrapper = styled.div`
  text-transform: uppercase;
`

const ButtonSpan = styled.span`
  ${media.phone`display:none`}
`

export default ({url}) => (
  <SocialShareWrapper>
    <br />
    <hr />
    <small>Share via</small>
    <br />
    <TwitterButton to={`https://twitter.com/intent/tweet?text=${url}`}>
      <Inlineimg alt="Twitter" src={TwitterIcon} /><ButtonSpan> Twitter</ButtonSpan>
    </TwitterButton>
    <FacebookButton to={`https://www.facebook.com/sharer/sharer.php?u=${url}`}>
      <Inlineimg alt="Facebook" src={FacebookIcon} /><ButtonSpan> Facebook</ButtonSpan>
    </FacebookButton>
    <WhatsappButton to={`https://wa.me/?text=${url}`}>
      <Inlineimg alt="Whatsapp" src={WhatsappIcon} /><ButtonSpan> WhatsApp</ButtonSpan>
    </WhatsappButton>
  </SocialShareWrapper>
)
