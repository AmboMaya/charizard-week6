import React, { Component } from 'react'

export class Hints extends Component {
  constructor(props) {
  super(props) 
    this.state = {
      hints: ['this is hint 1', 'this is hint 2', 'this is hint 3', 'this is hint 4',]
    }
  }

  clickHandler () {
    let timer = setInterval(showHints, 10000)
  
    let counter = 0

  }
    showHints = () => {
    element.innerHTML= hints[counter]
    counter ++
    if (counter >= this.state.hints.length) {
      counter = 0
    }
  }
  render () {
    return (
      <div>
      <button onClick={this.clickHandler}>
      clickme
      </button>
        this is the hint component
        <div className='hint'>{this.state.hints[0]}</div>
        <div className='hint'>{this.state.hints[1]}</div>
        <div className='hint'>{this.state.hints[2]}</div>
        <div className='hint'>{this.state.hints[3]}</div>
      </div>
    )
  }
}

export default Hints
