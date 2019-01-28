import React from "react"
import {Twitter} from "styled-icons/fa-brands/Twitter"
import {Facebook} from "styled-icons/fa-brands/Facebook"
import {Whatsapp} from "styled-icons/fa-brands/Whatsapp"
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

const TwitterIcon = styled(Twitter)`
  height: 1.1em;
  width: 1.1em;
`

const FacebookIcon = styled(Facebook)`
  height: 1.1em;
  width: 1.1em;
`

const WhatsappIcon = styled(Whatsapp)`
  height: 1.1em;
  width: 1.1em;
`

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
      <TwitterIcon /><ButtonSpan> Twitter</ButtonSpan>
    </TwitterButton>
    <FacebookButton to={`https://www.facebook.com/sharer/sharer.php?u=${url}`}>
      <FacebookIcon /><ButtonSpan> Facebook</ButtonSpan>
    </FacebookButton>
    <WhatsappButton to={`https://wa.me/?text=${url}`}>
      <WhatsappIcon /><ButtonSpan> WhatsApp</ButtonSpan>
    </WhatsappButton>
  </SocialShareWrapper>
)
