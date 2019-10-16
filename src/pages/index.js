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
      Maarga("Path of") Sangeet("Music") is an ancient yet timeless tradition of Indian music, where music is not just a performance but a way of life. It is an individual's pursuit towards seeking meaning and self-identity through the discovery of music. As part of the musical journey, the artist aspires to create musical work in their own individualistic style which represents their life, thoughts, experiences and musical values.   <InlineButton to="/blog/philosophy-of-music/">Learn more</InlineButton>
    </p>
    <h2>Chandraveena</h2>
    <p>
      Chandraveena, a contemporary Indian string instrument, is the outcome of a musical journey in pursuit of the artists' musical identity. Chandraveena has been designed to support a systematic and contemplative exploration of Indian Ragas in a style reflective of the artists' identity. Chandraveena is endowed with the deep sustain and rich sound allowing the artist to create elaborate musical phrases and subtle intonations. <InlineButton to="/blog/making-of-chandraveena/">Learn more</InlineButton>
    </p>
    <h2>S. Balachander</h2>
    <p>
      Balachander, an Indian classical musician and multi-instrumentalist, is the creator, inventor and performing artist of the Chandraveena. In the course of his musical journey, he was inspired by the artistry of his Gurus, and the beauty of the musical form, to create the Chandraveena. Balachander plays Chandraveena according to the principles of Dhrupad, but his music is also a reflection of his varied training in Indian classical music, and his own interpretation, thoughts and experiences. <InlineButton to="/about/">About Balachander</InlineButton>
    </p>
    <Noticebox center>
      Start with an Introduction to a typical Chandraveena recital. Or check out the Discography.<br />
      <Button to="/intro/">Introduction</Button>
      <Button to="/discography/">Discography</Button>
    </Noticebox>
  </Homepage>
)

export default indexPage
