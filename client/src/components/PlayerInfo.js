import React from 'react'
import { Grid, Image, Segment } from 'semantic-ui-react'

const PlayerArea = () => (
  <Grid stackable columns={2}>
    <Grid.Column>
      <Segment>
        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
      </Segment>
    </Grid.Column>
    <Grid.Column>
      <Segment>
        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
      </Segment>
    </Grid.Column>
  </Grid>
)

export default PlayerArea