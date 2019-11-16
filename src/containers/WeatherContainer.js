import React, { useEffect, useState } from 'react'
import City from '../components/City'

const WeatherContainer = () => {
  const [error, setErrors] = useState(false)
  const [weather, setWeather] = useState('')

  async function fetchData() {
    const res = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=Szczecin&APPID=${process.env.REACT_APP_OPEN_WEATHER_KEY}&units=metric`
    )

    res
      .json()
      .then(res => setWeather(res))
      .catch(err => {
        console.log(err)
        setErrors(err)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      {error ? (
        <h4>Something went wrong</h4>
      ) : (
        <City name={weather.name} coord={weather.coord} />
      )}
    </>
  )
}

export default WeatherContainer
