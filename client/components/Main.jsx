import React, { Component } from 'react'
import Hints from './Hints'
import Map from './Map'

export class Main extends Component {
  state ={
    question1: {
      hints: ['Entertainment', 'EDAs hidden talents','Alcohol required', 'Better with Allies rap'],
      position: {
        lat: -36.8537569,
        lng: 174.7583916
      },
      answer : 'Happy KTV',
      show: false
    },
    question1: {
      hints: ['', 'EDAs hidden talents','Alcohol required', 'Better with Allies rap'],
      position: {
        lat: -36.880496,
        lng: 174.795649
      },
      answer : 'EDA',
      show: false
    }
  }
  render() {
    return (
      <React.Fragment>
        This main Page
        <Hints />
        <div className="row">
          <div className='col s12 m7'>
            <Map question={this.state.question1}/>
          </div>
          <div className='col s12 m5'>
            {/* <Map /> change this to hints */}
          </div>
        </div>
      </React.Fragment>
      
    )
  }
}

export default Main
