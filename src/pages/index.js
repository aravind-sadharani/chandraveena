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
      Maarga Sangeet can be understood as a musical journey where the artist
      attempts to communicate life experiences through musical expression, by
      means of a systematic and creative exploration within the Indian Raaga
      tradition.
    </p>
    <h2>Chandraveena</h2>
    <p>
      Chandraveena is a contemporary one-of-a-kind string instrument with a deep
      resonance and rich sound, designed to enable the artist to effectively
      communicate the musical expressions.
    </p>
    <h2>S. Balachander</h2>
    <p>
      S. Balachander, a multi-instrumentalist and an Indian classical musician,
      is the creator and a widely performing artist of the Chandraveena. 
    </p>
    <Noticebox>
      <Button to="/intro/">Listen Now</Button>
    </Noticebox>
  </Homepage>
)

export default indexPage
