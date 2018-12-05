import React, { Component } from 'react';
import { Header, Image, Table, Modal } from 'semantic-ui-react'
import LeaderboardRow from '../components/LeaderboardRow'


class Leaderboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userScores: [], 
            highScores: [],
            leaderboardOpen: false
          }
    }

    getScores = () =>
        fetch("http://localhost:3000/api/v1/scores")
        .then(resp => resp.json())
        .then(data => {
            this.setState({userScores: data})
            this.sortUsersByScore(data)
        }
    )
    

    sortUsersByScore = (users) => {
    const copyUserScores = [...users]
        copyUserScores.sort((a, b) => b.score - a.score )
        this.setState({highScores: copyUserScores })
        }


    componentDidMount() {
        this.getScores()
    }
    
    renderLeaderboard = () => {
        const highScoresCopy = [...this.state.highScores]
        return highScoresCopy.map(user => <LeaderboardRow leaderboardUser={user} />)
    }
    
    
    
    render() { 
        const { leaderboardOpen } = this.props
        return (
            <Modal open={leaderboardOpen} closeOnDimmerClick={true}>
                <Modal.Header className='sign-up-form header'>Leaderboard</Modal.Header>
                    <Modal.Content >
                        <Table basic='very' celled collapsing>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>User</Table.HeaderCell>
                                    <Table.HeaderCell>Score</Table.HeaderCell>
                                 </Table.Row>
                             </Table.Header>

                             <Table.Body>
                                {this.renderLeaderboard()}
                            </Table.Body>
                        </Table>
                    </Modal.Content>
            </Modal>
          );
    }
}
 
export default Leaderboard;