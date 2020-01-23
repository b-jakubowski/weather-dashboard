import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Card, CardContent, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'

const useStyles = makeStyles(theme => ({
  content: {
    height: 150,
    [theme.breakpoints.down('sm')]: {
      height: 100
    }
  },
  icon: {
    display: 'flex',
    justifyContent: 'center',
    width: 35,
    marginRight: 4
  },
  info: {
    display: 'flex',
    alignItems: 'center'
  },
  city: {
    marginBottom: 8,
    [theme.breakpoints.down('sm')]: {
      fontSize: '2rem'
    }
  },
  secondaryText: {
    fontSize: '1.3rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.1rem'
    }
  }
}))

const City = ({ name, coord }) => {
  const classes = useStyles()
  const todayDate = new Date().toDateString()

  return (
    <Card>
      <CardContent className={classes.content}>
        <Typography
          className={`${classes.city} ${classes.info}`}
          variant="h3"
          component="h3"
        >
          {name}
        </Typography>
        <Typography
          className={`${classes.info} ${classes.secondaryText}`}
          variant="h5"
          component="h5"
        >
          lng: {coord.lon} lat: {coord.lat}
        </Typography>
        <Typography
          className={`${classes.info} ${classes.secondaryText}`}
          variant="h5"
          component="h5"
        >
          {todayDate}
        </Typography>
      </CardContent>
    </Card>
  )
}

City.propTypes = {
  name: PropTypes.string.isRequired,
  coord: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lon: PropTypes.number.isRequired
  }).isRequired
}

export default City
