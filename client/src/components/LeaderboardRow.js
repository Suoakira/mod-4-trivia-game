import React from 'react'
import { Table, Header, Image, Modal } from 'semantic-ui-react'
import index from '../App';

export default function LeaderboardRow(props) {
  return (
    <div  className="leaderboard-row">

        <Table.Row className="t-row">
        <Table.Cell>
          <Header as='h4' className="leaderboard-header">
              Rank {props.index + 1} :
            <Header.Content>
              {props.leaderboardUser.user.username}
              <Header.Subheader>----------------</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>{props.leaderboardUser.score}</Table.Cell>
      </Table.Row>

      
    </div>
  )
}



