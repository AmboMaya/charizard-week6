import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const styles = ({
  buttonGreen: {
    margin: 30,
    marginTop: 40,
    color: '#fff',
    backgroundColor: '#109121',
    width: 100,
    height: 100
  },
  buttonYellow: {
    margin: 30,
    marginTop: 40,
    color: '#fff',
    backgroundColor: '#ffea00',
    width: 100,
    height: 100
  },
  buttonBlue: {
    margin: 30,
    marginTop: 40,
    color: '#fff',
    backgroundColor: '#0091ea',
    width: 100,
    height: 100
  },
  buttonBlack: {
    margin: 30,
    marginTop: 40,
    color: '#fff',
    backgroundColor: '#000000',
    width: 100,
    height: 100
  },
  row: {
    display: 'flex',
    justifyContent: 'center',
  }
})

function Prices(props) {
  const { classes } = props
  
  return (
    <div className={classes.row} spacing={16}>
    <Button variant="fab" color="secondary" className={classes.buttonGreen}>91 </Button>
    <Button variant="fab" color="secondary" className={classes.buttonYellow}>95 </Button>
    <Button variant="fab" color="secondary" className={classes.buttonBlue}>98 </Button>
    <Button variant="fab" color="secondary" className={classes.buttonBlack}>Diesel </Button>
    </div>
  )
}

Prices.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Prices);
