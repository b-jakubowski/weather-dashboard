import React from 'react'
import SunriseSunset from './SunriseSunset'
import TempHumidityPressure from './TempHumidityPressure'
import City from './City'
import Grid from '@material-ui/core/Grid'

const Weather = ({ city, coord, temp, humidity, pressure, sun }) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={4}>
        <City name={city} coord={coord} />
      </Grid>
      <Grid item xs={4}>
        <TempHumidityPressure
          temp={temp}
          humidity={humidity}
          pressure={pressure}
        />
      </Grid>
      <Grid item xs={4}>
        <SunriseSunset sunrise={sun.sunrise} sunset={sun.sunset} />
      </Grid>
    </Grid>
    /*<div>
      <City name={city} coord={coord} />
      <TempHumidityPressure
        temp={temp}
        humidity={humidity}
        pressure={pressure}
      />
      <SunriseSunset sunrise={sun.sunrise} sunset={sun.sunset} />
    </div>*/
  )
}

export default Weather
