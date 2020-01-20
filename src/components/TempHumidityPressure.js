import { Card, CardContent, Typography } from '@material-ui/core'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { makeStyles } from '@material-ui/core/styles'
import {
  faArrowDown,
  faThermometerHalf,
  faTint
} from '@fortawesome/free-solid-svg-icons'

const useStyles = makeStyles({
  card: {
    minWidth: 300
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
    marginBottom: 4
  },
  secondaryText: {
    fontSize: '1.3rem'
  }
})

const TempHumidityPressure = ({ temp, humidity, pressure }) => {
  const classes = useStyles()
  return (
    <Card className={classes.card}>
      <CardContent>
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

export default TempHumidityPressure
