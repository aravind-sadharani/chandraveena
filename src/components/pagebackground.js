import React from "react"
import styled from "styled-components"
import topTile from "../../images/star-veena2.svg"
import bottomTile from "../../images/star-veena3.svg"

const Topbackground = styled.div`
  height: 50vh;
  width: 100vw;
  position: fixed;
  left: 0;
  top: 0;
  z-index: -1;
  background-color: #542938;
  background-image: url(${topTile});
  background-size: 15vmin;
  background-position: bottom center;
`

const Bottombackground = styled.div`
  height: 50vh;
  width: 100vw;
  position: fixed;
  left: 0;
  top: 50vh;
  z-index: -1;
  background-color: #e1dbdd;
  background-image: url(${bottomTile});
  background-size: 15vmin;
  background-position: top center;
`

export default () => (
  <div>
    <Topbackground />
    <Bottombackground />
  </div>
)
