import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import dayjs from 'dayjs'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { makeStyles } from '@material-ui/core/styles'
import { Card, CardContent, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'

const useStyles = makeStyles({
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: 150
  },
  icon: {
    display: 'flex',
    justifyContent: 'center',
    width: 35,
    marginRight: 4
  },
  text: {
    fontSize: '1.3rem',
    flex: 1,
    color: 'white',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  sunrise: {
    backgroundColor: '#FF8100'
  },
  sunset: {
    backgroundColor: '#6A0D83'
  }
})

const SunriseSunset = ({ sunrise, sunset }) => {
  const classes = useStyles()

  return (
    <Card>
      <CardContent className={classes.content}>
        <Typography
          className={`${classes.info} ${classes.text} ${classes.sunrise}`}
          variant="h3"
          component="h3"
        >
          <div className={classes.icon}>
            <FontAwesomeIcon icon={faSun} />
          </div>
          Sunrise: {dayjs.unix(sunrise).format('HH:mm')}
        </Typography>
        <Typography
          className={`${classes.info} ${classes.text} ${classes.sunset}`}
          variant="h3"
          component="h3"
        >
          <div className={classes.icon}>
            <FontAwesomeIcon icon={faMoon} />
          </div>
          Sunset: {dayjs.unix(sunset).format('HH:mm')}
        </Typography>
      </CardContent>
    </Card>
  )
}

SunriseSunset.propTypes = {
  sunrise: PropTypes.number.isRequired,
  sunset: PropTypes.number.isRequired
}

export default SunriseSunset
