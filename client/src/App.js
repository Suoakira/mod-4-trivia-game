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
  state = {
    users: [],
    scores: [],
    quizQuestions: []
  }
  // removes quotes from questions
  iterate = (genre) => {
  
    genre.question.replace(/&quot;/g, '"')
    genre.correct_answer.replace(/&quot;/g, '"')
    genre.incorrect_answers[0].replace(/&quot;/g, '"')
    genre.incorrect_answers[1].replace(/&quot;/g, '"')
    genre.incorrect_answers[2].replace(/&quot;/g, '"')

  }


  fetchData = async (url) => {
    return await fetch(url)
      .then(resp => resp.json())
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

  

  const { handleTileClick } = this
  return (
    <div>
    <NavBar />

      <GameArea  quizQuestions={this.state.quizQuestions} handleTileClick={handleTileClick} />
      

    </div>
  )
}
}

