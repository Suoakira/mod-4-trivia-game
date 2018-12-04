import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'

const PlayerArea = (props) => (
  <Grid stackable columns={1}>
    <Grid.Column>
      <Segment>
        Catchphrase Worth: {props.currentPoints()}
      </Segment>
      <Segment>
        Points: {props.currentPoints()}
      </Segment>
    </Grid.Column>
  </Grid>
)

export default PlayerArea