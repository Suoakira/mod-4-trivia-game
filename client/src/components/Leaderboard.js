import React, { Component } from 'react';


class Leaderboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userScores: [], 
            highScores: []
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


    
    render() { 
       
        return (
            <div>
   
            </div>
          );
    }
}
 
export default Leaderboard;