import React, { Fragment } from 'react'
import Header from './Layouts/Header'
import Footer from './Layouts/Footer'
import FuelType from './Layouts/FuelType'
import Prices from './Layouts/Prices'
import Map from './Layouts/Map'

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


const App = (props) => {
  const { classes } = props

  return (
      <Fragment>
        <Header />
        <FuelType />
        <Prices />
        <div className={classes.root}>
            <Grid container spacing={24}>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <Map />
                </Paper>
              </Grid>
            </Grid>
        </div>
        <Footer />
      </Fragment>
    )
  }

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);

//note to self: route could go here
