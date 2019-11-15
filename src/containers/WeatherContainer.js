import React, { useState, useEffect } from 'react'

const WeatherContainer = () => {
  const [error, setErrors] = useState(false)
  const [weather, setWeather] = useState('')

  function fetchData() {
    const res = fetch(
      'https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1'
      // `http://api.openweathermap.org/data/2.5/weather?q=Szczecin&APPID=${process.env.REACT_APP_OPEN_WEATHER_KEY}`
    )

    res
      .then(res => {
        return setWeather(res.json())
      })
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
      {error ? <h3>Something went wrong</h3> : <h3>{weather.name}</h3>}
    </>
  )
}

export default WeatherContainer
