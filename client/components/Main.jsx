import React, { Component } from 'react'
import Hints from './Hints'
import Map from './Map'

export class Main extends Component {
  constructor(props) {
  super(props)
  this.state = {
    question1: {
      hints: ['Entertainment', 'EDAs hidden talents','Alcohol required', 'Better with Allies rap'],
      position: {
        lat: -36.8537569,
        lng: 174.7583916
      },
      answer : 'Happy KTV',
      
      show: false,
      
    },
    question2: {
      hints: ['', 'EDAs hidden talents','Alcohol required', 'Better with Allies rap'],
      position: {
        lat: -36.880496,
        lng: 174.795649
      },
      answer : 'EDA',
      counter: 1,
      show: false
    },
    counter: 1
  }
  this.clickHandler = this.clickHandler.bind(this)
  this.showHints = this.showHints.bind(this)
  this.changeHandler = this.changeHandler.bind(this)
  }
  
 
  showHints () {
    this.setState({hint: this.state.question1.hints[this.state.counter], 
    counter: this.state.counter +1})
    if (this.state.counter >= this.state.question1.hints.length) {
      // clearInterval()
      this.setState({
        question1: {
          show: true
        }
      })
    }
  }
    clickHandler () {
    this.setState({hint:this.state.question1.hints[0]})
    let timer = setInterval(this.showHints, 3000)
    }

    changeHandler (e) {
      this.setState({answer: e.target.value})
    }
  render() {
    return (
      <React.Fragment>
      <div className="container ">
        <div className="row ">
          <div className='col s12 m7'>
            <Map question={this.state.question1}/>
          </div>
          <div className='col s12 m5'>
            <Hints  clickHandler={this.clickHandler} 
                    changeHandler={this.changeHandler}
                    hint={this.state.hint}/>
          </div>
        </div>
        </div>
      </React.Fragment>
      
    )
  }
}

export default Main
