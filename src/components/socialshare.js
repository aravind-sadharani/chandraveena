import React from "react"
import {ReactComponent as Twitter} from "../../images/twitter-brands.svg"
import {ReactComponent as Facebook} from "../../images/facebook-brands.svg"
import {ReactComponent as Whatsapp} from "../../images/whatsapp-brands.svg"
import {UnlinkedButton} from "./buttons"
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
  svg {
    position: relative;
    top: 0.2em;
    height: 1.1em;
    width: 1.1em;
  }
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
      <Twitter size="1.1em" /><ButtonSpan> Twitter</ButtonSpan>
    </TwitterButton>
    <FacebookButton to={`https://www.facebook.com/sharer/sharer.php?u=${url}`}>
      <Facebook size="1.1em" /><ButtonSpan> Facebook</ButtonSpan>
    </FacebookButton>
    <WhatsappButton to={`https://wa.me/?text=${url}`}>
      <Whatsapp size="1.1em" /><ButtonSpan> WhatsApp</ButtonSpan>
    </WhatsappButton>
  </SocialShareWrapper>
)
