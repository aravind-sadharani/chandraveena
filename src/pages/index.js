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
      Maarga Sangeet is a form of musical expression, where the artist aspires to channel his
      life experiences into a creative and systematic exploration, within the Indian Raaga
      tradition.
  </p><p>
 1. Maarga Sangeet, an ancient Indian musical offering. In a disciplined, systematic and contemplative style, 
  the artist aspires to create musical expressions within the framework of Dhrupad<sup>*</sup>, a legacy of Sama Veda and Indian Raaga tradition.
  </p><p>
2. Maarga Sangeet, a musical way of life imbibing the tenets of Vedas. A musical offering weaved in a systematic and contemplative style, 
  the artist aspires to converse through musical expressions, within the framework of Dhrupad<sup>*</sup>, a legacy of Sama Veda and Indian Raaga system.

    </p>
    <h2>Chandraveena</h2>
    <p>
      Chandraveena is a contemporary string instrument, specially designed to create elaborate and
      delicate musical phrases. This makes it apt to the pursuit of Maarga Sangeet.
    </p>
  <p>
  Veena, a sacred traditional Indian string instrument. Chandraveena is a contemporary string instrument based on Saraswati Veena. 
  It has been specially designed to respond to elaborate musical phrases and subtle intonations, a hallmark of Dhrupad style.
  </p>
    <h2>S. Balachander</h2>
    <p>
      S. Balachander, an Indian classical musician and multi-instrumentalist,
      is the creator and performing artist of the Chandraveena. He was led to create
      this instrument, through a <Link to="/about/">long and interesting musical journey</Link>,
      inspired by the artistry of his teachers and the beauty of the musical form.
    </p>
  <p>
  Balachander, an Indian classical musical and multi-instrumentalist, is the creator and performing artist of Chandraveena, in Dhrupad style. 
  In a <Link to="/about">long and interesting musical journey</Link>, he was inspired by the artistry of his Gurus and the beauty of the musical form to create Chandraveena.
  </p>
  <p><i>  
*Dhrupad or Dhruvapada, is an evolution from the earlier poetry based musical style Prabandham. In its musical form Dhrupad contains two sections, anibaddha (unbound or free flowing music which is called Aalap) and nibaddha (bound or fixed music, which is poetry or composition set to a fixed cycle of beats).
</i>
<p>

    <Noticebox>
      Experience the music.<br />
      <Button to="/intro/">Listen Now</Button>
    </Noticebox>
  </Homepage>
)

export default indexPage
