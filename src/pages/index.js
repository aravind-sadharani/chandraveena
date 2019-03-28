import React from "react"
import {Noticebox} from "../components/containers"
import {Button, InlineButton} from "../components/buttons"
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
      Maarga Sangeet is an ancient yet timeless tradition of Indian classical music. At a philosophical level, it is a way of life where music becomes an artist's identity and medium of communication. At a practical level, it is an act of musical improvisation that showcases the artist's unique understanding and interpretation of the musical grammar of the chosen Raga and Tala. <InlineButton to="/intro/">Learn more</InlineButton>
    </p>
    <p>
      Dhrupad is a traditional framework for Maarga Sangeet. In its contemporary form, Dhrupad consists of two sections, Alap - a free flowing creative exploration of the Raga without any percussion accompaniment, and Composition - a lyrical poetry or instrumental composition, set to a fixed cycle of beats and accompanied by a percussion instrument. Dhrupad is characterised by a gradual and methodical unfurling of the Raga. <InlineButton to="/intro/">Learn more</InlineButton>
    </p>
    <h2>Chandraveena</h2>
    <p>
      Chandraveena is a contemporary Indian string instrument and belongs to the Veena family of instruments. It is structurally and sonically based on Saraswati Veena, a traditional Indian string instrument. Chandraveena has been designed and built to support a systematic and contemplative exploration of Indian Ragas, and provide the sustain and rich sound necessary for an artist to create elaborate musical phrases and subtle intonations. <InlineButton to="/blog/why-chandraveena/">Why Chandraveena</InlineButton>
    </p>
    <h2>S. Balachander</h2>
    <p>
      Balachander, an Indian musician and multi-instrumentalist, is the creator, inventor and performing artist of the Chandraveena. In the course of a long and interesting musical journey, he was inspired by the artistry of his Gurus, and the beauty of the musical form, to create the Chandraveena. Balachander plays Chandraveena according to the principles of Dhrupad, but his music is also a reflection of his varied training in Indian classical music, and his own interpretation, thoughts and experiences. <InlineButton to="/about/">About Balachander</InlineButton>
    </p>
    <Noticebox center>
      Start with an Introduction to a typical Chandraveena recital. Or jump right ahead and browse the Discography.<br />
      <Button to="/intro/">Introduction</Button>
      <Button to="/discography/">Discography</Button>
    </Noticebox>
  </Homepage>
)

export default indexPage
