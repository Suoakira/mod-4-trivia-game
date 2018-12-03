import React, { Component } from 'react';

import './App.css';
import NavBar from './containers/NavBar';
import GameArea from './containers/GameArea'

const API = 'http://localhost:3000/api/v1/users/'
const FILM = "https://opentdb.com/api.php?amount=1&category=11&difficulty=easy&type=multiple"
const GAMES = "https://opentdb.com/api.php?amount=1&category=15&difficulty=easy&type=multiple"
const TV = "https://opentdb.com/api.php?amount=1&category=14&difficulty=easy&type=multiple"
const SPORTS = "https://opentdb.com/api.php?amount=1&category=21&difficulty=easy&type=multiple"
const GENERAL = "https://opentdb.com/api.php?amount=1&category=9&difficulty=easy&type=multiple"
const MATH = "https://opentdb.com/api.php?amount=1&category=12&difficulty=easy&type=multiple"
const GEOGRAPHY = "https://opentdb.com/api.php?amount=1&category=22&difficulty=easy"
const MUSIC = "https://opentdb.com/api.php?amount=1&category=12&difficulty=easy&type=multiple"
const MYTHOLOGY = "https://opentdb.com/api.php?amount=1&category=20&difficulty=easy&type=multiple"

export default class index extends Component {

  constructor(props) {
    super(props)

    this.answerArray = ['london', 'milan']
  
    this.state = {
      users: [],
      scores: [],
      correctAnswer: '',
      quizQuestions: [],
      userPoints: [1000, 1000],
      catchPhrase: false
    }
  }
  

  // removes quotes from questions
  iterate = (genre) => {
  
    genre.results[0].question.replace(/&quot;/g, '"')
    genre.results[0].correct_answer.replace(/&quot;/g, '"')
    genre.results[0].incorrect_answers[0].replace(/&quot;/g, '"')
    genre.results[0].incorrect_answers[1].replace(/&quot;/g, '"')
    genre.results[0].incorrect_answers[2].replace(/&quot;/g, '"')

  }

  fetchData = async (url) => {
    return await fetch(url)
      .then(resp => resp.json())
  }

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

    this.setState({
      users: [...data],
      quizQuestions: [film.results[0], games.results[0], tv.results[0], sports.results[0], general.results[0], math.results[0], geography.results[0], music.results[0], mythology.results[0]]
    })
  }

  // work in progress
  // parseLocalState = () => {
  //   const copyQuizQuestions = [...this.state.quizQuestions]
  //   copyQuizQuestions.map(question => this.iterate(question))
  //   this.setState({quizQuestions: copyQuizQuestions})
  // }

  // currently unused tile click handler 
  // handleTileClick = (question) =>
  //   console.log("clicked")
  

  
render() {

  

  const { handleTileClick, questionPoints, currentPoints } = this
  const { correctAnswer, quizQuestions } = this.state
  return (
    <div>
    <NavBar />

      <GameArea 
        quizQuestions={quizQuestions} 
        handleTileClick={handleTileClick} 
        questionPoints={questionPoints} 
        currentPoints={currentPoints} 
         correctAnswer={correctAnswer} 
        />
      

    </div>
  )
}
}

