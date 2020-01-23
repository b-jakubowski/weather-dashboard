import React from 'react'
import Weather from '../components/Weather'
import Forecast from '../components/Forecast'
import useWeather from '../hooks/useWeather'
import Grid from '@material-ui/core/Grid'
import Map from '../components/Map'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: '#e5e5e5',
    borderRadius: '1rem',
    padding: '2rem',
    marginTop: '6rem',
    [theme.breakpoints.down('xs')]: {
      marginTop: '4rem'
    }
  },
  infoText: {
    color: 'white',
    textAlign: 'center'
  }
}))

const WeatherContainer = ({ city }) => {
  const { weather, forecast, isLoading, isError } = useWeather(city)
  const classes = useStyles()

  const WeatherAndForecast = () => {
    return (
      <>
        {!isError && forecast.temp && weather.main ? (
          <Grid container spacing={2}>
            <Weather
              city={weather.name}
              coord={weather.coord}
              temp={weather.main.temp}
              humidity={weather.main.humidity}
              pressure={weather.main.pressure}
              sun={weather.sys}
            />
            <Grid item xs={12} md={8}>
              <Forecast forecast={forecast} />
            </Grid>
            <Grid item xs={12} md={4}>
              <Map lat={weather.coord.lat} lon={weather.coord.lon} />
            </Grid>
          </Grid>
        ) : (
          <h4 className={classes.infoText}>Cant find results for '{city}'</h4>
        )}
      </>
    )
  }

  return (
    <>
      <div className={classes.container}>
        {isLoading ? (
          <h4 className={classes.infoText}>Loading....</h4>
        ) : (
          <WeatherAndForecast />
        )}
      </div>
    </>
  )
}

export default WeatherContainer
