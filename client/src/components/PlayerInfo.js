import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'

const PlayerArea = (props) => (
  <Grid stackable columns={1}>
    <Grid.Column>
      <Segment>
        Catchphrase Worth: {props.currentPoints()[1]}
      </Segment>
      <Segment>
        Points: {props.currentPoints()[0]}
      </Segment>
    </Grid.Column>
  </Grid>
)

export default PlayerArea