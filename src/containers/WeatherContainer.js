/** @jsx jsx */
import React, { useEffect, useState } from 'react'
import { css, jsx } from '@emotion/core'
import City from '../components/City'
import Weather from '../components/Weather'

const WeatherContainer = () => {
  const [weather, setWeather] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [city, setCity] = useState('Szczecin')

  async function fetchWeather() {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${process.env.REACT_APP_OPEN_WEATHER_KEY}`
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

  function onEnterClick(e) {
    if (e.key === 'Enter') {
      e.preventDefault()
      fetchWeather()
    }
  }

  useEffect(() => {
    fetchWeather()
  }, [])

  return (
    <>
      <form>
        <label
          htmlFor="city"
          css={css`
            display: flex;
            justify-content: center;
            margin-bottom: 1rem;
          `}
        >
          <input
            type="text"
            id="city-search"
            value={city}
            placeholder="Search for City"
            onChange={e => setCity(e.target.value)}
            onKeyDown={e => onEnterClick(e)}
            css={css`
              padding: 0.5rem;
              margin-left: 1rem;
              width: 12rem;
              border-style: solid;
              border-width: 0 0 1.5px 0;
              border-color: grey;
            `}
          />
        </label>
      </form>
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
