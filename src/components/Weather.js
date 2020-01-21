import React from 'react'
import SunriseSunset from './SunriseSunset'
import TempHumidityPressure from './TempHumidityPressure'
import City from './City'
import Grid from '@material-ui/core/Grid'
import PropTypes from 'prop-types'

const Weather = ({ city, coord, temp, humidity, pressure, sun }) => {
  return (
    <>
      <Grid item xs={12} md={4}>
        <City name={city} coord={coord} />
      </Grid>
      <Grid item xs={12} md={4}>
        <TempHumidityPressure
          temp={temp}
          humidity={humidity}
          pressure={pressure}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <SunriseSunset sunrise={sun.sunrise} sunset={sun.sunset} />
      </Grid>
    </>
  )
}

Weather.propTypes = {
  city: PropTypes.string.isRequired,
  coord: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lon: PropTypes.number.isRequired
  }),
  temp: PropTypes.number.isRequired,
  humidity: PropTypes.number.isRequired,
  pressure: PropTypes.number.isRequired,
  sun: PropTypes.shape({
    sunrise: PropTypes.number.isRequired,
    sunset: PropTypes.number.isRequired
  }).isRequired
}

export default Weather
