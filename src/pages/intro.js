import React from "react"
import {Noticebox} from "../components/containers"
import {Button} from "../components/buttons"
import Page from "../layouts/page"

const introPage = () => (
  <Page>
    <div>
      <h1>Maarga Sangeet on Chandraveena</h1>
      <h2>an Introduction</h2>
      <div>
        <iframe title="intro-video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/NDDtGBdr5EY?rel=0" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
      </div>
    </div>
    <div>
      <h2>What you just heard...</h2>
      <p>
        Explanation of the video/audio clip.
      </p>
      <Noticebox>
        <p>
          <br />
          <Button to="/discography/">Listen More</Button>
          <Button to="/concerts/">Attend a Concert</Button>
        </p>
      </Noticebox>
    </div>
  </Page>
)

export default introPage
