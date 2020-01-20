import React from 'react'
import SunriseSunset from './SunriseSunset'
import TempHumidityPressure from './TempHumidityPressure'
import City from './City'
import Grid from '@material-ui/core/Grid'

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

export default Weather
