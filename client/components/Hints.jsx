import React, { Component } from 'react'

export class Hints extends Component {
  constructor(props)
  super(props) {
    this.state = {
      hint1: "this is hint 1",
      hint2: "this is hint 2",
      hint3: "this is hint 3",
      hint4: "this is hint 4"
    }
  }
  render() {
    return (
      <div>
        this is the hint component
        <div className='Hint'>placeholder: Hint1</div>
        <div className='Hint'></div>
        <div className='Hint'></div>
        <div className='Hint'></div>
      </div>
    )
  }
}

export default Hints
