import React from 'react'
import { Table, Header, Image, Modal } from 'semantic-ui-react'
import index from '../App';

export default function LeaderboardRow(props) {
  return (
      <Table.Row>
        <Table.Cell>
          <Header as='h4' className="leaderboard-header">
              {props.index + 1} 
          </Header>
        </Table.Cell>
        <Table.Cell>
            <Header.Content>
              {props.leaderboardUser.user.username}
            </Header.Content>
        </Table.Cell>
        <Table.Cell>
          {props.leaderboardUser.score}
        </Table.Cell>
      </Table.Row>
  )
}



