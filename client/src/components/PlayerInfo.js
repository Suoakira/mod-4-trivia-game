import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'

const PlayerArea = (props) => (
  <Grid stackable columns={1}>
    <Grid.Column>
      <h3 class="ui header">Score</h3>
      <Segment>
         Country Guess Worth: {props.currentPoints()[1]}
      </Segment>
      <Segment>
        Question Points: {props.currentPoints()[0]}
      </Segment>
    </Grid.Column>
  </Grid>
)

export default PlayerArea