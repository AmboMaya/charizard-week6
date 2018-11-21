import React, { Fragment } from 'react'
import Header from './Layouts/Header'
import Footer from './Layouts/Footer'
import BestPrice from './Layouts/BestPrice'
import FuelType from './Layouts/FuelType'
import MyMapComponent from './Layouts/MyMapComponent'
import * as api from './api/index'


import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
})


class App extends React.Component {
  constructor (props){
    super (props)

  }
  
  componentDidMount() {
    this.bestPrices()
  }

  bestPrices() {
    api.getPrices()
    .then(prices => {
      console.log(prices)
      this.setState({
        bestPrice: prices
      })
    })
  }

  fuelTypeSelector = (fuelType) => {
    let bestPrice = null
    if(this.state && this.state.bestPrice) {
      bestPrice = this.state.bestPrice
    } else return
    
    this.setState({ selectedFuelType: bestPrice[fuelType] })
  }


  
  render() {
    const { classes } = this.props
    let bestPrice = null
    if(this.state && this.state.bestPrice) {
      bestPrice = this.state.bestPrice
    } 
    let selectedFuelType = null
    if(this.state && this.state.selectedFuelType) {
      selectedFuelType = this.state.selectedFuelType
    }

    let centerPosition = selectedFuelType ?  selectedFuelType.station.position : { lat: -36.848461, lng: 174.763336 }

    let markerPosition =  selectedFuelType ?  selectedFuelType.station.position : { lng: 174.763336, lat: -36.848461 }
    
    let address = selectedFuelType? selectedFuelType.station.address:null
    let provider = selectedFuelType? selectedFuelType.station.provider :null

    return (
      <Fragment>
        <Header />
        <FuelType fuelTypeSelector={this.fuelTypeSelector}/>
        <BestPrice price91={bestPrice ? bestPrice['91'].price : ''} 
            price95={bestPrice ? bestPrice['95'].price : ''} 
            price98={bestPrice ? bestPrice['98'].price : ''}
            priceDiesel={bestPrice ? bestPrice['diesel'].price : ''} />
        <div className={classes.root}>
            <Grid container spacing={24}>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                <MyMapComponent
                    isMarkerShown = {selectedFuelType}
                    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCwcx7MqIw3MQeBhutUBZI2tB6sFh5IR6U"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `400px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                    center={centerPosition}
                    marker={markerPosition}
                    address={address}
                    provider={provider}
                  />
                </Paper>
              </Grid>
            </Grid>
        </div>
        <Footer />
      </Fragment>
    )
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(App);
