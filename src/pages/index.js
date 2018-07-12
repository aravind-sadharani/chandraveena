import React from "react"
import Container from "../components/container"
import Noticebox from "../components/noticebox"
import Pagebackground from "../components/pagebackground"
import Button from "../components/button"
import Masthead from "../components/masthead"
import Cover from "../components/cover"

const indexPage = () => (
  <div>
    <Pagebackground />
    <Masthead />
    <Cover />
    <Container>
      <div>
        <h2>What is Maarga Sangeet?</h2>
        <p>
          Maarga Sangeet is a musical journey, an ancient tradition of Indian music, where the artist seeks meaning and spirituality through musical expression and hopes to take the listener along.
        </p>
      </div>
      <div>
        <h2>What is the Chandraveena?</h2>
        <p>
          Chandraveena is a modern take on the historical instrument, the <em>been</em>. It enables the artist to ...
        </p>
        <Noticebox>
          <p>
            Get started by listening to a few clips and an introduction by S. Balachander.
            <br/>
            <br/>
            <Button href="intro.html">Listen Now</Button>
          </p>
        </Noticebox>
      </div>
    </Container>
  </div>
)

export default indexPage
