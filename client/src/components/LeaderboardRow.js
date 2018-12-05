import React from 'react'
import { Table, Header, Image, Modal } from 'semantic-ui-react'

export default function LeaderboardRow(props) {
  return (
    <div>

        <Table.Row>
        <Table.Cell>
          <Header as='h4' image>
            <Image src='https://react.semantic-ui.com/images/avatar/small/lena.png' rounded size='mini' />
            <Header.Content>
              {props.leaderboardUser.user.username}
              <Header.Subheader>Human Resources</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>{props.leaderboardUser.score}</Table.Cell>
      </Table.Row>

      
    </div>
  )
}



