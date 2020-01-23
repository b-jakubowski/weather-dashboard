import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { makeStyles } from '@material-ui/core/styles'
import {
  faArrowDown,
  faThermometerHalf,
  faTint
} from '@fortawesome/free-solid-svg-icons'
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
  temp: {
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

const TempHumidityPressure = ({ temp, humidity, pressure }) => {
  const classes = useStyles()
  return (
    <Card>
      <CardContent className={classes.content}>
        <Typography
          className={`${classes.temp} ${classes.info}`}
          variant="h3"
          component="h3"
        >
          <div className={classes.icon}>
            <FontAwesomeIcon icon={faThermometerHalf} />
          </div>
          {temp} °C
        </Typography>
        <Typography
          className={`${classes.info} ${classes.secondaryText}`}
          variant="h5"
          component="h5"
        >
          <div className={classes.icon}>
            <FontAwesomeIcon icon={faTint} />
          </div>
          Humidity: {humidity} %
        </Typography>
        <Typography
          className={`${classes.info} ${classes.secondaryText}`}
          variant="h5"
          component="h5"
        >
          <div className={classes.icon}>
            <FontAwesomeIcon icon={faArrowDown} />
          </div>
          Pressure: {pressure} hPa
        </Typography>
      </CardContent>
    </Card>
  )
}

TempHumidityPressure.propTypes = {
  temp: PropTypes.number.isRequired,
  humidity: PropTypes.number.isRequired,
  pressure: PropTypes.number.isRequired
}

export default TempHumidityPressure
