import React, { Component } from 'react';

import './App.css';
import NavBar from './containers/NavBar';
import GameArea from './containers/GameArea'
import SignUp from './components/SignUp'
import Leaderboard from './containers/Leaderboard';

const API = 'http://localhost:3000/api/v1/users/'
const FILM = "https://opentdb.com/api.php?amount=1&category=11&difficulty=easy&type=multiple"
const GAMES = "https://opentdb.com/api.php?amount=1&category=15&difficulty=easy&type=multiple"
const TV = "https://opentdb.com/api.php?amount=1&category=14&difficulty=easy&type=multiple"
const SPORTS = "https://opentdb.com/api.php?amount=1&category=21&difficulty=easy&type=multiple"
const GENERAL = "https://opentdb.com/api.php?amount=1&category=9&difficulty=easy&type=multiple"
const MATH = "https://opentdb.com/api.php?amount=1&category=19&difficulty=easy&type=multiple"
const GEOGRAPHY = "https://opentdb.com/api.php?amount=1&category=22&difficulty=easy"
const MUSIC = "https://opentdb.com/api.php?amount=1&category=12&difficulty=easy&type=multiple"
const MYTHOLOGY = "https://opentdb.com/api.php?amount=1&category=20&difficulty=easy&type=multiple"


export default class index extends Component {

  constructor(props) {
    super(props)

    this.answerArray = ['italy', 'australia', 'india', 'mexico', 'france' ]


    // this.answerImageMap = {
    //   'london': 4,
    //   'milan': 3
    // }
  
    this.state = {
      users: [],
      scores: [],
      correctAnswer: '',
      quizQuestions: [],
      userPoints: [1000, 1000],
      catchPhrase: false,
      // currentUser: window.localStorage.getItem('user') ? JSON.parse(window.localStorage.getItem('user')) : null
      currentUser: null,
      leaderboardOpen: false

    }
  }

  toggleLeaderboard = () => {
    this.setState({
      leaderboardOpen: !this.state.leaderboardOpen
    })
    // console.log('leaderboard')
  }
  
  getCurrentUser = currentUser => {
      this.setState({
          currentUser
      })
      // window.localStorage.setItem('user', JSON.stringify(currentUser))
      console.log(this.state.currentUser)
  }

  toggleCatchPhrase = () =>
    this.setState({ catchPhrase: !this.state.catchPhrase})
  


  questionPoints = (answer) => {
      if (answer === "correct" ) {
      this.setState({
        userPoints: [this.state.userPoints[0] + 50, this.state.userPoints[1]]
      })
        return this.state.userPoints[0]
    }
      else if (answer === "incorrect") {
      this.setState({
        userPoints: [this.state.userPoints[0] - 50, this.state.userPoints[1]]
      })
        return this.state.userPoints[0]
    }
      else if (answer === "notcatchphrase" ) {
      this.setState({
        userPoints: [this.state.userPoints[0], this.state.userPoints[1] - 100]
      })
      return this.state.userPoints[0]
        }  
    }

    shuffleAnswer = (a) => {
      for (let i = a.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [a[i], a[j]] = [a[j], a[i]];
      }
      return a[0];
  }

    currentPoints = () =>
      this.state.userPoints

  fetchData = async (url) => {

    let resp = await fetch(url)
      .then(resp => resp.json())
    // this.iterate(resp)
    return resp
  }


  async componentDidMount() {

    const data = await this.fetchData(API)


    const film = await this.fetchData(FILM)
    const games = await this.fetchData(GAMES)
    const tv = await this.fetchData(TV)
    const sports = await this.fetchData(SPORTS)
    const general = await this.fetchData(GENERAL)
    const math = await this.fetchData(MATH)
    const geography = await this.fetchData(GEOGRAPHY)
    const music = await this.fetchData(MUSIC)
    const mythology = await this.fetchData(MYTHOLOGY)


    this.setState({correctAnswer: this.shuffleAnswer(this.answerArray)})
    // this.setState({imageId: this.answerImageMap[this.state.correctAnswer]})
    
    this.setState({
      correctAnswer: this.shuffleAnswer(this.answerArray),
      users: [...data],
      quizQuestions: [film.results[0], games.results[0], tv.results[0], sports.results[0], general.results[0], math.results[0], geography.results[0], music.results[0], mythology.results[0]]

    }) 
    
    
  }

  
render() {
  
  const { handleTileClick, questionPoints, currentPoints, toggleCatchPhrase, getCurrentUser } = this
  const { correctAnswer, quizQuestions, catchPhrase, currentUser, users  } = this.state

  return (
    <div>
    <NavBar currentUser={currentUser}
        toggleLeaderboard={this.toggleLeaderboard}
        leaderboardOpen={this.state.leaderboardOpen}
        catchPhrase={catchPhrase}
     />
     
      {/* {!currentUser && <SignUp getCurrentUser={getCurrentUser} />} */}
      <SignUp getCurrentUser={getCurrentUser} />
      <Leaderboard users={users} />

      <GameArea 
        quizQuestions={quizQuestions} 
        handleTileClick={handleTileClick} 
        questionPoints={questionPoints} 
        currentPoints={currentPoints} 
        correctAnswer={correctAnswer}
        catchPhrase={catchPhrase}
        toggleCatchPhrase={toggleCatchPhrase}
        currentUser={currentUser}
        toggleLeaderboard={this.toggleLeaderboard}
        />
      

    </div>
  )
}
}

