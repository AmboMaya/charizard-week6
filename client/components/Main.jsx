import React, { Component } from 'react'
import Hints from './Hints'
import Map from './Map'

export class Main extends Component {
  render() {
    return (
      <React.Fragment>
        This main Page
        <Hints />
        <Map />
      </React.Fragment>
      
    )
  }
}

export default Main
