import React from "react"
import {Link} from "gatsby"
import {Noticebox} from "../components/containers"
import {Button} from "../components/buttons"
import Homepage from "../layouts/home"
import SEOMetaData from "../components/SEOMetaData"
import { graphql, StaticQuery } from "gatsby"
import coverImage from "../../images/Favicon.png"

const indexPage = () => (
  <Homepage>
    <StaticQuery
      query = {graphql`
        query {
          site {
            siteMetadata {
              siteUrl
              twitterUsername
              title
              description
              fbAppID
            }
          }
        }
      `}
      render = {data => (
        <SEOMetaData
          username = {data.site.siteMetadata.twitterUsername}
          url = {data.site.siteMetadata.siteUrl}
          type = "website"
          title = {data.site.siteMetadata.title}
          description = {data.site.siteMetadata.description}
          image = {`${data.site.siteMetadata.siteUrl}${coverImage}`}
          fbappID = {data.site.siteMetadata.fbAppID}
        />
      )}
    />
    <h2>Maarga Sangeet</h2>
    <p>
      Maarga Sangeet is an ancient yet timeless tradition of Indian music. It is a way of life where music becomes the medium of communication, and a representation of the artists' life journeys. From its early origins in the monotonic chants of Rig Veda and the heptatonic singing of the Saama Veda, the rules and principles of Indian music have evolved into the sophisticated system of Indian Raagas and Talas. This forms the basis for the artistic philosophy of Maarga Sangeet.
    </p>
    <p>
      Dhrupad, a legacy of Sacred Indian music and scriptures, is a traditional rendering of Maarga Sangeet. In its contemporary form, Dhrupad consists of two sections, Aalap which is a free flowing creative exploration of the Raaga without any percussion accompaniment, and a Composition, which is a poetry or instrumental composition, set to a fixed cycle of beats and accompanied by a percussion instrument. Dhrupad is characterised by a gradual and methodical unfurling of the Raaga. Balachander plays Chandraveena based on the broad principles of Dhrupad.
    </p>
    <h2>Chandraveena</h2>
    <p>
      Chandraveena, is a contemporary Indian string instrument and belongs to the Veena family of instruments. Its is structurally and sonically based on Saraswati Veena, a traditional Indian string instrument. Chandraveena has been designed to support a systematic and contemplative exploration of Indian Raagas, and enable the artist to create elaborate musical phrases and subtle intonations.
    </p>
    <h2>S. Balachander</h2>
    <p>
      Balachander, an Indian musician and multi-instrumentalist, is the creator, inventor and performing artist of the Chandraveena. In the course of a <Link to="/about">long and interesting musical journey</Link>, he was inspired by the artistry of his Gurus, and the beauty of the musical form, to create the Chandraveena. His music is a reflection of his varied training in Indian music, and his own interpretation, thoughts and experiences.
    </p>
    <Noticebox center>
      Experience the music.<br />
      <Button to="/intro/">Listen Now</Button>
    </Noticebox>
  </Homepage>
)

export default indexPage
