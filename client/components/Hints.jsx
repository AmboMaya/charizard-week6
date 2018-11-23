import React, { Component } from 'react'

export class Hints extends Component {
  constructor(props) {
  super(props) 
    this.state = {
      hints: ['hint1', 'hint2', 'this is hint 3', 'this is hint 4',],
      hint:'',
      counter: 1,
      answer: ""
    }
    this.clickHandler = this.clickHandler.bind(this)
    this.showHints = this.showHints.bind(this)
    this.changeHandler = this.changeHandler.bind(this)
  }

    showHints () {
    this.setState({hint: this.state.hints[this.state.counter], 
    counter: this.state.counter +1})
    if (this.state.counter >= this.state.hints.length) {
      //somethign
    }
  }
    clickHandler () {
    this.setState({hint:this.state.hints[0]})
    let timer = setInterval(this.showHints, 3000)
    }

    changeHandler (e) {
      this.setState({answer: e.target.value})
    }
  render () {
    return (
      <div>
      <button onClick={this.clickHandler}>
      Start hints
      </button>
      <div className='hint'><h3>{this.state.hint}</h3></div>
      <input type="text" onChange={this.changeHandler} placeholder="Enter the answer" value={this.state.answer} />
      
      </div>
    )
  }
}

export default Hints
