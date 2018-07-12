import React from "react"
import Container from "../components/container"
import Blockquote from "../components/blockquote"
import Pagebackground from "../components/pagebackground"
import Button from "../components/button"

const indexPage = () => (
  <div>
    <Pagebackground />
    <Container>
      <h1>Chandraveena</h1>
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
        <div>
          <p>
            Get started by listening to a few clips and an introduction by S. Balachander.
            <br/>
            <br/>
            <Button href="intro.html">Listen Now</Button>
          </p>
        </div>
      </div>
      <Blockquote>
        Music is a spiritual journey. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, alias.
      </Blockquote>
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis reprehenderit, eos consequatur, tenetur soluta enim accusantium laborum suscipit nostrum error provident asperiores aliquam sequi quas, omnis doloremque accusamus quisquam similique deserunt sint corporis, id ab. Aperiam dignissimos, totam sequi laborum quia eveniet commodi dolore, quam adipisci quisquam quaerat, aut veniam aliquid corrupti possimus illo tenetur tempora ratione laudantium ea doloremque quidem? Qui provident fuga amet laudantium dolor iure, enim sed alias minus quos architecto, consequuntur nulla veniam saepe! Repellat maiores dolorum cupiditate perspiciatis tempore, deserunt iure sed amet ipsa libero consequatur porro facilis nesciunt veritatis debitis molestiae saepe consectetur animi.
        </p>
      </div>
    </Container>
  </div>
)

export default indexPage
