import React from "react"
import {Link} from "gatsby"
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
      Maarga Sangeet is an ancient yet timeless tradition of Indian Classical music. It is a way of life where music becomes the artist&apos;s medium of communication. Tracing its origin from the singing of the Saama Veda, the musical vocabulary of Maarga Sangeet has evolved into the sophisticated system of Indian Raagas, and is practised and performed today in a number of styles.
    </p>
    <p>
      Balachander plays the Chandraveena in the Dhrupad style. Dhrupad, a shortening of Dhruva-Pada (fixed verse), is a style of music evolved from a poetry based musical style called Prabandham (arrangement). In its contemporary musical form, Dhrupad consists of two sections, Anibaddha (unbound) which is a free flowing music also called Aalap, and Nibaddha (bound) which is a poetry or instrumental composition set to a fixed cycle of beats.
    </p>
    <h2>Chandraveena</h2>
    <p>
      In Maarga Sangeet, every performance is a musical offering, and rendered in the Dhrupad style, it requires a systematic and contemplative exploration. Naturally, it requires an appropriate musical instrument to respond to the artist&apos;s will. Chandraveena is a contemporary string instrument based on the Saraswati Veena, a traditional Indian string instrument. Chandraveena has been specially designed to enable the artist to create elaborate musical phrases and subtle intonations which are a hallmark of the Dhrupad style, while still retaining the sonic character of the Saraswati Veena.
    </p>
    <h2>S. Balachander</h2>
    <p>
      Balachander, an Indian classical musician and multi-instrumentalist, is the creator and performing artist of the Chandraveena. In the course of a <Link to="/about">long and interesting musical journey</Link>, he was inspired by the artistry of his Gurus, and the beauty of the musical form, to create the Chandraveena.
    </p>
    <Noticebox>
      Experience the music.<br />
      <Button to="/intro/">Listen Now</Button>
    </Noticebox>
  </Homepage>
)

export default indexPage
