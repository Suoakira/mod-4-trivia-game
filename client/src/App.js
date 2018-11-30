import React, { Component } from 'react';

import './App.css';
import NavBar from './containers/NavBar';
import GameArea from './containers/GameArea'

const API = 'http://localhost:3000/api/v1/users/'
const FILM = "https://opentdb.com/api.php?amount=1&category=11&difficulty=easy&type=multiple"
const GAMES = "https://opentdb.com/api.php?amount=1&category=15&difficulty=easy&type=multiple"

export default class App extends Component {
  state = {
      users: [],
      scores: [],
      quizQuestions: []
  
  }

  fetchData = async (url) => {
      return await fetch(url)
        .then(resp => resp.json())
    }





  
    async componentDidMount() {
      const data = await this.fetchData(API)
      const film = await this.fetchData(FILM)
      const games = await this.fetchData(GAMES)

      this.setState({
        users: [...data],
        quizQuestions: [film.results[0], games.results[0]]
      })
    }

  
  
render() {
  return (
    <div>
    <NavBar />
    <GameArea />
    </div>
  )
}
}

