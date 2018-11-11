import React, { Fragment } from 'react'
import Header from './Layouts/Header'
import Footer from './Layouts/Footer'
import Prices from './Layouts/Prices'
import Map from './Layouts/Map'


class App extends React.Component {
  render () {
    return (
      <Fragment>
        <Header />
        <Prices />
        <Map />
        <Footer />
      </Fragment>
    )
  }
}

export default App
