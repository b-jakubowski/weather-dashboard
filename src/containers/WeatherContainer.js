import React, { useEffect, useState } from 'react'
import City from '../components/City'
import Weather from '../components/Weather'
import Search from '../components/Search'

const WeatherContainer = () => {
  const [weather, setWeather] = useState('')
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
        setIsLoading(false)
      })
      .catch(err => {
        console.error(err)
      })
  }

  useEffect(() => {
    fetchWeather()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Search onKeyDown={e => onEnterClick(e)} />
      {isLoading ? (
        <h4>Loading...</h4>
      ) : (
        <>
          <City name={weather.name} coord={weather.coord} />
          {weather.main && (
            <Weather
              temp={weather.main.temp}
              humidity={weather.main.humidity}
              pressure={weather.main.pressure}
              sun={weather.sys}
            />
          )}
        </>
      )}
    </>
  )
}

export default WeatherContainer
