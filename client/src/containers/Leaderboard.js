import React, { Component } from 'react';
import { Table, Modal, Button, Grid } from 'semantic-ui-react'
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
    

    sortUsersByScore = (scores) => {
    const copyUserScores = [...scores]
        copyUserScores.sort((a, b) => b.score - a.score )
        this.setState({highScores: copyUserScores })
        }

    sortUsersByLocalScore = (scores) => {
        const copyUserScores = [...scores]
        return copyUserScores.sort((a, b) => b.score - a.score)
    }
    
    updateLocalScore = () => {
        if (!!this.props.winnerScore) {
            this.setState({userScores: [...this.state.userScores, this.props.winnerScore]})
            this.sortUsersByScore(this.state.userScores)
        } else {
            return null
        }
    }

    componentDidMount() {
        this.setState({ winnerScore: this.props.winnerScore})
        this.getScores()
    }
    
    renderLeaderboard = () => {
        if (!this.props.winnerScore) {
        const highScoresCopy = [...this.state.highScores]
            console.log("a", highScoresCopy )
            return highScoresCopy.map(user => <LeaderboardRow index={highScoresCopy.indexOf(user)} leaderboardUser={user} />)
        }
        else
        {
        const updatedLocalScores = [...this.state.userScores, this.props.winnerScore] 
        const sortedLocalScores = this.sortUsersByLocalScore(updatedLocalScores)
            console.log("b", sortedLocalScores)
            return sortedLocalScores.map(user => <LeaderboardRow index={sortedLocalScores.indexOf(user)} leaderboardUser={user} />)
        }
    }
    
    
    
    render() { 
        
   
        
        return (    
                <Modal size="small" open={this.props.leaderboardOpen} closeOnDimmerClick={true}>
                    <Modal.Header className='sign-up-form header'>High Scores</Modal.Header>
                        <Modal.Content >
                            <div className="leaderboard-box-area">
                        <Grid centered columns={2}>
                            <Grid.Column>
                                <Table basic='very' fixed>
                                    <Table.Header>
                                        {                 
                                        this.props.catchPhrase?          
                                            <h3 class="ui header">Congratulations You Won!</h3>
                                            :
                                            null
                                            } 
                                        <Table.Row>
                                            <Table.HeaderCell center>Rank</Table.HeaderCell>
                                            <Table.HeaderCell>User</Table.HeaderCell>
                                            <Table.HeaderCell>Score</Table.HeaderCell>
                                        </Table.Row>
                                    </Table.Header>
                                
                                    <Table.Body>
                                        {this.renderLeaderboard()}
                                    </Table.Body>
                                </Table>
                            </Grid.Column>
                        </Grid>
                            </div>
                            {
                            this.props.catchPhrase?
                            <Button className="ui primary button" onClick={() => this.hardReload()}>New Game</Button>
                                :
                            <Button primary ui className="leaderboard-button" onClick={this.props.toggleLeaderboard}>Close</Button>
                            }
                        </Modal.Content>
                </Modal>

          );
    }
}
 
export default Leaderboard;