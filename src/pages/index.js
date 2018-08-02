import React from "react"
import {Noticebox} from "../components/containers"
import {Button} from "../components/buttons"
import Homepage from "../layouts/home"
// Load Typefaces
require('typeface-gentium-book-basic')
require('typeface-noto-serif')
require('typeface-sansita')

const indexPage = () => (
  <Homepage>
    <h2>Maarga Sangeet</h2>
    <p>
      Maarga Sangeet is a form of musical expression, where the artist aspires to channel his
      life experiences into a creative and systematic exploration, within the Indian Raaga
      tradition.
    </p>
    <h2>Chandraveena</h2>
    <p>
      Chandraveena is a contemporary string instrument, specially designed to create elaborate and
      delicate musical phrases. This makes it apt to the pursuit of Maarga Sangeet.
    </p>
    <h2>S. Balachander</h2>
    <p>
      S. Balachander, a multi-instrumentalist and Indian classical musician,
      is the creator and performing artist of the Chandraveena.
    </p>
    <Noticebox>
      Experience the music.<br />
      <Button to="/intro/">Listen Now</Button>
    </Noticebox>
  </Homepage>
)

export default indexPage
