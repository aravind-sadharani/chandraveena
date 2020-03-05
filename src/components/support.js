import React from "react"
import styled from "styled-components"

const SBForm = styled.form`
  display: inline-block;
  position: relative;
  top: 14px;
  input {
    box-shadow: 0 0 2px 0 #453e40;
    border-radius: 0.3rem;
    margin: 0 0.5rem;
  }
`

const SupportButton = () => (
  <SBForm action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
    <input type="hidden" name="cmd" value="_s-xclick" />
    <input type="hidden" name="hosted_button_id" value="LTSUJ7CAJZT5U" />
    <input type="image" src="https://www.paypalobjects.com/webstatic/en_AU/i/buttons/btn_paywith_primary_l.png" border="0" name="submit" alt="PayPal – The safer, easier way to pay online!" />
    <img alt="" border="0" src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif" width="1" height="1" />
  </SBForm>
)

export default SupportButton
