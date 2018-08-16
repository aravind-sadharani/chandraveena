import React from "react"
import {Link} from "gatsby"
import {Noticebox} from "../components/containers"
import {Button} from "../components/buttons"
import Homepage from "../layouts/home"

const indexPage = () => (
  <Homepage>
    <h2>Maarga Sangeet</h2>
    <p>
      Maarga Sangeet is an ancient yet timeless tradition of Indian Classical music. It is a way of life where music becomes the artist&apos;s medium of communication. From its early origins in the chants of Rig Veda and the singing of the Saama Veda, the rules and principles of Indian Classical music have evolved into the sophisticated system of Indian Raagas, and the artistic philosophy of Maarga Sangeet.
    </p>
    <p>
      Balachander plays the Chandraveena in the Dhrupad style, a traditional style of Maarga Sangeet. In its contemporary form, Dhrupad consists of two sections, Aalap which is a free flowing creative exploration of the Raaga without any percussion accompaniment, and a Composition accompanied by percussion, which is a poetry or instrumental composition set to a fixed cycle of beats. Dhrupad is characterised by a gradual and methodical unfurling of the Raaga.
    </p>
    <h2>Chandraveena</h2>
    <p>
      In Maarga Sangeet, every performance is a musical offering, and to render it in the Dhrupad style, it needs a systematic and contemplative exploration. Naturally, it requires an appropriate musical instrument to respond to the artist&apos;s will. Chandraveena is a contemporary string instrument based on the Saraswati Veena, a traditional Indian string instrument. Chandraveena has been specially designed to enable the artist to create elaborate musical phrases and subtle intonations which are a hallmark of the Dhrupad style, while still retaining the sonic character of the Saraswati Veena.
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
