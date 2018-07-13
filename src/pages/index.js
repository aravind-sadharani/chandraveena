import React from "react"
import {Noticebox} from "../components/containers"
import {Button} from "../components/buttons"
import Homepage from "../layouts/home"

const indexPage = () => (
  <Homepage>
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
          <Button to="/intro/">Listen Now</Button>
        </p>
      </Noticebox>
    </div>
  </Homepage>
)

export default indexPage
