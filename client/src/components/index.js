import React, { Component } from 'react'

const API = 'http://localhost:3000/api/v1/users/'

export default class index extends Component {
    state = {
        users: [],
        scores: []
    }

    fetchData = async (url) => {
        return await fetch(url)
          .then(resp => resp.json())
    
      }
    
      async componentDidMount() {
        const data = await this.fetchData(API)
        this.setState({users: [...data]})
      }
    
  render() {
    return (
      <div>

        
      </div>
    )
  }
}
