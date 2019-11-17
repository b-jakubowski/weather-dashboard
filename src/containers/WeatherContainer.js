import React, { useEffect, useState } from 'react'
import City from '../components/City'
import Weather from '../components/Weather'

const WeatherContainer = () => {
  const [weather, setWeather] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  async function fetchData() {
    const res = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=Szczecin&units=metric&APPID=${process.env.REACT_APP_OPEN_WEATHER_KEY}`
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
    fetchData()
  }, [])

  return (
    <>
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
