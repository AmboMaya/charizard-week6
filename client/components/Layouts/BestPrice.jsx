import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      width: 800
    },
    row: {
      display: 'flex',
      justifyContent: 'center',
    },
    paragraph: {
      paddingLeft: 32,
      paddingRight: 32,
      justifyContent: 'center',
      marginTop: 10,
      marginBottom: 70,
      marginLeft: 20,
      marginRight: 20, 
    }
})

const Prices = (props) => {
    const { classes } = props
    return (
      <div className={classes.row}>
          <Typography variant="h5" gutterBottom className={classes.paragraph}>
            {props.price91}
          </Typography>
          <Typography variant="h5" gutterBottom className={classes.paragraph}>
            {props.price95}
          </Typography>
          <Typography variant="h5" gutterBottom className={classes.paragraph}>
            {props.price98}
          </Typography>
          <Typography variant="h5" gutterBottom className={classes.paragraph}>
            {props.priceDiesel}
          </Typography>
      </div>
    )
}
 
Prices.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Prices)
