import React, { Component } from 'react'

export class Hints extends Component {
  constructor(props) {
  super(props) 
    this.state = {
      hints: ['this is hint 1', 'this is hint 2', 'this is hint 3', 'this is hint 4',],
      hint:'test',
      counter: 0
    }
    this.clickHandler = this.clickHandler.bind(this)
    this.showHints = this.showHints.bind(this)
  }

    showHints () {
    this.setState({hint: this.state.hints[this.state.counter], 
    counter: this.state.counter +1})
    if (this.state.counter >= this.state.hints.length) {
      //somethign
    }
  }
    clickHandler () {
    console.log("button")
    let timer = setInterval(this.showHints, 1000)
    }
  render () {
    return (
      <div>
      <button onClick={this.clickHandler}>
      clickme
      </button>
        this is the hint component
        <h3>{this.state.hint}</h3>
        <div className='hint'>{this.state.hints[0]}</div>
        <div className='hint'>{this.state.hints[1]}</div>
        <div className='hint'>{this.state.hints[2]}</div>
        <div className='hint'>{this.state.hints[3]}</div>
      </div>
    )
  }
}

export default Hints
