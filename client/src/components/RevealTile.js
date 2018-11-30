import React from 'react'
import { Image, Reveal } from 'semantic-ui-react'

const RevealTile = () => (
  <Reveal animated='small fade'>
    <Reveal.Content visible>
      <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' size='small' />
    </Reveal.Content>
    <Reveal.Content hidden>
      <Image src='https://react.semantic-ui.com/images/avatar/large/ade.jpg' size='small' />
    </Reveal.Content>
  </Reveal>
)

export default RevealTile
