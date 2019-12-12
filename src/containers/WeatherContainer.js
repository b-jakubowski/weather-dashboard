import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import City from '../components/City'
import Weather from '../components/Weather'
import Search from '../components/Search'
import Forecast from '../components/Forecast'

const Container = styled.div`
  background-image: radial-gradient(
    circle farthest-corner at 84.6% 77.8%,
    rgba(86, 89, 218, 1) 0%,
    rgba(95, 208, 248, 1) 90%
  );
  border-radius: 1rem;
  padding: 2rem;
`

function mapForecast(weatherData) {
  const tempByDay = {}
  const minTempByDay = {}
  const matchDate = /^\d{4}-\d*-\d*/g

  weatherData.list.forEach(forecast => {
    const today = new Date().toString().split(' ')[0]
    const dateKey = new Date(forecast.dt_txt.match(matchDate))
      .toString()
      .split(' ')[0]

    switch (true) {
      case dateKey === today:
        break
      case dateKey in tempByDay:
        tempByDay[dateKey].push(forecast.main.temp)
        minTempByDay[dateKey].push(forecast.main.temp_min)
        break
      default:
        tempByDay[dateKey] = [forecast.main.temp]
        minTempByDay[dateKey] = [forecast.main.temp_min]
        break
    }
  })

  return { temp: getExtremeTemp(tempByDay, 'max'), minTemp: getExtremeTemp(minTempByDay, 'min') }
}

function getExtremeTemp(obj, extreme) {
  Object.keys(obj).forEach(day => {
    obj[day] = Math[extreme](...obj[day])
  })

  return obj
}

const WeatherContainer = () => {
  const [weather, setWeather] = useState('')
  const [forecast, setForecast] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  function onEnterClick(e) {
    if (e.key === 'Enter') {
      e.preventDefault()
      fetchWeather(e.target.value)
    }
  }

  async function fetchWeather(value = 'Szczecin') {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&APPID=${process.env.REACT_APP_OPEN_WEATHER_KEY}`
    )
    setIsLoading(true)
    res
      .json()
      .then(res => {
        setWeather(res)
      })
      .then(() => {
        fetchForecast(value)
        setIsLoading(false)
      })
      .catch(err => {
        throw err
      })
  }

  async function fetchForecast(value = 'Szczecin') {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${value}&units=metric&APPID=${process.env.REACT_APP_OPEN_WEATHER_KEY}`
    )
    res
      .json()
      .then(res => {
        setForecast(mapForecast(res))
      })
      .catch(err => {
        throw err
      })
  }

  useEffect(() => {
    fetchWeather()
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <Search onKeyDown={e => onEnterClick(e)} />
      {isLoading ? (
        <h4>Loading...</h4>
      ) : (
        <Container>
          <City name={weather.name} coord={weather.coord} />
          {weather.main && (
            <Weather
              temp={weather.main.temp}
              humidity={weather.main.humidity}
              pressure={weather.main.pressure}
              sun={weather.sys}
            />
          )}
          {forecast && <Forecast forecast={forecast} />}
        </Container>
      )}
    </>
  )
}

export default WeatherContainer
