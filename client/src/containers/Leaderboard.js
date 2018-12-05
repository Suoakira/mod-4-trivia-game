import React, { Component } from 'react';
import { Table, Modal, Button } from 'semantic-ui-react'
import LeaderboardRow from '../components/LeaderboardRow'


class Leaderboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userScores: [], 
            highScores: [],
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

    hardReload = () =>
        window.location.reload()
    

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
        return (
            <div className="leaderboard-center" >
                <Modal open={this.props.leaderboardOpen} closeOnDimmerClick={true}>
                    <Modal.Header className='sign-up-form header'>Leaderboard</Modal.Header>
                        <Modal.Content >
                            <Table basic='very' celled collapsing>
                                <Table.Header>
                                    {
                                    this.props.catchPhrase?
                                        <h3 class="ui header">Congratulations You Won!</h3>
                           
                                
                                    :
                                    null
                                    }
                                    <Table.Row>
                                        <Table.HeaderCell>User</Table.HeaderCell>
                                        <Table.HeaderCell>Score</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>

                                <Table.Body>
                                    <div className="leaderboard-box-area">
                                    {this.renderLeaderboard()}
                                    </div>
                                </Table.Body>
                            </Table>
                            {
                            this.props.catchPhrase?
                                
                            <Button className="ui primary button" onClick={() => this.hardReload()}>New Game</Button>
                                :
                            <Button className="leaderboard-button" onClick={this.props.toggleLeaderboard}>Close</Button>
                            }
                        </Modal.Content>
                </Modal>
            </div>
          );
    }
}
 
export default Leaderboard;